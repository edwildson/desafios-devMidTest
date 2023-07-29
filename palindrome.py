"""
    Created by Edwildson Coelho Rodrigues
    https://github.com/edwildson
    https://www.linkedin.com/in/edwildson/


    Palindrome
"""

def check_if_is_a_palindrome(word):
    word = word.lower()

    return word == word[::-1]

def check():
    try:
        while True:
            word = input("Type a word to check if is a palindrome:\nType 0 to exit\n")

            if word == '0':
                return
           
            result = check_if_is_a_palindrome(word)
            
            if result:
                print(f"\n{word} is a palindrome\n")
                continue

            print(f"\n{word} is not a palindrome\n")
    except ValueError:
        print("\nInvalid input. Please, type an word.\n")
        check()
        
if __name__ == "__main__":
    check()