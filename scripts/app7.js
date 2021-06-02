function init() {
  console.log('JS running')
  document.querySelector('button')
  const hiddenButton = document.querySelector('button')
  const hiddenClass = 'hiddenclass'
  window.alert('Welcome to Space Invaders game! \nUse left and right arrows to cotrol the player, press "S" to shoot.\nPress start button to start the game.')
  function startGame() {
    const grid = document.querySelector('.grid')
    const spanValue = document.querySelector('span')
    parseFloat(spanValue)
    let spanValueNumber = 0
    const livesLeftNumber = document.querySelector('number')
    parseFloat(livesLeftNumber)
    const width = 20
    const cellCount = width * width
    const cells = []
    const playerCLass = 'player'
    const alienClasss = 'alien'
    const bulletClass = 'bullet'
    const explosionClass = 'explosion'
    const alienBulletClass = 'alienbullet'
    const playerExplosion = 'playerexplosion'
    const bulletsCollideClass = 'bulletcollision'
    const startingAlienPositionArray = [0,2,4,6,8,10,12,14,16,18,21,23,25,27,29,31,33,35,37,40,42,44,46,48,50,52,54,56,58]
    const startingPlayerPosition = 389
    let currentPlayerPosition = 389
    let livesLeft = 3
    let currentBulletPosition
    let currentAlienBulletPosition
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
      }
      createAliens()
    }
    const intervalMoveAliensRight = setInterval(moveAliensRight, 500)

    function addAlienBullet() {
      const startBulletFrom = startingAlienPositionArray[Math.floor(Math.random() * startingAlienPositionArray.length)]
      for (let i = 0; i < cellCount; i++) {
        cells[startBulletFrom].classList.add(alienBulletClass)
      }
    }
    const intervalAddAlienBullet = setInterval(addAlienBullet, (Math.floor(Math.random() * 1000)))

    function moveAlienBullet() {
      const alienBulletArray = document.querySelectorAll('.alienbullet')
      for (let i = 0; i < alienBulletArray.length; i++) {
        const el = alienBulletArray[i]
        el.classList.remove(alienBulletClass)     
        if (parseFloat(el.dataset.id) + width < cellCount) {
          cells[parseFloat(el.dataset.id) + width].classList.add(alienBulletClass)      
        }
        if (cells[parseFloat(el.dataset.id)].classList.contains(playerCLass)) {
          cells[parseFloat(el.dataset.id)].classList.remove(alienBulletClass)
          livesLeft --
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
      }
    }
    const intervalMoveAlienBullet = setInterval(moveAlienBullet, 100)

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
      } 
      addPlayer(currentPlayerPosition)
    }

    function addBullet(event) {
      const key = event.keyCode
      if (key === 83) {
        cells[currentPlayerPosition - width].classList.add(bulletClass)
        currentBulletPosition = cells[currentPlayerPosition - width]
        playPlayerBulletMusic()
      } 
    }
    
    function moveBullet() {
      for (let i = 0; i < cellCount; i++) {
        if (cells[i].classList.contains(bulletClass)) {
          cells[i].classList.remove(bulletClass)
          cells[i - width].classList.add(bulletClass)
        } 
      }
    }
    const intervalMoveBullet = setInterval(moveBullet, 100)

    function bulletCollisionDetection() {
      for (let i = 0; i < cellCount; i++) {
        if (cells[i].classList.contains(bulletClass) && cells[i].classList.contains(alienBulletClass)) {
          cells[i].classList.remove(bulletClass)
          cells[i].classList.remove(alienBulletClass)
          cells[i].classList.add(bulletsCollideClass)
          setTimeout(() => {
            cells[i].classList.remove(bulletsCollideClass)
          }, 600)
        }
      }
    }
    const intervalBulletCollosionDetection = setInterval(bulletCollisionDetection, 100)

    function explosionDetection() {
      for (let i = 0; i < cellCount; i++) {
        if (cells[i].classList.contains(alienClasss) && cells[i].classList.contains(bulletClass)) {
          spanValueNumber += parseInt(10)
          cells[i].classList.remove(alienClasss)
          spanValue.innerText = spanValueNumber
          cells[i].classList.add(explosionClass)
          cells[i].classList.remove(bulletClass)
          const kill = parseFloat(cells[i].innerText)
          const index = startingAlienPositionArray.indexOf(kill)
          if (index > -1) {
            startingAlienPositionArray.splice(index, 1)
          }
          if (startingAlienPositionArray.length === 0) {
            window.confirm('You win! Would you like to start again?')
            window.location.reload()
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
  function playPlayerBulletMusic() {
    document.getElementById('bulletsound').play()
  }

}
window.addEventListener('DOMContentLoaded', init)