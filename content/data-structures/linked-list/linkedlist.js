class Node {
  constructor(key, next, prev) {
    this.key = key
    this.next = next
    this.prev = prev
  }
}

class LinkedList {
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  pushFront(key) {
    const newNode = new Node(key)
    this.size += 1

    if (!this.head && !this.tail) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (!this.tail.prev) {
        this.tail.prev = newNode
      }
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    return true
  }

  isEmpty() {
    return this.size === 0
  }

  displayAll() {
    const keys = []
    if (!this.head) return keys

    let current = this.head
    keys.push(current.key)
    while (current.next) {
      keys.push(current.next.key)
      current = current.next
    }
    return keys
  }

  /**
   * return front item
   *
   * @returns
   * @memberof LinkedList
   */
  topFront() {
    if (!this.head) return null
    return this.head.key
  }

  popFront() {
    if (!this.head) return null
    this.size -= 1
    const firstItem = this.head
    this.head = firstItem.next
    return firstItem
  }

  pushBack(key) {
    this.size += 1
    const newNode = new Node(key)

    if (!this.head && !this.tail) {
      this.head = newNode
      this.tail = newNode
    } else {
      if (!this.head.next) {
        this.head.next = newNode
      }

      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    return true
  }

  topBack() {
    if (!this.tail) {
      return null
    }
    return this.tail.key
  }

  popBack() {
    if (!this.tail) {
      return null
    }
    this.size -= 1
    const lastItem = this.tail
    this.tail = this.tail.prev
    return lastItem.key
  }

  /**
   * Find the first occurrence of an item
   *
   * @param {*} key
   * @returns
   * @memberof LinkedList
   */
  find(key) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode
      }
      currentNode = currentNode.next
    }
  }

  /**
   * Remove the first occurrence of an item
   *
   * @param {*} key
   * @returns
   * @memberof LinkedList
   */
  erase(key) {
    if (!this.head) {
      throw new Error("Empty list")
    }

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.key === key) {
        this.size -= 1
        currentNode.prev.next = currentNode.next
        return true
      }
      currentNode = currentNode.next
    }

    throw new Error("Can not find this item")
  }

  addAt(index, key) {
    if (!this.head || index > this.size) {
      throw new Error("Out of boundaries")
    }

    if (index === 0) {
      return this.pushFront(key)
    }

    if (index === this.size) {
      return this.pushBack(key)
    }

    let currentItemIndex = 0
    let currentItem = this.head
    while (currentItem) {
      if (currentItemIndex === index) {
        this.size += 1
        const newNode = new Node(key)
        newNode.next = currentItem
        newNode.prev = currentItem.prev
        currentItem.prev.next = newNode
        return true
      }
      currentItemIndex += 1
      currentItem = currentItem.next
    }
  }
}

module.exports = {
  LinkedList,
  Node,
}
