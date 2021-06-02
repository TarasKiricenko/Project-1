function init() {
  console.log('JS running')
  document.querySelector('button')
  const hiddenButton = document.querySelector('button')
  const hiddenClass = 'hiddenclass'
  window.alert('Welcome to Space Invaders game! \nUse left and right arrows to cotrol the player, press "S" to shoot.\nPress start button to start the game.')
  function startGame() {
  // OK, lets start from beginning.
  // CONSTANTS AND LETS
    
    // window.alert('Press ok to start the game')
    const grid = document.querySelector('.grid')
    const spanValue = document.querySelector('span')
    parseFloat(spanValue)
    let spanValueNumber = 0
    const livesLeftNumber = document.querySelector('number')
    parseFloat(livesLeftNumber)
    // console.log(livesLeftNumber)
    // console.log(typeof(livesLeftNumber))
    const width = 20
    const cellCount = width * width
    const cells = []
    // console.log(cells)
    const playerCLass = 'player'
    const alienClasss = 'alien'
    const bulletClass = 'bullet'
    const explosionClass = 'explosion'
    const alienBulletClass = 'alienbullet'
    const playerExplosion = 'playerexplosion'
    // const hiddenClass = 'hiddenclass'
    // const startingAlienPositionArray = [0,1,2,3,4]
    // const startingAlienPositionArray = [0,2,4,6,8,10,12,14,21,23,25,27,29,31,33,40,42,44,46,48,50,52,54]
    const startingAlienPositionArray = [0,2,4,6,8,10,12,14,16,18,21,23,25,27,29,31,33,35,37,40,42,44,46,48,50,52,54,56,58]
    // const startingAlienPositionArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54]
    // console.log(startingAlienPositionArray.length)
    const startingPlayerPosition = 389
    let currentPlayerPosition = 389
    let livesLeft = 3
    // console.log(livesLeft)
    // console.log(typeof(livesLeft))
    let currentBulletPosition
    let currentAlienBulletPosition
    // let speedOfAliensToMove = 200
    // FUNCTIONS GONNA WRITE AS MANY
    function createGrid() {
      for (let i = 0; i < cellCount; i ++) {
        const cell = document.createElement('div')
        cell.innerText = i
        cell.dataset.id = i
        grid.appendChild(cell)
        cells.push(cell)
      }
    }
    createGrid()

    function createAliens() {
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
        // console.log(startingAlienPositionArray[i])
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
    function addAlienBullet() {
    // console.log(startingAlienPositionArray)
      const startBulletFrom = startingAlienPositionArray[Math.floor(Math.random() * startingAlienPositionArray.length)]
      // console.log(startBulletFrom)
      for (let i = 0; i < cellCount; i++) {
        // console.log(startingAlienPositionArray.length)
      // if (!startingAlienPositionArray.length === 0) {// console.log(startBulletFrom)
        // console.log(startingAlienPositionArray.length)
        // console.log(startBulletFrom)
        cells[startBulletFrom].classList.add(alienBulletClass)
        // cells[startBulletFrom + (Math.floor(Math.random() * startingAlienPositionArray.length))].classList.add(alienBulletClass)
      // }
      }
      // if (startingAlienPositionArray.length === 0) {

      // clearInterval(intervalAddAlienBullet)
      // }
    // if (cells[i].classList)
    }
    // const intervalAddAlienBullet = setTimeout(addAlienBullet, 2000)
    addAlienBullet() //(Math.floor(Math.random() * startingAlienPositionArray.length))
    const intervalAddAlienBullet = setInterval(addAlienBullet, (Math.floor(Math.random() * 1000)))
    // const intervalAddAlienBullet = setInterval(addAlienBullet, 2000)

    function moveAlienBullet() {
      const alienBulletArray = document.querySelectorAll('.alienbullet')
      // console.log('hi')
      // console.log(alienBulletArray)
      for (let i = 0; i < alienBulletArray.length; i++) {
        const el = alienBulletArray[i]
        // console.log(el.dataset.id, i)
        el.classList.remove(alienBulletClass) 
        // cells[parseFloat(el.dataset.id) + width].classList.add(alienBulletClass)      
        if (parseFloat(el.dataset.id) + width < cellCount) {
        // el.classList.remove(alienBulletClass) 
          cells[parseFloat(el.dataset.id) + width].classList.add(alienBulletClass)      
        // break
        }
        if (cells[parseFloat(el.dataset.id)].classList.contains(playerCLass)) {
          cells[parseFloat(el.dataset.id)].classList.remove(alienBulletClass)
          // console.log('Player was hit!')
          livesLeft --
          // console.log(livesLeft)
          // cells[parseFloat(el.dataset.id)].classList.remove(playerCLass)
          
          cells[parseFloat(el.dataset.id)].classList.add(playerExplosion)
          if (livesLeft === 2) {
            window.alert('You got hit! You have 2 lives left')
            livesLeftNumber.innerText -- 
          }
          if (livesLeft === 1) {
            window.alert('Gotta be careful, one life left!')
            livesLeftNumber.innerText --
          }
          if (livesLeft === 0) {
            window.alert('You are down! Start again to protect the Earth!')
            livesLeftNumber.innerText --
            window.location.reload()
          }
        

        }
        
          
      // console.log('hi')
      // currentAlienBulletPosition = cells[i]
      // console.log(currentAlienBulletPosition)
      // cells[i].classList.remove(alienBulletClass)
      // cells[i].classList.add(alienBulletClass)
      // console.log(cells[i])
      // el.classList.remove(alienBulletClass)
      // console.log(cells[i + width], i + width)
      // cells[i + width].classList.add(alienBulletClass)
      // console.log(cells[i + width], i + width)
      }
    }
    // setTimeout(moveAlienBullet, 1000)
    const intervalMoveAlienBullet = setInterval(moveAlienBullet, 100)
    
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

        // play
        cells[currentPlayerPosition - width].classList.add(bulletClass)
        currentBulletPosition = cells[currentPlayerPosition - width]
      }
    }

    function moveBullet() {
      for (let i = 0; i < cellCount; i++) {
        if (cells[i].classList.contains(bulletClass) && parseFloat(currentBulletPosition.innerText) >= 0) {
          cells[i].classList.remove(bulletClass)
          cells[i - width].classList.add(bulletClass)
          currentBulletPosition = cells[i - width]
          // if (currentBulletPosition.classList.contains(bulletClass) && cells[i].innerText < width) {
          //   console.log('bullet is at bottom line')
          //   cells[i].classList.remove(bulletClass)
          // const el = alienBulletArray[i]
          // console.log(i)
          // console.log(currentBulletPosition)
          if (parseFloat(currentBulletPosition.innerText >= 0)) {
            cells[i - width].classList.add(bulletClass)
            // console.log(i)
            // console.log(typeof(i))
          
          }
          // // console.log(el.dataset.id, i)
          // el.classList.remove(alienBulletClass) 
          // // cells[parseFloat(el.dataset.id) + width].classList.add(alienBulletClass)      
          // if (parseFloat(el.dataset.id) + width < cellCount) {
          //   // el.classList.remove(alienBulletClass) 
          //   cells[parseFloat(el.dataset.id) + width].classList.add(alienBulletClass)      
          //   // break
          // }
        // break
        // if (currentBulletPosition.classList.contains(bulletClass) && cells[i].innerText < 20) {
        //   console.log('bullet is at bottom line') //! bug here, it was not working in the previous version like this
        //   cells[i].classList.remove(bulletClass)
        //   break
        // }
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
        if (cells[i].classList.contains(explosionClass) || cells[i].classList.contains(playerExplosion)) {
          setTimeout(() => {
            cells[i].classList.remove(explosionClass, playerExplosion)
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
   
    document.addEventListener('keyup', addBullet)
    document.addEventListener('keyup', movePlayer)
  }
  document.querySelector('button').addEventListener('click', startGame)
  document.querySelector('button').addEventListener('click', playMusic)
  document.querySelector('button').addEventListener('click', hideStartButton)

  function hideStartButton() {
    hiddenButton.classList.add(hiddenClass)

  }
  function playMusic() { 
    document.getElementById('soundtrack').play() 
  }

}
window.addEventListener('DOMContentLoaded', init)