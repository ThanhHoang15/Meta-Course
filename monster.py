class Monster:
    def __init__(self, names, sizes):
        self.names = names
        self.sizes = sizes
    def Attack(self):
        print(self.names + " attacks Tokyo")
    def __str__(self):
        return "The " + self.names + " has size of " + self.sizes
    def __eq__(self, other):
        return self.names == other.names and self.sizes == other.sizes
    def __add__ (self, other):
        return self.names + other.names
    
a = Monster("Godzilla","30");
b = Monster("Kong","30");
a.Attack();
print(a);
print(a.names)
print (a == b)
print (a+b);
        