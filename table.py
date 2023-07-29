"""
    Created by Edwildson Coelho Rodrigues
    https://github.com/edwildson
    https://www.linkedin.com/in/edwildson/

    Table
"""

def print_table(number):
    for i in range(1, 11):
        if i == 1:
            print("\n")

        print(f"| {number} X {i} = {number*i} |")

        if i == 10:
            print("\n")


def table():
    try:
        while True:
            number = int(input("Type a number to display the table:\nType 0 to exit\n"))

            if number == 0:
                return
           
            print(print_table(number))
    except ValueError:
        print("\nInvalid input. Please, type an integer number.\n")
        table()

if __name__ == "__main__":
    table()