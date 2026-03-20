#include <stdio.h>
#include <stdlib.h>

struct Student {
    char name[50];
    int grade;
};

int main() {
    int n;

    printf("Enter number of students: ");
    scanf("%d", &n);

   
    struct Student *students = (struct Student *)malloc(n * sizeof(struct Student));

    if (students == NULL) {
        printf("Memory allocation failed\n");
        return 1;
    }

   
    for (int i = 0; i < n; i++) {
        printf("\nStudent %d\n", i + 1);

        printf("Enter name: ");
        scanf("%s", students[i].name);

        printf("Enter grade: ");
        scanf("%d", &students[i].grade);
    }

    
    printf("\nStudent Details:\n");
    for (int i = 0; i < n; i++) {
        printf("Name: %s, Grade: %d\n", students[i].name, students[i].grade);
    }

    
    free(students);

    return 0;
}