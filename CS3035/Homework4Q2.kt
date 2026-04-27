fun reverseString(text: String): String {

    if (text.length <= 1) {
        return text
    }


    return reverseString(text.substring(1)) + text[0]
}

fun main() {
    println(reverseString("hello"))
    println(reverseString("kotlin"))
}