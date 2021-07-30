# Coditation_Assignment

![image](https://user-images.githubusercontent.com/32129398/127611011-bd21a646-593c-45e8-9704-7aa7501aa191.png)

Imagine an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two
possible states, live or dead. Every cell interacts with its eight neighbors, which are the cells that are
directly horizontally, vertically, or diagonally adjacent.

At each step in time (tick), the following transitions occur:
1. Any live cell with fewer than two live neighbors dies, as if by loneliness.
2. Any live cell with more than three live neighbors dies, as if by overcrowding.
3. Any live cell with two or three live neighbors lives, unchanged, to the next generation.
4. Any dead cell with exactly three live neighbors comes to life.

The initial pattern constitutes the 'seed' (randomly placed 500 cells) of the system. The first generation is
created by applying the above rules simultaneously to every cell in the seed — births and deaths happen
simultaneously, and the discrete moment at which this happens is called a tick. (In other words, each
generation is a pure function of the one before.)

<pre>
Black = Alive
White = Dead
</pre>

## Search by Name
#### How to Search
    User need to Enter the [row] , [col].
    Click on Search.
    It will give us current state of Cell.
![image](https://user-images.githubusercontent.com/32129398/127611925-c4139933-9d8f-4d5e-bc58-82369171ecee.png)
    
[Link of Coditation_Assignment](https://coditation-assignment.web.app/)
