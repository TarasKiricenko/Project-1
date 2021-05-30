function init() {
  console.log('JS is running')
  window.alert('Press ok to start the game')
  const grid = document.querySelector('.grid')
  const spanValue = document.querySelector('span')
  parseFloat(spanValue)
  const width = 20
  const cellCount = width * width
  const cells = []
  const startingPlayerPosition = 389
  let currentPlayerPosition = 389
  const startingAlienPosition = 0
  let currentAlienPosition = 0
  
  const playerClass = 'player'
  const bulletClass = 'bullet'
  const alienClass = 'alien'
  
  function createGrid(startingPlayerPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addPlayer(startingPlayerPosition)
  }

  function addAlien(position) {
    cells[position].classList.add(alienClass)
  }
  
  function removeAlien(position) {
    cells[position].classList.remove(alienClass)
  }

  function descend() {
    console.log(currentAlienPosition)
    removeAlien(currentAlienPosition)
    for (let i = 0; i < cellCount; i++) {
      if (cells[i].classList.contains(alienClass)) {
        cells[i].classList.remove(alienClass)
        cells[i + width].classList.add(alienClass)
        console.log(cells[i + width])
      }
      
    }
    currentAlienPosition += width
    addAlien(currentAlienPosition)
    
    moveAlienLeft()
  }

  function moveAlienRight() {
    console.log(currentAlienPosition)
    removeAlien(currentAlienPosition)
    removeAlien(currentAlienPosition + 2)
    // for (let i = 0; i <= currentAlienPosition - ((width / 2) - 1) % width === 10; i++) {
    for (let i = 0; i < cellCount; i++) {
      if (cells[i].classList.contains(alienClass)) {
        // console.log(cells[i])
        cells[i].classList.remove(alienClass)
        // console.log(cells[i])
        cells[i].classList.add(alienClass)
      
        // console.log(cells[i])
      } else if (currentBulletPosition.classList.contains(alienClass) && currentBulletPosition.classList.contains(bulletClass)) {
        return console.log('heasdasdasdasd')
      }
    }
    console.log(currentAlienPosition)
    currentAlienPosition ++
    addAlien(currentAlienPosition)
    addAlien(currentAlienPosition + 2)
  
    if ((currentAlienPosition - ((width / 2) - 1)) % width === 10){
      // currentAlienPosition += width
      descend()
      clearTimeout(intervalMoveAlienRight)
    } 
  }
  const intervalMoveAlienRight = setInterval(moveAlienRight, 200)
  
  function moveAlienLeft() {
    console.log('helo')
    // console.log(currentAlienPosition)
    // removeAlien(currentAlienPosition)
    // for (let i = 0; i < cellCount; i++) {
    //   if (cells[i].classList.contains(alienClass)) {
    //     cells[i].classList.remove(alienClass)
    //     cells[i - 1].classList.add(alienClass)
    //   }
    // }
    // console.log(currentAlienPosition)
    // currentAlienPosition --
    // addAlien(currentAlienPosition)
    // descend()
    moveAlienRight()
  }

  function addPlayer(position) {
    cells[position].classList.add(playerClass)
  }

  function removePlayer(position) {
    cells[position].classList.remove(playerClass)
  }

  let spanValueNumber = 0
  function moveBullet() {
    for (let i = 0; i < cellCount; i++) {
      if (cells[i].classList.contains(bulletClass)) {
        cells[i].classList.remove(bulletClass)
        cells[i - width].classList.add(bulletClass)
        currentBulletPosition = cells[i - width]
        // console.log(currentBulletPosition)
        if (currentBulletPosition.classList.contains(alienClass) && currentBulletPosition.classList.contains(bulletClass)) {
          // console.log('score + 10')
          spanValueNumber += parseInt(10)
          currentBulletPosition.classList.remove(alienClass)
          currentBulletPosition.classList.remove(bulletClass)
          spanValue.innerText = spanValueNumber
        }
        if (currentBulletPosition.classList.contains(bulletClass) && currentBulletPosition.innerText < 20) {
          console.log('bullet is at bottom line')
          currentBulletPosition.classList.remove(bulletClass)
          break
        }
      } 
    }
  }
  
  let currentBulletPosition 
  function addBullet () {
    cells[currentPlayerPosition - width].classList.add(bulletClass)
    currentBulletPosition = cells[currentPlayerPosition - width]
    // console.log(currentBulletPosition)
  }
  
  function handleKeyUp(event) {
    const key = event.keyCode
    removePlayer(currentPlayerPosition)
    if (key === 39 && currentPlayerPosition % width !== width - 1) {
      currentPlayerPosition++
    } else if (key === 37 && currentPlayerPosition % width !== 0) {
      currentPlayerPosition--
    } else if (key === 83) {
      addBullet()
    } else {
      console.log('INVALID KEY')
    }
    
    addPlayer(currentPlayerPosition)
  }
  document.addEventListener('keyup', handleKeyUp)
  createGrid(startingPlayerPosition)
  addAlien(startingAlienPosition)
  addAlien(startingAlienPosition + 2)
}

window.addEventListener('DOMContentLoaded', init)