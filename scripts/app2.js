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

  if (currentAlienPosition / width + 1 === 1) {
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

  if ((currentAlienPosition - ((width / 2) - 1)) % width === 10){
    currentAlienPosition += width
    clearTimeout(intervalMoveAlienRight)
    moveAlienLeft()
  }
    
}

const intervalMoveAlienRight = setInterval(moveAlienRight, 200)