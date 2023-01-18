const { LinkedList, Node } = require("./LinkedList")

test("create Node", () => {
  const n1 = new Node(100, null, null)
  expect(n1.key).toBe(100)
  expect(n1.next).toBeNull()
  expect(n1.prev).toBeNull()
})

test("create LinkedList", () => {
  const l1 = new LinkedList()
  expect(l1.head).toBeNull()
  expect(l1.tail).toBeNull()
})

test("pushFront", () => {
  const l1 = new LinkedList()
  l1.pushFront("a")
  expect(l1.head.key).toBe("a")
  expect(l1.tail.key).toBe("a")

  l1.pushFront("b")

  expect(l1.head.key).toBe("b")
  expect(l1.head.next).toBeTruthy()
  expect(l1.head.next.key).toBe("a")

  l1.pushFront("c")

  expect(l1.head.key).toBe("c")
  expect(l1.head.next).toBeTruthy()
  expect(l1.head.next.key).toBe("b")
  expect(l1.head.next.next).toBeTruthy()
  expect(l1.head.next.next.key).toBe("a")

  expect(l1.tail.prev.key).toBe("b")
  expect(l1.tail.prev.prev.key).toBe("c")
})

test("isEmpty", () => {
  const l1 = new LinkedList()
  expect(l1.isEmpty()).toBe(true)
  l1.pushFront(199)
  expect(l1.isEmpty()).toBe(false)
})

test("printAll", () => {
  const l1 = new LinkedList()
  expect(l1.displayAll()).toStrictEqual([])

  l1.pushFront(199)
  expect(l1.displayAll()).toStrictEqual([199])

  l1.pushFront(299)
  expect(l1.displayAll()).toStrictEqual([299, 199])
})

test("topFront", () => {
  const l1 = new LinkedList()
  expect(l1.topFront()).toStrictEqual(null)

  l1.pushFront(199)
  expect(l1.topFront()).toStrictEqual(199)

  l1.pushFront(299)
  expect(l1.topFront()).toStrictEqual(299)
})

test("popFront", () => {
  const l1 = new LinkedList()
  expect(l1.popFront()).toBeNull()

  l1.pushFront(199)
  l1.pushFront(299)

  expect(l1.size).toBe(2)
  expect(l1.head.key).toStrictEqual(299)
  expect(l1.popFront().key).toStrictEqual(299)

  expect(l1.size).toBe(1)
  expect(l1.head.key).toStrictEqual(199)
})

test("pushBack", () => {
  const l1 = new LinkedList()

  l1.pushBack(100)
  expect(l1.size).toBe(1)
  expect(l1.head.key).toBe(100)
  expect(l1.tail.key).toBe(100)

  l1.pushBack(200)
  expect(l1.size).toBe(2)
  expect(l1.displayAll()).toStrictEqual([100, 200])

  l1.pushBack(300)
  expect(l1.size).toBe(3)
  expect(l1.displayAll()).toStrictEqual([100, 200, 300])
  expect(l1.head.key).toBe(100)
  expect(l1.head.next.key).toBe(200)
  expect(l1.head.next.next.key).toBe(300)
  expect(l1.tail.key).toBe(300)
})

test("topBack", () => {
  const l1 = new LinkedList()

  expect(l1.topBack()).toBeNull()

  l1.pushBack(100)
  l1.pushBack(200)
  l1.pushBack(300)
  l1.pushBack(400)

  expect(l1.size).toBe(4)
  expect(l1.topBack()).toBe(400)
})

test("popBack", () => {
  const l1 = new LinkedList()

  expect(l1.popBack()).toBeNull()

  l1.pushBack(100)
  l1.pushBack(200)
  l1.pushBack(300)
  l1.pushBack(400)

  expect(l1.size).toBe(4)
  expect(l1.popBack()).toBe(400)
  expect(l1.size).toBe(3)
  expect(l1.popBack()).toBe(300)
  expect(l1.size).toBe(2)
  expect(l1.popBack()).toBe(200)
  expect(l1.size).toBe(1)
  expect(l1.popBack()).toBe(100)
  expect(l1.size).toBe(0)
  expect(l1.popBack()).toBeNull()
})

test("find", () => {
  const l1 = new LinkedList()

  expect(l1.find(100)).toBeNull()

  l1.pushFront(100)
  l1.pushFront(200)
  l1.pushFront(300)
  l1.pushFront(400)

  expect(l1.find(300).key).toStrictEqual(300)
  expect(l1.find(300).next.key).toStrictEqual(200)
  expect(l1.find(300).prev.key).toStrictEqual(400)
})

test("erase", () => {
  const l1 = new LinkedList()

  expect(() => {
    l1.erase(100)
  }).toThrowError("Empty list")

  l1.pushFront(100)
  l1.pushFront(200)
  l1.pushFront(300)
  l1.pushFront(400)

  expect(l1.displayAll()).toStrictEqual([400, 300, 200, 100])
  expect(l1.size).toBe(4)
  expect(l1.erase(300)).toBe(true)
  expect(l1.size).toBe(3)
  expect(l1.displayAll()).toStrictEqual([400, 200, 100])

  expect(() => {
    l1.erase(1000)
  }).toThrowError()
})

test("addAt", () => {
  const l1 = new LinkedList()

  expect(() => {
    l1.addAt(2, 250)
  }).toThrowError("Out of boundaries")

  l1.pushBack(100)
  l1.pushBack(200)
  l1.pushBack(300)
  l1.pushBack(400)

  expect(l1.displayAll()).toStrictEqual([100, 200, 300, 400])
  expect(l1.addAt(2, 250)).toBe(true)
  expect(l1.displayAll()).toStrictEqual([100, 200, 250, 300, 400])
  expect(l1.addAt(0, 50)).toBe(true)
  expect(l1.displayAll()).toStrictEqual([50, 100, 200, 250, 300, 400])
  expect(l1.addAt(6, 450)).toBe(true)
  expect(l1.displayAll()).toStrictEqual([50, 100, 200, 250, 300, 400, 450])
  expect(l1.tail.key).toBe(450)

  expect(() => {
    l1.addAt(200, 250)
  }).toThrowError("Out of boundaries")
})
