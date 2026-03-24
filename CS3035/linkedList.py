class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None


class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def isEmpty(self):
        return self.head is None

    def insertHead(self, x):
        node = Node(x)
        if self.isEmpty():
            self.head = self.tail = node
        else:
            node.next = self.head
            self.head.prev = node
            self.head = node

    def removeHead(self):
        if self.isEmpty():
            return None
        val = self.head.data
        self.head = self.head.next
        if self.head:
            self.head.prev = None
        else:
            self.tail = None
        return val

    def insertTail(self, x):
        node = Node(x)
        if self.isEmpty():
            self.head = self.tail =node
        else:
            self.tail.next = node
            node.prev = self.tail
            self.tail = node

    def removeTail(self):
        if self.isEmpty():
            return None
        val = self.tail.data
        self.tail = self.tail.prev
        if self.tail:
            self.tail.next = None
        else:
            self.head = None
        return val

    def insertAtPos(self, x, pos):
        if pos == 1:
            self.insertHead(x)
            return
        current = self.head
        for _ in range(pos - 2):
            if current is None:
                return
            current = current.next
        if current is None or current.next is None:
            self.insertTail(x)
        else:
            node = Node(x)
            node.next = current.next
            node.prev = current
            current.next.prev = node
            current.next = node

    def traverse(self):
        current = self.head
        while current:
            print(current.data)
            current = current.next


test = LinkedList()

print(test.isEmpty())

test.insertHead(4)
test.insertHead(3)
test.insertHead(2)
test.insertHead(1)

test.insertTail(5)
test.insertTail(6)

test.removeHead()
test.removeTail()

test.insertAtPos(111111, 3)

test.traverse()