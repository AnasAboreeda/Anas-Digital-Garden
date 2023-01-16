import { customIdParser } from '../../src/utils/customIdParser';


// Test 1
describe('CustomIdParser', () => {
  // it should return the id as the content if the content is not an array
  it('should return the id as the content if the content is not an array', () => {
    const content = 'GraphQL Mutations';
    const result = customIdParser(content);
    expect(result.id).toBe('graphqlmutations');
  });

  // it should return the id as the content if the content is an array with a single string
  it('should return the id as the content if the content is an array with a single string', () => {
    const content = ['GraphQL Mutations'];
    const result = customIdParser(content);
    expect(result.id).toBe('graphqlmutations');
  })

  // it should return the id as the content if the content is an array with multiple strings
  it('should return the id as the content if the content is an array with multiple strings', () => {
    const content = ['GraphQL', 'Mutations'];
    const result = customIdParser(content);
    expect(result.id).toBe('graphqlmutations');
  });

  // it should return the id as the content if the content is an array with a single object with a single string
  it('should return the id as the content if the content is an array with a single object with a single string', () => {
    const content = [{ props: { children: 'GraphQL Mutations' } }];
    const result = customIdParser(content);
    expect(result.id).toBe('graphqlmutations');
  })



  // it should return the id as the content if the content is an array with multiple objects with multiple strings
  it('should return the id as the content if the content is an array with multiple objects with multiple strings', () => {
    const content = [{ props: { children: ['GraphQL'] } }, { props: { children: ['Mutations'] } }];
    const result = customIdParser(content);
    expect(result.id).toBe('graphqlmutations');
  })

  // it should return the id as the content if the content is an array with multiple objects and strings
  it('should return the id as the content if the content is an array with multiple objects and strings', () => {
    const content = [{ props: { children: ['GraphQL'] } }, 'Mutations'];
    const result = customIdParser(content);
    expect(result.id).toBe('graphqlmutations');
  })

  it('should return the id as the content if the content is an array with multiple objects and strings', () => {
    const content = ['3. Big-', { "props": { "parentName": "h2", "className": "math math-inline", "originalType": "span", "mdxType": "span", "children": "ω" } }, ` (Big Omega) Notation (describes the ‘best' case scenario)`];
    const result = customIdParser(content);
    expect(result.id).toBe(`3.big-ω(bigomega)notation(describesthe‘best'casescenario)`);
  })

  it('should return the id as the content if the content is an array with nested objects and strings', () => {
    const ref = { props: { children: { props: { children: '1' } } } }
    const content = ['Master Theorem', ref];
    const result = customIdParser(content);
    expect(result.id).toBe(`mastertheorem1`);
  });

})
