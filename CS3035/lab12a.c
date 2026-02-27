/* Part A */
#include <stdio.h>

int main(void) {
    float prices[10];
    int n;
    float total = 0;

    printf("Enter number of items: ");
    scanf("%d", &n);

    if (n > 10 || n < 1) {
        printf("Invalid number of items.\n");
        return 0;
    }

    for (int i = 0; i < n; i++) {
        printf("Enter price: ");
        scanf("%f", &prices[i]);
    }

    for (int i = 0; i < n; i++) {
        printf("%f\n", prices[i]);
        total += prices[i];
    }

    printf("%f\n", total);
    return 0;
}