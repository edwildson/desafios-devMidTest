"""
    Created by Edwildson Coelho Rodrigues
    https://github.com/edwildson
    https://www.linkedin.com/in/edwildson/

    Grade Average
"""

def grade_average(subject1, subject2, subject3):
    return (subject1 + subject2 + subject3)/3

def table():
    try:
        while True:
            subj1_grade = input("Type the subject 1 grade:\n")
            if not float(subj1_grade):
                subj1_grade = input("Type a numeric input:\n")
            subj2_grade = input("Type the subject 2 grade:\n")
            if not float(subj2_grade):
                subj1_grade = input("Type a numeric input:\n")
            subj3_grade = input("Type the subject 3 grade:\n")
            if not float(subj3_grade):
                subj1_grade = input("Type a numeric input:\n")

            print(f"The average of the grades is: {grade_average(float(subj1_grade), float(subj2_grade), float(subj3_grade))}")


            exit = input("To exit type y or enter to continue\n")
            if exit == "y":
                return

    except ValueError:
        print("\nInvalid input. Please, type a text.\n")
        table()

if __name__ == "__main__":
    table()