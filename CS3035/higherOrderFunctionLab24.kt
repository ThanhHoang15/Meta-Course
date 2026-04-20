
fun add(a: Int, b: Int): Int {
    return a + b
}

fun subtract(a: Int, b: Int): Int {
    return a - b
}

fun multiply(a: Int, b: Int): Int {
    return a * b
}


fun mathOperation(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}


fun mathOperation(operation: (Int, Int) -> Int): (Int, Int) -> Int {
    return operation
}

fun main() {
  
    val resultAdd = mathOperation(5, 3, ::add)
    val resultSub = mathOperation(5, 3, ::subtract)
    val resultMul = mathOperation(5, 3, ::multiply)

    println("Using function as parameter:")
    println("Add: $resultAdd")
    println("Subtract: $resultSub")
    println("Multiply: $resultMul")

    val addFunction = mathOperation(::add)
    val subtractFunction = mathOperation(::subtract)
    val multiplyFunction = mathOperation(::multiply)

    println("\nReturning function from function:")
    println("Add: ${addFunction(5, 3)}")
    println("Subtract: ${subtractFunction(5, 3)}")
    println("Multiply: ${multiplyFunction(5, 3)}")
}