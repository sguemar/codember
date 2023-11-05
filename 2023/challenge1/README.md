# Challenge 1

## The Challenge

A spy is sending encrypted messages.

Your mission is to create a program that decodes the messages.

The messages are words separated by spaces like this: 

    cat dog dog car Cat doG sun

We need the program to return the number of times each word appears in the message, regardless of whether it is in uppercase or lowercase.

The result will be a text string with the word and the number of times it appears in the message, in this format:

    cat2dog3car1sun1

The words are sorted by their first appearance in the message!

### More Examples:

keys house HOUSE house keys -> _keys2house3_

cup te a cup -> _cup2te1a1_

houses house housess -> _houses1house1housess1_

## How to Solve It

1. Solve the message you will find in this file: https://codember.dev/data/message_01.txt

2. Submit your solution with the "submit" command in the terminal, for example like this:

        $ submit dog3cat3car1sun1
