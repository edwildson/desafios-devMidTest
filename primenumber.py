"""
    Created by Edwildson Coelho Rodrigues
    https://github.com/edwildson
    https://www.linkedin.com/in/edwildson/


    Prime numbers
"""

def is_prime(number):
    if number < 2:
        return False
    elif number == 2:
        return True

    # Check if the number is divisible by any integer from 2 to the square root of the number
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False

    return True

def check_if_number_is_prime():
    while True:
        number = input("\nCheck if a number is prime or not. To exit type 'exit'. \nType a number to check: \n")
        
        if number.lower() == 'exit':
            return
        
        if number.isnumeric():
            if number.isdigit():
                if is_prime(int(number)):
                    print(f"The number {number} is prime\n")
                else:
                    print(f"The number {number} is not prime\n")
            else:
                print(f"The number {number} is not prime\n")
        elif number.startswith('-') and number[1:].isdigit():
            print(f"The number {number} is not prime\n")
        else:
            print("Please type a number\n")

def print_first_ten_prime_numbers():
    primes = []
    num = 2

    while len(primes) < 10:
        if is_prime(num):
            primes.append(num)
        num += 1

    print(primes)

def check():
    try:
        while True:
            op = int(input("Type 1 to check if a number is prime or not\nType 2 to print the first 10 numbers\nType 0 to exit\n"))

            if op == 1:
                check_if_number_is_prime()
            elif op == 2:
                print_first_ten_prime_numbers()
            elif op == 0:
                print("Finalizando o programa.")
                break
            else:
                print("Invalid option. Please, type 1, 2 or 0.")
    except ValueError:
        print("Invalid Input. Please enter an integer.")
        
if __name__ == "__main__":
    check()