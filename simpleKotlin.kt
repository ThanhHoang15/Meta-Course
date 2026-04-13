fun isEvenorOdd(num: Int): String {
    return if (num % 2 == 0) "Even" else "Odd"
}

fun getStringLength(text: String): Int {
    return text.length
}

fun main() {
  
    print("Enter account balance: ")
    var balance = readLine()!!.toDouble()

    print("Enter 4 digit pin code: ")
    val pin = readLine()!!

    println("Account Balance: $balance")
    println("Pin Code: $pin")

    println()


    print("Enter a number: ")
    val number = readLine()!!.toInt()

    println("$number is ${isEvenorOdd(number)}")

    println()


    print("Enter a string: ")
    val userText = readLine()!!

    println("Length: ${getStringLength(userText)}")
}