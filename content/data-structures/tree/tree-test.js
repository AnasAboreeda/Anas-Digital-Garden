const { TreeNode, BinarySearchTree } = require("./Tree")

const LEFT = 0
const RIGHT = 1

test("TreeNode", () => {
  const node = new TreeNode(100)
  expect(node).toBeInstanceOf(TreeNode)

  const leftNode = new TreeNode(50)
  node.setLeft(leftNode)
  expect(node.descendant[LEFT].value).toBe(50)
  expect(node.getLeft().value).toBe(50)
  expect(node.getLeft().parent.value).toBe(100)

  const rightNode = new TreeNode(150)
  node.setRight(rightNode)
  expect(node.descendant[RIGHT].value).toBe(150)
  expect(node.getRight().value).toBe(150)
  expect(node.getRight().parent.value).toBe(100)
})

test("BinarySearchTree -> add", () => {
  const bt = new BinarySearchTree()

  bt.add(100)
  expect(bt.root.value).toBe(100)
  bt.add(50)
  expect(bt.root.descendant[LEFT].value).toBe(50)
  bt.add(150)
  expect(bt.root.descendant[RIGHT].value).toBe(150)
  bt.add(30)
  expect(bt.root.descendant[LEFT].descendant[LEFT].value).toBe(30)
  bt.add(70)
  expect(bt.root.descendant[LEFT].descendant[RIGHT].value).toBe(70)
  expect(bt.size).toBe(5)
  bt.printBFT()
})

test("BinarySearchTree -> printBFT", () => {
  const bt = new BinarySearchTree()
  const testResult = [100, 50, 150, 30, 500, 20, 40, 600].join(", ")
  bt.add(100)
  bt.add(50)
  bt.add(150)
  bt.add(30)
  bt.add(500)
  bt.add(600)
  bt.add(30)
  bt.add(40)
  bt.add(20)
  expect(bt.printBFT()).toBe(testResult)
})

test("BinarySearchTree -> printBFT", () => {
  const bt = new BinarySearchTree()
  const testResult = [100, 50, 150, 30, 500, 20, 40, 600].sort((a, b) => a - b)
  bt.add(100)
  bt.add(50)
  bt.add(150)
  bt.add(30)
  bt.add(500)
  bt.add(600)
  bt.add(30)
  bt.add(40)
  bt.add(20)
  expect(bt.inOrderTraversal()).toStrictEqual(testResult)
})
