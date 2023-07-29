"""
    Created by Edwildson Coelho Rodrigues
    https://github.com/edwildson
    https://www.linkedin.com/in/edwildson/

    Vowels
"""

def count_vowels(string):
    vowels = "aeiouAEIOUàèìòùáéíóúÀÈÌÒÙÁÉÍÓÚãẽĩõũÃẼĨÕŨâêîôûÂÊÎÔÛ"
    vowel_count = 0

    for char in string:
        if char in vowels:
            vowel_count += 1

    return vowel_count

def table():
    try:
        while True:
            text = input("Type a text to count the number of vowels:\nType 0 to exit\n")

            if text == '0':
                return
           
            print(count_vowels(text))
    except ValueError:
        print("\nInvalid input. Please, type a text.\n")
        table()

if __name__ == "__main__":
    table()