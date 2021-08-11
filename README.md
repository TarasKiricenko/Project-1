# SPACE INVADERS
First project on my learning path.

<h2>Brief:</h2>
My personal version of Space Invaders classical 80's game. Player aiming to shoot down all aliens, moving only right or left. Aliens slowly moving descending, randomly trying to drop bombs on player. As soon as all aliens are taken downs or player loses all 3 lives - game is over. Target is to achieve maximum point, each alien taken downs brings you 10 points. You can only have one bullet on screen, before it reaches the target or leaves game field, otherwise launching second one, first one eliminates.

<h2>How to play:</h2>
Copletely intuitive gameplay, using 3 keys. Follow instructions in actual game.

<h2>Deployed project:</h2>
<a href="https://taraskiricenko.github.io/Project-1/">Space Invaders</a>

<h2>Tech used:</h2>
* JavaScript
* HTML
* CSS3

<h2>Sample screenshot:</h2>
<img width="678" alt="Screenshot 2021-08-11 at 14 08 37" src="https://user-images.githubusercontent.com/81250034/129019683-2485fda7-d442-4a88-b1dc-919b2bef0872.png">

<h2>Build:</h2>
<li>Create a grid using "for loop" and add divs using JS through DOM.</li>
<li>Give each "cell" (essentially, div) an id for allocation purposes, applying certain css classes at particular situation to each one, creating actual gameplay.</li>
<li>Create classes for game objects: aliens, player, bullet, explosion, collision etc.</li>
<li>Develop functions, setting the raticular rules: collision detection, player position, bullet movement etc.</li>
<br>
(for more detailed see "sample code")
    
<h2>Sample code:</h2>
<li>Here you can see, how the bullet moves and what are the conditions:</li>
<br>
First function defines what to do if a "cell" contains a particular class, and if right key is pressed, adds a bullet
<br>
<br>
Second function is running on interval, and moves the bullet up to the top of game field and removes it when bullet reaches top border.
<img width="650" alt="Screenshot 2021-08-11 at 14 34 16" src="https://user-images.githubusercontent.com/81250034/129022002-e2b971bb-f0b6-46b3-bea9-0d6df0625ee4.png">
<br>
<li>Here you can have a look at the another functional part.</li>
<br>
This functions defines what happens when you hit the alien:
<br>
<br>
* It checks, if first of all you do have 2 classes in one "cell" first
<br>
* Add points to your score span.
<br>
* Removes both alien and bullet, and sets explosion class to that cell.
<br>
* Takes aliens (as array) and splices that array at the index of killed alien.
<br>
* Finally, if that was the last alien, shows victory message.
<img width="837" alt="Screenshot 2021-08-11 at 14 46 24" src="https://user-images.githubusercontent.com/81250034/129023587-104ed98f-9275-4f46-b0fc-597c0a68edcb.png">

<h2>Wins and challenges:</h2>
<h4>Wins</h4>
<li>It was great practice on array methods and interval management, as well as using "for loop" and getElement functions. Perfect kind of project for beginners to solidify their knowledge of JavaScript</li>
<li>I designed this game myself, so the sounds I was using had to be "cut" to particualr pieces, as they had to fit sertain timeframes in my interval-paced game. Good fun and valuable experience.</li>

<h4>Challenges</h4>
<li>The most challenging part was defining a collision between alien bullet and player, as it is a multi-conditional function, that not only checks, if player was hit, but defines the movement of alien projectile.</li>
<li>Another very imlortant part, that was hard enough - styling. I wanted to create perfectly playable game, so I spend quite some time looking for right resources and making them look like a solid product.</li>

<h2>Potential imporvements:</h2>
<li>Pause game functionality.</li>
<li>Mute functionality.</li>
<li>2 players functionality - 2 simultaneously and/or turn taking.</li>
<li>Difficulty levels, increasing speed of movement of aliens etc.</li>
