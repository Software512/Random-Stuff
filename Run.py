import nt
import webbrowser

success=0
while success==0:
    print("Type the name of a program, folder, document, or Internet resource, and Python will open it for you.")
    file = input("Open: ")
    if file.startswith("www.") or file.startswith("http:") or file.startswith("https:"):
        webbrowser.open(file)
        success=1
    else:
        try:
            nt.startfile(file)
            success=1
        except:
            print("\nPython cannot find '"+file+"'. Make sure you typed the name correctly and try again.\n")
    
