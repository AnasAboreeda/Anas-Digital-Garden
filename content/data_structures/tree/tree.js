const LEFT = 0
const RIGHT = 1

class Queue {
  constructor() {
    this.q = []
  }

  enqueue(val) {
    this.q.push(val)
  }

  dequeue() {
    return this.q.shift()
  }
}

class TreeNode {
  constructor(value) {
    this.value = value
    this.descendant = []
    this.meta = {}
  }

  setLeft(node) {
    if (node) {
      node.parent = this
    }
    this.descendant[LEFT] = node
  }

  getLeft() {
    return this.descendant[LEFT]
  }

  setRight(node) {
    if (node) {
      node.parent = this
    }
    this.descendant[RIGHT] = node
  }

  getRight() {
    return this.descendant[RIGHT]
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
    this.size = 0
    this.meta = {}
  }

  findNodeAndParent(value) {
    let node = this.root
    let parent

    while (node) {
      if (node.value === value) {
        break
      }
      parent = node
      node = value > node.value ? node.getRight() : node.getLeft()
    }
    return { node, parent }
  }

  add(value) {
    const newNode = new TreeNode(value)
    if (this.root) {
      const { node, parent } = this.findNodeAndParent(value)

      if (node) {
        node.meta.duplicates = (node.meta.duplicates || 1) + 1
      } else if (value > parent.value) {
        parent.setRight(newNode)
      } else {
        parent.setLeft(newNode)
      }
    } else {
      this.root = newNode
    }
    this.size += 1
    return newNode
  }

  find(value) {
    /* ... */
  }

  remove(value) {
    /* ... */
  }

  getMax() {
    /* ... */
  }

  getMin() {
    /* ... */
  }

  inOrderTraversal() {
    const results = []

    const scan = currentNode => {
      if (!currentNode) {
        return null
      }

      const left = currentNode.getLeft()
      if (left) {
        scan(left)
      }

      results.push(currentNode.value)

      const right = currentNode.getRight()
      if (right) {
        scan(right)
      }
    }

    scan(this.root)
    return results
  }

  printBFT() {
    if (!this.root) {
      console.log("❎ Empty")
    }

    const bQueue = new Queue()
    const treeNodes = []

    bQueue.enqueue(this.root)

    while (bQueue.q.length !== 0) {
      const n = bQueue.dequeue()

      treeNodes.push(n.value)

      const nLeft = n.getLeft()
      const nRight = n.getRight()
      if (nLeft) {
        bQueue.enqueue(nLeft)
      }
      if (nRight) {
        bQueue.enqueue(nRight)
      }
    }
    const results = treeNodes.join(", ")
    console.log(results)
    return results
  }
}

module.exports = {
  TreeNode,
  BinarySearchTree,
}
