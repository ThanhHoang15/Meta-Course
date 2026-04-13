from decimal import Decimal


def complexNumberAdder(a, b):
    return a + b


def complexPartialAdder(a, b):
    return a.real + b.real



def precisionMultiplier(a, b, precision):
    product = Decimal(str(a)) * Decimal(str(b))
    return round(product, precision)




def scientificCalculator(mathFunction, a, b, *args):
    return mathFunction(a, b, *args)



print(scientificCalculator(complexNumberAdder, 2+3j, 4+5j))
print(scientificCalculator(complexPartialAdder, 2+3j, 4+5j))
print(scientificCalculator(precisionMultiplier, 3.2, 2.7, 2))