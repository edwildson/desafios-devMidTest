"""
    Created by Edwildson Coelho Rodrigues
    https://github.com/edwildson
    https://www.linkedin.com/in/edwildson/

    Interest Calculation
"""

def calc_interest(init_capital, interest_rate, time):
    return init_capital * (1 + interest_rate/100)**time

def interest():
    try:
        while True:
            capital = float(input("Type the init capital:\n"))
            rate = float(input("\nType the interest rate (in months):\n"))
            time = float(input("\nType the investment time (in months):\n"))


            print(f"\nThe final value is: {calc_interest(capital, rate, time)}\n")

            exit = input("To exit type y or enter to continue\n")
            if exit == "y":
                return
    except ValueError:
        print("\nInvalid input. Please, type a text.\n")
        interest()

if __name__ == "__main__":
    interest()