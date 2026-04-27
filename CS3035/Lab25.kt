fun findNonNullMax(a: Int?, b: Int?): Int? {
    return when {
        a == null && b == null -> null
        a == null -> b
        b == null -> a
        a > b -> a
        else -> b
    }
}

val safeLambdaLength: (String?) -> Int = { str ->
    str?.length ?: -1
}

fun processString(input: String?, func: (String?) -> Int) {
    val result = func(input)
    println(result)
}

fun main() {

    println(findNonNullMax(5, 10))     // 10
    println(findNonNullMax(null, 7))   // 7
    println(findNonNullMax(3, null))   // 3
    println(findNonNullMax(null, null)) // null

    processString("Kotlin", safeLambdaLength) // 6
    processString(null, safeLambdaLength)     // -1
}