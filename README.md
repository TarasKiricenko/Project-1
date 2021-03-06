# SPACE INVADERS

<h2>Overview:</h2>
Software Engineering Immersive Course - Project-1 - Individual Project - 1 week.

<h2>Brief:</h2>
Project purpose - building a game using a HTML grid of divs as the environment for gameplay. There were suggestions to choose from: Pacman, Tetris, Frogger etc. Timeframe - 1 week. Expected to have a fully functional game, with ability for players to win and lose.

<h2>Description:</h2>
My personal version of Space Invaders classical 80's game. Player aims to shoot down all aliens, moving only right or left. Aliens slowly move down, randomly trying to drop bombs on player. As soon as all aliens are taken down or the player loses all 3 lives - game is over. Target is to achieve maximum points, each alien taken down earning you 10 points. You can only have one bullet on screen, before it reaches the target or leaves the game field, otherwise launching the second one eliminates the first one.

<h2>How to play:</h2>
Completely intuitive gameplay, using 3 keys. Follow instructions in the actual game.

<h2>Deployed project:</h2>
<a href="https://taraskiricenko.github.io/Project-1/">Space Invaders</a>

<h2>Tech used:</h2>
<li>JavaScript.</li>
<li>HTML.</li>
<li>CSS3.</li>

<h2>Sample screenshot:</h2>
<img width="678" alt="Screenshot 2021-08-11 at 14 08 37" src="https://user-images.githubusercontent.com/81250034/129019683-2485fda7-d442-4a88-b1dc-919b2bef0872.png">

<h1>Approach:</h1>

<h2>Build:</h2>
<li>Create a grid using "for loop" and add divs using JS through DOM.</li>
<li>Give each "cell" (essentially, div) an id for allocation purposes, applying certain css classes at particular situations to each one, creating actual gameplay.</li>
<li>Create classes for game objects: aliens, player, bullet, explosion, collision etc.</li>
<li>Develop functions, setting the particular rules: collision detection, player position, bullet movement etc.</li>
<br>
(for more detailed examples see "sample code")
    
<h2>Sample code:</h2>
<li>Here you can see, how the bullet moves and what are the conditions:</li>
<br>
First function defines what to do if a "cell" contains a particular class, and if right key is pressed, adds a bullet
<br>
<br>
Second function is running on interval, and moves the bullet up to the top of the game field and removes it when bullet reaches top border.
<br>
<br>
<img width="650" alt="Screenshot 2021-08-11 at 14 34 16" src="https://user-images.githubusercontent.com/81250034/129022002-e2b971bb-f0b6-46b3-bea9-0d6df0625ee4.png">
<br>
<li>Here you can have a look at another functional part:</li>
<br>
This functions define what happens when you hit the alien:
<br>
<br>
* It checks, if first of all you do have 2 classes in one "cell" first.
<br>
* Add points to your score span.
<br>
* Removes both alien and bullet, and sets explosion class to that cell.
<br>
* Takes aliens (as array) and splices that array at the index of killed alien.
<br>
* Finally, if that was the last alien, it shows victory message.
<br>
<br>
<img width="837" alt="Screenshot 2021-08-11 at 14 46 24" src="https://user-images.githubusercontent.com/81250034/129023587-104ed98f-9275-4f46-b0fc-597c0a68edcb.png">

<h2>Wins and challenges:</h2>
<h4>Wins</h4>
<li>It was great practice on array methods and interval management, as well as using "for loop" and getElement functions. Perfect kind of project for beginners to solidify their knowledge of JavaScript</li>
<li>I have designed this game myself, so the sounds I was using had to be "cut" to particular pieces, as they had to fit certain timeframes in my interval-paced game. Good fun and valuable experience.</li>

<h4>Challenges</h4>
<li>The most challenging part was defining a collision between an alien bullet and player, as it is a multi-conditional function that not only checks if the player was hit, but defines the movement of the alien projectile.</li>
<li>Another very important part, that was hard enough - styling. I wanted to create a perfectly playable game, so I spent quite some time looking for the right resources and making them look like a solid product.</li>

<h2>Potential improvements:</h2>
<li>Pause game functionality.</li>
<li>Mute functionality.</li>
<li>2 players functionality - 2 simultaneously and/or turn taking.</li>
<li>Difficulty levels, increasing speed of movement of aliens etc.</li>
