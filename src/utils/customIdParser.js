// Parses the custom added it to keep the url hash un-affected irrespective of translation
// This is a hot-fix that relies on syntax and works only for headers (# h1 to ###### h6)
// Ex: ## GraphQL Mutations Title can be in any language {#graphql-mutations}
// The custom id should be enclosed with in `{#id-in-english}` in english.
export const customIdParser = (content) => {
  let resultId = '#';

  if (content !== undefined) {
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

      const [text, id] = content.split("{#");


      if (!!text && !!id) {
        resultId = id.replace('}', '').replace(/\s+/g, '').toLowerCase();
      } else {
        resultId = content.replace(/\s+/g, '').toLowerCase();
      }
    } catch (error) {
      console.error(typeof content, Array.isArray(content), content)
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
