class Stack:
    def __init__(self):
        self.items = []

    def push(self, element):
        self.items.append(element)

    def pop(self):
        if not self.isEmpty():
            return self.items.pop()
        return None

    def isEmpty(self):
        return len(self.items) == 0

    def peek(self):
        if not self.isEmpty():
            return self.items[-1]
        return None

    def size(self):
        return len(self.items)

s = Stack()

s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)

print("original size: ", s.size())
print("Popped:", s.pop())
print("Popped:", s.pop())

print("Size after pop:", s.size())

print("Is empty:", s.isEmpty())

print("Peek:", s.peek())