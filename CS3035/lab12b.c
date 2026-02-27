/* Part B */
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n;
    float *prices;
    float total = 0;

    printf("Enter number of items: ");
    scanf("%d", &n);

    if (n < 1) {
        printf("Invalid number of items.\n");
        return 0;
    }

    prices = malloc(n * sizeof(float));

    for (int i = 0; i < n; i++) {
        printf("Enter price: ");
        scanf("%f", &prices[i]);
    }

    for (int i = 0; i < n; i++) {
        printf("%f\n", prices[i]);
        total += prices[i];
    }

    printf("%f\n", total);

    free(prices);
    return 0;
}