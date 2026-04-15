import kotlin.math.PI

fun main() {

  
    val findMax = { nums: List<Int> -> nums.maxOrNull() }

   
    val squareList = { nums: List<Int> -> nums.map { it * it } }

 
    val sumOfSquares = { nums: List<Int> -> nums.map { it * it }.sum() }

  
    val average = { nums: List<Int> -> nums.sum().toDouble() / nums.size }


    val circleArea = { r: Double -> PI * r * r }


    val filterA = { words: List<String> -> words.filter { 'a' in it } }


    val fahrenheitToCelsius = { f: Double -> (f - 32) * 5 / 9 }

 
    val nums = listOf(1, 2, 3, 4)
    val words = listOf("apple", "dog", "banana", "cat")

    println("1 Max: ${findMax(nums)}")
    println("2 Squares: ${squareList(nums)}")
    println("3 Sum of Squares: ${sumOfSquares(nums)}")
    println("4 Average: ${average(nums)}")
    println("5 Circle Area: ${circleArea(5.0)}")
    println("6 Filter strings with a: ${filterA(words)}")
    println("7 Fahrenheit to Celsius: ${fahrenheitToCelsius(98.6)}")
}