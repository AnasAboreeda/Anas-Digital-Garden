import React, { useState } from 'react';
import config from '../../../config';
import TreeNode from './treeNode';

function getOriginalData(edges) {
  return config.sidebar.ignoreIndex
    ? edges.filter(
      ({
        node: {
          fields: { slug },
        },
      }) => slug !== '/'
    )
    : edges;
}

function getNestedTreeObjects(originalData) {
  return originalData.reduce(
    (
      accu,
      {
        node: {
          fields: { slug, title },
        },
      }
    ) => {
      const parts = slug.split('/');

      let { items: prevItems } = accu;

      const slicedParts = config.gatsby && config.gatsby.trailingSlash ? parts.slice(1, -2) : parts.slice(1, -1);

      for (const part of slicedParts) {
        let tmp = prevItems && prevItems.find(({ label }) => label == part);

        if (tmp) {
          if (!tmp.items) {
            tmp.items = [];
          }
        } else {
          tmp = { label: part, items: [] };
          prevItems.push(tmp);
        }
        prevItems = tmp.items;
      }
      const slicedLength = config.gatsby && config.gatsby.trailingSlash ? parts.length - 2 : parts.length - 1;

      const existingItem = prevItems.find(({ label }) => label === parts[slicedLength]);

      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
      } else {
        prevItems.push({
          label: parts[slicedLength],
          url: slug,
          items: [],
          title,
        });
      }
      return accu;
    },
    { items: [] }
  );
}

function sortTreeItems(tree) {
  if (tree.items.length === 0) {
    return tree;
  }

  const {
    sidebar: { forcedNavOrder = [] },
  } = config;

  const tmp = [...forcedNavOrder];

  tmp.reverse();

  tree.items = tree.items.sort(function (a, b) {
    if (a.label.toLowerCase() < b.label.toLowerCase())
      return -1;
    if (a.label.toLowerCase() > b.label.toLowerCase())
      return 1;
    return 0;
  });

  // sort items alphabetically.
  tree.items.map((item) => {
    item.items = item.items.sort(function (a, b) {
      if (a.label.toLowerCase() < b.label.toLowerCase())
        return -1;
      if (a.label.toLowerCase() > b.label.toLowerCase())
        return 1;
      return 0;
    });
  });

  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');

    let { items: prevItems } = accu;

    const slicedParts = config.gatsby && config.gatsby.trailingSlash ? parts.slice(1, -2) : parts.slice(1, -1);

    for (const part of slicedParts) {
      let tmp = prevItems.find((item) => item && item.label == part);

      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = { label: part, items: [] };
        prevItems.push(tmp);
      }
      if (tmp && tmp.items) {
        prevItems = tmp.items;
      }
    }

    prevItems = prevItems.sort(function (a, b) {
      if (a.label.toLowerCase() < b.label.toLowerCase())
        return -1;
      if (a.label.toLowerCase() > b.label.toLowerCase())
        return 1;
      return 0;
    });


    const slicedLength = config.gatsby && config.gatsby.trailingSlash ? parts.length - 2 : parts.length - 1;

    const index = prevItems.findIndex(({ label }) => label === parts[slicedLength]);

    if (prevItems.length) {
      accu.items.unshift(prevItems.splice(index, 1)[0]);
    }
    return accu;
  }, tree);
}

// refatore this function to be more readable.
const calculateTreeData = (edges) => {
  const originalData = getOriginalData(edges);

  const tree = getNestedTreeObjects(originalData);

  return sortTreeItems(tree);
};

const Tree = ({ edges }) => {
  let [treeData] = useState(() => {
    return calculateTreeData(edges);
  });

  const defaultCollapsed = {};

  for (let i = 0; i < treeData.items.length; i++) {
    defaultCollapsed[treeData.items[i].label] = true;

    for (let j = 0; j < treeData.items[i].items.length; j++) {
      defaultCollapsed[treeData.items[i].items[j].label] = true;
      for (let k = 0; k < treeData.items[i].items[j].items.length; k++) {
        defaultCollapsed[treeData.items[i].items[j].items[k].label] = true;
      }
    }
  }

  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const toggle = (label) => {
    setCollapsed({
      ...collapsed,
      [label]: !collapsed[label],
    });
  };

  return (
    <TreeNode
      className={`${config.sidebar.frontLine ? 'showFrontLine' : 'hideFrontLine'} firstLevel`}
      setCollapsed={toggle}
      collapsed={collapsed}
      {...treeData}
    />
  );
};

export default Tree;


