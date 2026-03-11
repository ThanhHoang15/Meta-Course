#include <stdio.h>

enum daysOfWeek {MON, TUES, WED, THURS, FRI, SAT, SUN};

int main() {

    enum daysOfWeek day;

    printf("Enter a day (0-6): ");
    scanf("%d", &day);

    switch(day) {
        case MON:
        case TUES:
        case WED:
        case THURS:
        case FRI:
            printf("It is a workday\n");
            break;

        case SAT:
        case SUN:
            printf("It is the weekend\n");
            break;

        default:
            printf("Invalid input\n");
    }

    return 0;
}