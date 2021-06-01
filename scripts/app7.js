function init() {
  console.log('JS running')
  document.querySelector('button')
  // window.alert('Press Start button to start the game')
  // function startGame() {
  // OK, lets start from beginning.
  // CONSTANTS AND LETS
    
    // window.alert('Press ok to start the game')
    const grid = document.querySelector('.grid')
    const spanValue = document.querySelector('span')
    parseFloat(spanValue)
    let spanValueNumber = 0
    const width = 20
    const cellCount = width * width
    const cells = []
    // console.log(cells)
    const playerCLass = 'player'
    const alienClasss = 'alien'
    const bulletClass = 'bullet'
    const explosionClass = 'explosion'
    const alienBulletClass = 'alienbullet'
    // const startingAlienPositionArray = [0,1,2,3,4]
    const startingAlienPositionArray = [0,2,4,6,8,10,12,14,21,23,25,27,29,31,33,40,42,44,46,48,50,52,54]
    // console.log(startingAlienPositionArray.length)
    const startingPlayerPosition = 389
    let currentPlayerPosition = 389
    let currentBulletPosition
    let currentAlienBulletPosition
    // let speedOfAliensToMove = 200
    // FUNCTIONS GONNA WRITE AS MANY
    function createGrid() {
      for (let i = 0; i < cellCount; i ++) {
        const cell = document.createElement('div')
        cell.innerText = i
        grid.appendChild(cell)
        cells.push(cell)
      }
    }
    createGrid()

    function createAliens(event) {
      for (let i = 0; i < startingAlienPositionArray.length; i++) {
      // console.log(startingAlienPositionArray[i]) 
      // console.log(cells[i])
      // console.log(cells[i].classList)
      // console.log(cells.includes(alienClasss))
        cells[startingAlienPositionArray[i]].classList.add(alienClasss)
      }
    }
    createAliens()

    function removeAliens() {
      for (let i = 0; i < startingAlienPositionArray.length; i++) {
        cells[startingAlienPositionArray[i]].classList.remove(alienClasss)
      }
    }

    function setMoveAliensBorders(){
      for (let i = 0; i < cellCount; i++) {
        if (cells[i].innerText % width === width - 1) {
          cells[i].classList.add('rightborder')
        } 
        if (cells[i].innerText % width === 0) {
          cells[i].classList.add('leftborder')
        }
      }
    }
    setMoveAliensBorders()
  
    function moveAliensRight() {
      removeAliens()
      for (let i = 0; i < startingAlienPositionArray.length; i++) {
        startingAlienPositionArray[i] += 1
        if (cells[startingAlienPositionArray[i]].classList.contains('rightborder')) {
          // console.log('hi')
          // clearInterval(intervalMoveAliensRight)
          // descend()
          // moveAliensLeft()
          
          // startingAlienPositionArray[i] += width
          // clearInterval(intervalMoveAliensRight)
          // console.log(startingAlienPositionArray[i])
        }
      }
      createAliens()
      // descend()
    }
    const intervalMoveAliensRight = setInterval(moveAliensRight, 500)

    // function descend() {
    //   removeAliens()
    //     for (let i = 0; i < startingAlienPositionArray.length; i++) {
    //       console.log(startingAlienPositionArray[i])
    //       startingAlienPositionArray[i] += width - 1
    //       console.log(startingAlienPositionArray[i])
    //   }
    //   createAliens()
    // }

    // function moveAliensLeft() {
    //   removeAliens()
    // }
    // let startBulletFrom
    // function addAlienBullet() {
    // // console.log(startingAlienPositionArray)
    //   const startBulletFrom = startingAlienPositionArray[Math.floor(Math.random() * startingAlienPositionArray.length)]
    //   // console.log(startBulletFrom)
    //   for (let i = 0; i < cellCount; i++) {
    //   // console.log(startBulletFrom)
    //     cells[startBulletFrom].classList.add(alienBulletClass)
    //   }
    // // if (cells[i].classList)
    // }

    // const intervalAddAlienBullet = setInterval(addAlienBullet, 2000)
    // const intervalAddAlienBullet = setInterval(addAlienBullet, (Math.floor(Math.random() * 2000)))
    //! need to adjust according to game play.

    // function moveAlienBullet() {
    //   for (let i = 0; i < cellCount; i++) {
    //     if (cells[i].classList.contains(alienBulletClass)) {
    //       cells[i].classList.remove(alienBulletClass)
        
    //       cells[i + width].classList.add(alienBulletClass)
    //     }
    //   }
    // }
    // const intervalMoveAlienBullet = setInterval(moveAlienBullet, 100)
  
    // function moveAliensRight() {
    //   console.log(currentAlienPositionArray)
    //   removeAliens()
    //   for (let i = 0; i < cellCount; i++) {
    //     if (cells[i].classList.contains(alienClasss)) {
    //     // && !cells[i].classList.contains('rightborder'))) {
    //       cells[i].classList.remove(alienClasss)
    //       cells[i + 1].classList.add(alienClasss)
    //     } 
    //   }
    //   createAliens()
    // }
    // const intervalMoveAliensRight = setInterval(moveAliensRight, 500)
    // function moveAliensRight() {
    //   for (let i = 0; i < width; i++) {
    //     if (cells[i].classList.contains(alienClasss) && !cells[i].)
    //   }

    // }
  

    function createPlayer(){
      cells[startingPlayerPosition].classList.add(playerCLass)
    }
    createPlayer()

    function addPlayer(position) {
      cells[position].classList.add(playerCLass)
    }

    function removePlayer(position) {
      cells[position].classList.remove(playerCLass)
    }

    function movePlayer(event) {
      const key = event.keyCode
      removePlayer(currentPlayerPosition)
      if (key === 39 && currentPlayerPosition % width !== width - 1) {
        currentPlayerPosition++
      } else if (key === 37 && currentPlayerPosition % width !== 0) {
        currentPlayerPosition--
      } //else {
      //   console.log('INVALID KEY')
      // } 
      addPlayer(currentPlayerPosition)
    }

    function addBullet(event) {
      const key = event.keyCode
      if (key === 83) {
        cells[currentPlayerPosition - width].classList.add(bulletClass)
        currentBulletPosition = cells[currentPlayerPosition - width]
      }
    }

    function moveBullet() {
      for (let i = 0; i < cellCount; i++) {
        if (cells[i].classList.contains(bulletClass) ) {
          cells[i].classList.remove(bulletClass)
          cells[i - width].classList.add(bulletClass)
          currentBulletPosition = cells[i - width]
          // if (currentBulletPosition.classList.contains(bulletClass) && cells[i].innerText < width) {
          //   console.log('bullet is at bottom line')
          //   cells[i].classList.remove(bulletClass)
          // }
          // break
          if (currentBulletPosition.classList.contains(bulletClass) && cells[i].innerText < 20) {
            console.log('bullet is at bottom line') //! bug here, it was not working in the previous version like this
            cells[i].classList.remove(bulletClass)
            break
          }
        }
      }
    }
    const intervalMoveBullet = setInterval(moveBullet, 100)



    function explosionDetection() {
      for (let i = 0; i < cellCount; i++) {
        if (cells[i].classList.contains(alienClasss) && cells[i].classList.contains(bulletClass)) {
          // console.log('score + 10')
          spanValueNumber += parseInt(10)
          cells[i].classList.remove(alienClasss)
          // cells[i].classList.remove(bulletClass)
          spanValue.innerText = spanValueNumber
          cells[i].classList.add(explosionClass)
          cells[i].classList.remove(bulletClass)
          // console.log(cells[i])
          // console.log(startingAlienPositionArray)
          // console.log(cells[i].innerText)
          // console.log(typeof(cells[i].innerText))
          const kill = parseFloat(cells[i].innerText)
          // console.log(startingAlienPositionArray)
          const index = startingAlienPositionArray.indexOf(kill)
          if (index > -1) {
            startingAlienPositionArray.splice(index, 1)
          }
          // console.log(startingAlienPositionArray)
          if (startingAlienPositionArray.length === 0) {
            window.confirm('You win! Would you like to start again?')
            // window.location.reload()
            // speed = 500
            // window.alert('Next Level')
          }

        }
      }
    }
    const intervalExplosionDetection = setInterval(explosionDetection, 20)

    function removeExplosion() {
      for (let i = 0; i < cellCount; i++) {
        if (cells[i].classList.contains(explosionClass)) {
          setTimeout(() => {
            cells[i].classList.remove(explosionClass)
          }, 700)
        }
      }
    }
    const intervalRemoveExplosion = setInterval(removeExplosion, 20)

    function collisionWithPlayer () {
      for (let i = 0; i < cellCount; i++) {
      if (cells[i].classList.contains(alienClasss) && cells[i].innerText > cellCount - width) {
      // if (cells[i].classList.contains(alienClasss) && cells[i].classList.contains(playerCLass)) {
        // console.log('gameover')
        // console.log(cells[i].innerText)
        clearInterval(intervalMoveAliensRight)
        window.location.reload()
        window.confirm('Aliens are landed! Game is over. Would you like to start again?')
      }
    }
    }
    const intervalCollisionWithPlayer = setInterval(collisionWithPlayer, 20)
    // function checkIfPlayerWins() {
    //   for (let i = 0; i < cellCount; i++) {
    //     if (!cells[i].classList.contains(alienClasss) && cells[i].classList.contains(playerCLass)) {
    //       window.alert('You win!')
    //     }
    //   }
    // }
    // const intervalCheckIfPlayerWins = setInterval(checkIfPlayerWins, 2000)
    // function removeExplosion () {
    //   for (let i = 0; i < cellCount; i++) {
    //     // if (cells[i].classList.contains(explosionClass) {
    //       setTimeout(removeExplosion, 400)
    //     }
    //   }
    // }

    // const intervalRemoveExplosion = setInterval(removeExplosion, 20)

  
    document.addEventListener('keyup', addBullet)
    document.addEventListener('keyup', movePlayer)
  // }
  // document.querySelector('button').addEventListener('click', startGame)
  
}
window.addEventListener('DOMContentLoaded', init)