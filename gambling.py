from random import randint
import os
from time import sleep

money = int(input("Welcome to gambling simulator. How much money do you want to start with?\n$"))
number = 0
mode = 1

def gamble(win_chance, reward):
    global money
    for i in range(1,20):
        number = randint(1,win_chance)
        os.system('cls' if os.name=='nt' else 'clear')
        print("Money: $" + str(money)) 
        print("Gambling... \n")
        print(str(number))
        sleep(0.1)
    if (number == 7):
        money += reward
        os.system('cls' if os.name=='nt' else 'clear')
        print("Money: $" + str(money)) 
        print("YOU WIN! \n\n")
        print(str(number))
        input("\nPress enter to continue.")
    else:
        os.system('cls' if os.name=='nt' else 'clear')
        print("Money: $" + str(money)) 
        print("You lose. \n")
        print(str(number))
        if money >= 5:
            input("\nPress enter to continue.")
        else:
            print("\nGAME OVER\nYou ran out of money.")

while money >= 5:
    os.system('cls' if os.name=='nt' else 'clear')
    print("Money: $" + str(money)) 
    print("Welcome to gambling simulator.\n")
    print("Gambling options:")
    print("1. Normal ($5)")
    print("2. Increased reward, lower chance ($5)")
    if money < 10:
        print("3. Higher price, higher reward ($10) (CANNOT AFFORD)\n")
    else:
        print("3. Higher price, HIGHER REWARD, lower chance ($10)\n")
    if mode == "3" and money < 10:
        print("Not enough money.")
    mode = input("Enter a mode to gamble: ")
    if mode == "1":
        money -= 5
        gamble(10, 20)
    elif mode == "2":
        money -= 5
        gamble(20, 50)
    elif mode == "3" and money >= 10:
        money -= 10
        gamble(20, 100)
