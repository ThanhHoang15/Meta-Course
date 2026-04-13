

fun getDayOfWeek(day: Int): String {
    return when (day) {
        1 -> "Monday"
        2 -> "Tuesday"
        3 -> "Wednesday"
        4 -> "Thursday"
        5 -> "Friday"
        6 -> "Saturday"
        7 -> "Sunday"
        else -> "Invalid day"
    }
}


class Person(val name: String, val age: Int) {
    fun introduce() {
        println("Hello, my name is $name and I am $age years old.")
    }
}


class Calculator {
    fun add(a: Int, b: Int): Int {
        return a + b
    }

    fun subtract(a: Int, b: Int): Int {
        return a - b
    }

    fun multiply(a: Int, b: Int): Int {
        return a * b
    }

    fun divide(a: Int, b: Int): Double {
        return if (b != 0) {
            a.toDouble() / b
        } else {
            println("Cannot divide by zero.")
            0.0
        }
    }
}

fun main() {

    print("Enter a number (1-7): ")
    val dayNum = readLine()!!.toInt()
    println("Day: ${getDayOfWeek(dayNum)}")

    println()

    val person1 = Person("Peter", 21)
    person1.introduce()

    println()


    val calc = Calculator()
    println("Add: ${calc.add(10, 5)}")
    println("Subtract: ${calc.subtract(10, 5)}")
    println("Multiply: ${calc.multiply(10, 5)}")
    println("Divide: ${calc.divide(10, 5)}")
}