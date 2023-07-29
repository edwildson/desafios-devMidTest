"""
    Created by Edwildson Coelho Rodrigues
    https://github.com/edwildson
    https://www.linkedin.com/in/edwildson/

    Simple Calculator
"""

def realizar_operacao(op, num1, num2):
    if op == '+':
        return num1 + num2
    elif op == '-':
        return num1 - num2
    elif op == '/':
        if num2 != 0:
            return num1 / num2
        else:
            return "Erro: Divisão por zero!"
    elif op == '*':
        return num1 * num2
    else:
        return "Operação inválida."

def calculator():
    print("Simple Calculator")
    print("Operações disponíveis: + (soma), - (subtração), / (divisão), * (multiplicação)")
    while True:
        operadores = ['+', '-', '/', '*']
        operador = None

        operacao = input("Digite a operação desejada (ex: 2.33+3 ou escreva 'sair' para finalizar): ")
        
        if operacao.lower() == 'sair':
            break
        
        for op in operadores:
            if op in operacao:
                operador = op
                break 
        
        if operador:
            split_numbers = operacao.split(operador)
            num1 = float(split_numbers[0])
            num2 = float(split_numbers[1])
            resultado = realizar_operacao(operador, num1, num2)
            print(f"Resultado da operação: {resultado}")
        else:
            print("Operação inválida. Use um dos operadores: +, -, *, /")
           
if __name__ == "__main__":
    calculator()