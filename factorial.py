"""
    Created by Edwildson Coelho Rodrigues
    https://github.com/edwildson
    https://www.linkedin.com/in/edwildson/


    Factorial
"""

def factorial(number):
    if number == 0:
        return 1
    aux = 1

    for i in range(1, number+1):
        aux *=i

    return aux

def check():
    try:
        while True:
            number = int(input("Type a number to calculate the factorial:\nType -1 to exit\n"))

            if number == -1:
                return
           
            print(f"\nThe factorial is: {factorial(number)}\n")
    except ValueError:
        print("\nInvalid input. Please, type an integer number.\n")
        check()
        
if __name__ == "__main__":
    check()