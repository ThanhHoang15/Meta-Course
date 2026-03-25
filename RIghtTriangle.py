import math

class RightTriangle:
    def __init__(self, side1, side2, hypotenuse=None):
        s1 = float(side1)
        s2 = float(side2)


        if s1 < 0 or s2 < 0:
            raise ValueError("Error: sides must be nonnegative")



        if hypotenuse is None:
            self.hypotenuse = math.sqrt(s1**2 + s2**2)
        else:
            h = float(hypotenuse)
            if h < 0:
                raise ValueError("Error: hypotenuse must be nonnegative")

            if abs((s1**2 + s2**2) - h**2) > 0.0001:
                raise ValueError("Error: not a valid right triangle")
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
        return f"Right Triangle with side1 = {self.side1}, side2 = {self.side2}, and hypotenuse = {self.hypotenuse}"


while True:
    try:
        s1 = input("Enter side 1 of 1st triangle: ")
        s2 = input("Enter side 2 of 1st triangle: ")
        triangle1 = RightTriangle(s1, s2)
        break
    except ValueError as e:
        print(e)
print(triangle1)
print("First triangle equals itself:", triangle1 == triangle1)



while True:
    try:
        s1 = input("Enter side 1 of 2nd triangle: ")
        s2 = input("Enter side 2 of 2nd triangle: ")
        h = input("Enter hypotenuse: ")
        triangle2 = RightTriangle(s1, s2, h)
        break
    except ValueError as e:
        print(e)
print(triangle2)
print("First triangle equals second triangle:", triangle1 == triangle2)
