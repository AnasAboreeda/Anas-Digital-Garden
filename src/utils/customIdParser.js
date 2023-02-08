// Parses the custom added it to keep the url hash un-affected irrespective of translation
// This is a hot-fix that relies on syntax and works only for headers (# h1 to ###### h6)
// Ex: ## GraphQL Mutations Title can be in any language {#graphql-mutations}
// The custom id should be enclosed with in `{#id-in-english}` in english.
export const customIdParser = (content) => {
  let resultId = '#';

  if (content !== undefined && content) {
    try {
      if (Array.isArray(content)) {
        content = content.map((item) => {
          if (typeof item === 'string') {
            return item;
          }
          if (item.props?.children?.props?.children) {
            return item.props.children.props.children;
          }
          return item.props.children;
        }).join(' ');
      }

      if (typeof content === 'object') {
        customIdParser(content.props.children);
      }

      if (typeof content === 'string') {
        const [text, id] = content.split("{#");

        if (!!text && !!id) {
          resultId = id.replace('}', '').replace(/\s+/g, '').toLowerCase();
        } else {
          resultId = content.replace(/\s+/g, '').toLowerCase();
        }
      }
    } catch (error) {
      console.error('Error in customIdParser');
      console.error(`typeof content: ${typeof content}`);
      console.error(`content`);
      console.error(JSON.stringify(content, null, 2));
      console.error(error);
    }

    return {
      content,
      id: resultId
    }

  }
  return {
    content,
    id: resultId
  }

}

