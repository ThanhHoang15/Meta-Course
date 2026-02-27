#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;

    printf("Enter size: ");
    scanf("%d", &n);

//assign arr size = n
    int *arr = malloc(n * sizeof(int));

//assign values
    for (int i = 0; i < n; i++) {
        arr[i] = i * 10;
    }
    printf("%d/n", *arr);
//read / print values
    printf("Array values:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

//free memory
    free(arr);

    return 0;
}