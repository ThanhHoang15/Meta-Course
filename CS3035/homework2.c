#include <stdio.h>
#include <stdlib.h>

struct Book {
    char title[100];
    char author[100];
    int year;
};

int main() {
    int n, i;

    printf("How many books? ");
    scanf("%d", &n);

    struct Book *books;
    books = (struct Book *)malloc(n * sizeof(struct Book));

    if (books == NULL) {
        printf("Memory allocation failed.\n");
        return 1;
    }

    for (i = 0; i < n; i++) {
        printf("\nBook %d\n", i + 1);

        printf("Enter title: ");
        scanf(" %[^\n]", books[i].title);

        printf("Enter author: ");
        scanf(" %[^\n]", books[i].author);

        printf("Enter year: ");
        scanf("%d", &books[i].year);
    }

    printf("\n----- Book List -----\n");
    for (i = 0; i < n; i++) {
        printf("\nBook %d\n", i + 1);
        printf("Title: %s\n", books[i].title);
        printf("Author: %s\n", books[i].author);
        printf("Year: %d\n", books[i].year);
    }

    free(books);

    return 0;
}