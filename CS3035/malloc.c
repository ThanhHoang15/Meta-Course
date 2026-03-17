#include <stdio.h>
#include <stdlib.h>

int main() {
        int n;

    printf("Enter size: ");
    scanf("%d", &n);

    int *arr = malloc(n * sizeof(int));

    // 1️⃣ assign values
    for (int i = 0; i < n; i++) {
        arr[i] = i * 10;
    }

    printf("%d\n", *arr);


    // 2️⃣ read / print values
    printf("Array values:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    // 3️⃣ free memory
    free(arr);

    return 0;
}