fun isPalindrome(text: String): Boolean = text == reverseString(text)

fun reverseString(text: String): String {
    if (text.length <= 1) {
        return text
    }

    return reverseString(text.substring(1)) + text[0]
}

fun main() {
    println(isPalindrome("racecar"))
    println(isPalindrome("hello"))
}