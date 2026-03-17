#include <stdio.h>

void swap (int *x, int *y){
    int temp;
    temp = *x;
    *x = *y;
    *y = temp;
}

int main (void){
    int X = 4;
    int Y = 9;
    printf("X = %d\nY = %d\n", X, Y);
    swap(&X,&Y);
    printf("After Swap:\nX = %d\nY = %d\n", X, Y);
    return 0;
}