import math

class RightTriangle2:
    def __init__(self, side1, side2, hypotenuse=None):
        s1 = float(side1)
        s2 = float(side2)

        if s1 < 0 or s2 < 0:
            raise ValueError("sides can not be negative")

        if hypotenuse is None:
            self.hypotenuse = math.sqrt(s1**2 + s2**2)
        else:
            h = float(hypotenuse)
            if h < 0:
                raise ValueError("hypotenuse can not be negative")

            if abs(h - math.sqrt(s1**2 + s2**2)) > 0.0001:
                raise ValueError("not a right triangle")

            self.hypotenuse = h
        self.side1 = s1
        self.side2 = s2
    def __eq__(self, other):
        if abs(self.hypotenuse - other.hypotenuse) > 0.0001:
            return False
        return (
            (abs(self.side1 - other.side1) <= 0.0001 and abs(self.side2 - other.side2) <= 0.0001)
            or
            (abs(self.side1 - other.side2) <= 0.0001 and abs(self.side2 - other.side1) <= 0.0001)
        )
        
    def __str__(self):
        return f"it is right triangle with side: {self.side1} & {self.side2}, hypotenuse: {self.hypotenuse}";

while True:
    try:
        s1 = input("enter side 1: ")
        s2 = input("enter side 2: ")
        triangle1 = RightTriangle2(s1, s2)
        print(triangle1)
        break
    except ValueError as e:
        print(e)

while True:
    try:
        s1 = input("2enter side 1: ")
        s2 = input("2enter side 2: ")
        h  = input ("2enter your hypotenuse: ")
        triangle2 = RightTriangle2(s1, s2, h)
        
        break
    except ValueError as e:
        print(e)   