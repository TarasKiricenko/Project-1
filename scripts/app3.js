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
  const startingAlienPositionArray = [3, 5, 7, 9, 11, 13, 15]
  let currentAlienPosition = 0
  const currentAlienPositionArray = 0
  
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

  function addPlayer(position) {
    cells[position].classList.add(playerClass)
  }

  function removePlayer(position) {
    cells[position].classList.remove(playerClass)
  }

  function addAlien(position) {
    cells[position].classList.add(alienClass)
    // cells[position - 2].classList.add(alienClass)
    // cells[position - 4].classList.add(alienClass)
    // cells[position - 6].classList.add(alienClass)
    cells[position + 2].classList.add(alienClass)
    cells[position + 4].classList.add(alienClass)
    cells[position + 6].classList.add(alienClass)
  }
  
  function removeAlien(position) {
    cells[position].classList.remove(alienClass)
  }

  
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

    if ((currentAlienPosition - ((width / 2) - 1)) % width === 10){
      currentAlienPosition += width
      clearTimeout(intervalMoveAlienRight)
      moveAlienLeft()
    }
    
  }

  const intervalMoveAlienRight = setInterval(moveAlienRight, 200)

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
  const intervalMoveBullet = setInterval(moveBullet, 100)
  let currentBulletPosition 
  function addBullet () {
    cells[currentPlayerPosition - width].classList.add(bulletClass)
    currentBulletPosition = cells[currentPlayerPosition - width]
    console.log(currentBulletPosition)
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
}

window.addEventListener('DOMContentLoaded', init)