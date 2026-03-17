def matrixAdd(A, B, SUM):
    for i in range(3):
        for j in range(3):
            SUM[i][j] = A[i][j] + B[i][j]


def matrixAddAsString(A, B, SUM):
    for i in range(3):
        for j in range(3):
            SUM[i][j] = str(A[i][j]) + str(B[i][j])


A = [[1,2,3],
     [4,5,6],
     [7,8,9]]

B = [[9,8,7],
     [6,5,4],
     [3,2,1]]

SUM = [[0,0,0],
       [0,0,0],
       [0,0,0]]

matrixAdd(A,B,SUM)

print("Matrix Add:")
for row in SUM:
    print(row)


matrixAddAsString(A,B,SUM)

print("\nMatrix Add As String:")
for row in SUM:
    print(row)