//HUGE thanks to StackOverflow for information on how to make this.
import java.util.Scanner;
public class main {
  public static void main(String[] args) {
    String[] images = {
        "_____\n    |\n    |\n    |\n    |\n____|",
        "_____\n |  |\n O  |\n    |\n    |\n____|",
        "_____\n |  |\n O  |\n |  |\n    |\n____|",
        "_____\n |  |\n O  |\n/|  |\n    |\n____|",
        "_____\n |  |\n O  |\n/|\\ |\n    |\n____|",
        "_____\n |  |\n O  |\n/|\\ |\n/   |\n____|",
        "_____\n |  |\n O  |\n/|\\ |\n/ \\ |\n____|"
    };
    Scanner input = new Scanner(System.in);
    String word;
    System.out.println("Type in the word for your friend to guess.");
    word = input.nextLine();
    int misses = 0;
    String tried = "Incorrect letters: ";
    boolean playing = true;
    String revealed = "";
    for (int i = 0; i < word.length(); i++) {
        revealed = revealed + '_';
    }
    while (playing) {
        System.out.println(images[misses]);
        System.out.println(revealed);
        System.out.println(tried);
        String letter = input.nextLine();
        StringBuilder newRevealed = new StringBuilder();
        if (word.contains(letter)) {
            for (int i = 0; i < word.length(); i++) {
                String current = Character.toString(word.charAt(i));
                if (current.matches(letter)) {
                    newRevealed.append(current);
                } else {
                    newRevealed.append(revealed.charAt(i));
                }
            }
            revealed = newRevealed.toString();
        } else {
            misses ++;
            tried = tried + letter + ", ";
            if (misses == 6) {
                System.out.println(images[6]);
                System.out.println("Game over. The word was " + word + ".");
                playing = false;
            }
        }
        if (revealed.contains("_") != true) {
            System.out.println("Congatulations! You found the word!");
            playing = false;
        }
    }
  }
}
