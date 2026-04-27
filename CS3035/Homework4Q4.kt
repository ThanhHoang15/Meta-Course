class Rectangle(val width: Double, val height: Double) {

    fun area(): Double {
        return width * height
    }

    fun isSquare(): Boolean {
        return width == height
    }
}

fun main() {
    val rectangle = Rectangle(5.0, 5.0)

    println("Area: ${rectangle.area()}")
    println("Is square: ${rectangle.isSquare()}")
}