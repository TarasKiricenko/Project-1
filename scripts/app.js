function init() {
  console.log('JS is running')
  // window.alert('Welcome to the game!')
  // const start = document.querySelector('button')
  // 
  // function startGame(){
  window.alert('Press ok to start the game')

  const grid = document.querySelector('.grid') // we grab out grid
  // console.log(grid)
  // write as many vairables in global scope, so we can modiy tehm later
  const width = 20 // width equals to ten cell
  const cellCount = width * width // we want 100 cells, so multiply
  const cells = [] //empty array, to keep track of them somewhere it stores indexes of divs(cells)
  // that is equivalent of nodelist.

  const startingPlayerPosition = 389 //we need to have a variable to store a cats initial position
  let currentPlayerPosition = 389 // let allows use to change current position, so we can keep track as well
  const startingAlienPosition = 0
  let currentAlienPosition = 0
  
  const playerClass = 'player' // variable stores a class of cat, so we can attach it later as variable
  const bulletClass = 'bullet'
  const alienClass = 'alien'
  

  function createGrid(startingPlayerPosition) { //function that determines the grid
    for (let i = 0; i < cellCount; i++) { // start from zero, it will run 100 times, from cell count.
      const cell = document.createElement('div') //cell - element of div
      // console.log('cell >>', cell)
      cell.innerText = i // we want to create indexes of loop, to be visible.
      // console.log('cell >>>', cell) //it has inner text inside to identify index
      grid.appendChild(cell) //attach our created cells to grid div, cell is also a div with index
      cells.push(cell) // need to keep track of created cells, we push it into CELLS empty array 
    }
    // console.log('cells array >>>', cells) // we logging our array of cells we created.
    addPlayer(startingPlayerPosition) //that is how we get cat displaying as soon as the grid created, 
  }

  function addPlayer(position) { //* this function will add a class of cat to current position or staring position
    // console.log('cells .. >>', cells)
    // console.log('position of player>>>', position)
    // console.log(typeof(position))
    // console.log('div at index>>>', cells[position]) // gives me a div, where is a current index of what being passed in
    // console.log('classlist', )
    cells[position].classList.add(playerClass) //then we add a class to that position, so cat apears there
  
  }

  function removePlayer(position) {
    cells[position].classList.remove(playerClass) // so now, from current position, we remove a cat
  }

  function addAlien(position) {
    cells[position].classList.add(alienClass)
    // cells[positionAlien + 2].classList.add(alienClass)
  }
  
  function removeAlien(position) {
    cells[position].classList.remove(alienClass)
  }

  function moveAlienLeft(){
    console.log(currentAlienPosition)
    removeAlien(currentAlienPosition)
    for (let i = 0; i <= cellCount; i++) {
      if (cells[i].classList.contains(alienClass)) {
        console.log('alien current position is att div>', cells[i])
        cells[i].classList.remove(alienClass)
        cells[i - 1].classList.add(alienClass)
        console.log(cells[i])
      }
    }
    console.log(currentAlienPosition)
    currentAlienPosition --
    addAlien(currentAlienPosition)

    // currentAlienPosition % width !== 0
    if (currentAlienPosition / width === 0 && currentAlienPosition <= 0) {
      currentAlienPosition += width
      clearTimeout(intervalMoveAlienLeft)
      moveAlienRight()
    }
  }

  const intervalMoveAlienLeft = setInterval(moveAlienLeft, 200)
  
  

  function moveAlienRight() {
    console.log(currentAlienPosition)
    removeAlien(currentAlienPosition)
    // for (let i = 0; i <= currentAlienPosition - ((width / 2) - 1) % width === 10; i++) {
    
    for (let i = 0; i <= cellCount - width; i++) {
      
      if (cells[i].classList.contains(alienClass)) {
        // console.log(cells[i])
        cells[i].classList.remove(alienClass)
        // console.log(cells[i + 1])
        cells[i].classList.add(alienClass)
      }
    }
    console.log(currentAlienPosition)
    currentAlienPosition ++
    addAlien(currentAlienPosition)

    if ((currentAlienPosition - ((width / 2) - 1)) % width === 10 + 1){
      currentAlienPosition = 39
      clearTimeout(intervalMoveAlienRight)
      moveAlienLeft()
    }
      
  }

  const intervalMoveAlienRight = setInterval(moveAlienRight, 200)
  // if ((currentAlienPosition === 19)) {
  //   currentAlienPosition += width
      
  // }
    

  // if (currentAlienPosition === 381) {
  //   window.alert('You lose! Do you want to start again?')
  //   window.location.href = window.location.href }
  // } else if ((currentAlienPosition - ((width / 2) - 1)) % width === 10){
  //   currentAlienPosition = currentAlienPosition + width - 1
  //   moveAlienRight()
  // }
  
  
  

  // const bulletCurrentPosition = currentPlayerPosition

  // function shoot(currentPlayerPosition){
  //   cells[currentPlayerPosition - 20].classList.add('bullet')
  //   console.log(cells.classList)
  //   console.log(cells[currentPlayerPosition - 20])
  //   console.log(cells[currentPlayerPosition - 20].classList.add('bullet'))
  // console.log('bullet is in square', position)
  // cells[position].classList.add(bulletClass)
  // console.log(cells[position].classList.add(bulletClass))
  // cells[]
  // }
  // shoot()
  function moveBullet() {
    for (let i = 0; i < cellCount; i++) {
      if (cells[i].classList.contains(bulletClass)) {
        // console.log(cells[i])
        // console.log(i)
        // console.log('i is here')
        cells[i].classList.remove(bulletClass)
        cells[i - width].classList.add(bulletClass)
      } else if (cells[i].classList.contains(bulletClass) && cells[i].classList.contains(alienClass)) {
        cells[i].classList.remove(bulletClass)
        cells[i].classList.remove(alienClass)
      }
    // console.log(bulletCurrentPosition)
    // console.log(typeof(bulletCurrentPosition))
    // bulletCurrentPosition -= 20
    }
  }

  function addBullet () {
    cells[currentPlayerPosition - width].classList.add(bulletClass) 
  }

  const intervalMoveBullet = setInterval(moveBullet, 100)
  function handleKeyUp(event) {
  //   console.log(event)
  //   console.log(event.keyCode) //that show us what key was pressed
  //   console.log(event.key) // option, which is similar, but keycode is best
  //   console.log('position before key', currentPlayerPosition) // start position for cat
    const key = event.keyCode // so we store key code in variable so we can reuse it
    removePlayer(currentPlayerPosition) //remove a class, redifine position, add a a class //! we remove a class from current position
    //! this function finds where the cat class is, and removes it
    if (key === 39 && currentPlayerPosition % width !== width - 1) {  // if key is pressed AND
      //! cat current position divided by width has a remainder of 0, 
      //? current current position divided by 10 is not queal to width minus one, which is 9
      //if key pressed equal to one we need,
      // console.log('RIGHT') //console.log direction, so u can see what is pressed
      currentPlayerPosition++ //! here we redefine the position of cat, to move right. so we move from index 0 to index 1
      // console.log('Player curent position after moving right >>>', currentPlayerPosition)
    } else if (key === 37 && currentPlayerPosition % width !== 0) { 
      // console.log('LEFT') // you can keep moving, if current cat position divided by 10 is not equal )
      currentPlayerPosition-- //decrement current value //! change position.
      // console.log('Player curent position after moving left >>>', currentPlayerPosition)
    } else if (key === 83) {
      addBullet()
      // console.log('bullet position is over player in square >', cells[currentPlayerPosition - 20])
      // const bulletStartingPosition = currentPlayerPosition
      // const bulletCurrentPosition = 0
      // function addBullet () {
      //   cells[currentPlayerPosition - width].classList.add(bulletClass) 
      // }
      
    
      // moveBullet()


     
      // clearInterval(interval); // thanks @Luca D'Amico
      //   shoot()
      
      // } else if (key === 38 && currentPlayerPosition >= width) {
      // console.log('UP')
      // currentPlayerPosition -= width // minus width
      // console.log('Cat curent position after moving up >>>', currentPlayerPosition)
      // } else if (key === 40 && currentPlayerPosition + width <= width * width - 1) {
      // console.log('DOWN') // if position plus 10 is less than or equal Width*Width - 1 (for 99)
      // currentPlayerPosition += width
      // console.log('Cat curent position after moving down >>>', currentPlayerPosition)
    } else {
      console.log('INVALID KEY')
    }
    
    addPlayer(currentPlayerPosition) // ! here we add a cat to new position
  }
  document.addEventListener('keyup', handleKeyUp)
  

  createGrid(startingPlayerPosition)
  addAlien(startingAlienPosition)
}

// start.addEventListener('click', startGame)


// }
window.addEventListener('DOMContentLoaded', init)