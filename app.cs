using System;
using System.Collections.Generic;

class Program
{
    static Dictionary<string, int> votes = new Dictionary<string, int>();

    static void Main(string[] args)
    {
        Console.WriteLine("Planning Poker - Enter 'exit' to end voting.");

        while (true)
        {
            Console.Write("Enter your name: ");
            string name = Console.ReadLine();
            if (name.ToLower() == "exit")
                break;

            Console.WriteLine("Select your estimation (0, 1, 2, 3, 5, 8, 13, 21, ?): ");
            string vote = Console.ReadLine();

            if (votes.ContainsKey(vote))
                votes[vote]++;
            else
                votes[vote] = 1;
        }

        Console.WriteLine("Voting Results:");
        foreach (var entry in votes)
        {
            Console.WriteLine($"{entry.Key}: {entry.Value} votes");
        }
    }
}
