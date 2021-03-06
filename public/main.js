let playerOneScore = 0
let playerTwoScore = 0
let ties = 0
let playerOneChoice = ''
let playerTwoChoice = ''

function handlePlayerOneRockChoice() {
  document.querySelector('.playerOneCard .playerOneChoiceImg').src =
    'https://www.rpsgame.org/assets/img/rock.svg'
  playerOneChoice = 'rock'
}

function handlePlayerOnePaperChoice() {
  document.querySelector('.playerOneCard .playerOneChoiceImg').src =
    'https://www.rpsgame.org/assets/img/paper.svg'
  playerOneChoice = 'paper'
}

function handlePlayerOneScissorsChoice() {
  document.querySelector('.playerOneCard .playerOneChoiceImg').src =
    'https://www.rpsgame.org/assets/img/scissors.svg'
  playerOneChoice = 'scissors'
}

function handlePlayerOneLizardChoice() {
  document.querySelector('.playerOneCard .playerOneChoiceImg').src =
    'https://rpsls.net/images/lizard.png'
  playerOneChoice = 'lizard'
}

function handlePlayerOneSpockChoice() {
  document.querySelector('.playerOneCard .playerOneChoiceImg').src =
    'https://rpsls.net/images/spock.png'
  playerOneChoice = 'spock'
}

function handlePlayerTwoRockChoice() {
  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src =
    'https://www.rpsgame.org/assets/img/rock.svg'
  playerTwoChoice = 'rock'
}

function handlePlayerTwoPaperChoice() {
  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src =
    'https://www.rpsgame.org/assets/img/paper.svg'
  playerTwoChoice = 'paper'
}

function handlePlayerTwoScissorsChoice() {
  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src =
    'https://www.rpsgame.org/assets/img/scissors.svg'
  playerTwoChoice = 'scissors'
}
function handlePlayerTwoLizardChoice() {
  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src =
    'https://rpsls.net/images/lizard.png'
  playerTwoChoice = 'lizard'
}

function handlePlayerTwoSpockChoice() {
  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src =
    'https://rpsls.net/images/spock.png'
  playerTwoChoice = 'spock'
}

function handlePlayerOneEndTurn() {
  if (playerOneChoice === '') {
    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'You must pick before ending turn!'
    return
  }

  const playerOneCard = document.querySelector(' .playerOneCard')
  playerOneCard.style.display = 'none'

  const playerTwoCard = document.querySelector(' .playerTwoCard')
  playerTwoCard.style.display = 'flex'
}

function handlePlayerTwoEndTurn() {
  if (playerOneChoice === '') {
    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'You must pick before ending turn!'
    return
  }

  const scoreBoardDisplay = document.querySelector('.scoreboard')
  scoreBoardDisplay.style.display = 'flex'

  const playerOneCard = document.querySelector(' .playerOneCard')
  playerOneCard.style.display = 'flex'

  const gameButtons = document.querySelector('.gameButtonsSection')
  gameButtons.style.display = 'flex'
  gameButtons.style.justifyContent = 'space-around'

  const startGameButton = document.querySelector(
    '.gameButtonsSection .startRound'
  )
  startGameButton.textContent = 'Start New Round'

  const playerOneButtons = document.querySelector(' .playerOneButtons')
  playerOneButtons.style.display = 'none'

  const playerTwoButtons = document.querySelector(' .playerTwoButtons')
  playerTwoButtons.style.display = 'none'

  if (playerOneChoice === playerTwoChoice) {
    const tie = document.querySelector('.tieScore')
    ties++
    tie.textContent = `${ties}`

    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'Tie!'
    return
  }

  if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'rock' && playerTwoChoice === 'lizard') ||
    (playerOneChoice === 'spock' && playerTwoChoice === 'scissors') ||
    (playerOneChoice === 'lizard' && playerTwoChoice === 'spock') ||
    (playerOneChoice === 'scissors' && playerTwoChoice === 'lizard') ||
    (playerOneChoice === 'lizard' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'spock') ||
    (playerOneChoice === 'spock' && playerTwoChoice === 'rock')
  ) {
    const playerOneWin = document.querySelector('.playerOneScore')
    playerOneScore++
    playerOneWin.textContent = `${playerOneScore}`

    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'Player One Wins!'
  } else {
    const playerTwoWin = document.querySelector('.playerTwoScore')
    playerTwoScore++
    playerTwoWin.textContent = `${playerTwoScore}`

    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'Player Two Wins!'
  }
}

function handleStartGame() {
  const playerOneButtons = document.querySelector(' .playerOneButtons')
  playerOneButtons.style.display = 'flex'

  const playerTwoButtons = document.querySelector(' .playerTwoButtons')
  playerTwoButtons.style.display = 'flex'

  const showPlayers = document.querySelector(' .allPlayers')
  showPlayers.style.display = 'flex'

  const playerTwoCard = document.querySelector(' .playerTwoCard')
  playerTwoCard.style.display = 'none'

  const changeGameLabel = document.querySelector('.gameEndLabel')
  changeGameLabel.textContent = 'Game On!'

  const gameButtons = document.querySelector('.gameButtonsSection')
  gameButtons.style.display = 'none'

  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src = ''
  document.querySelector('.playerOneCard .playerOneChoiceImg').src = ''
  playerOneChoice = ''
  playerTwoChoice = ''
}

function handleRestartGame() {
  const hidePlayers = document.querySelector(' .allPlayers')
  hidePlayers.style.display = 'none'

  const scoreBoardDisplay = document.querySelector('.scoreboard')
  scoreBoardDisplay.style.display = 'none'

  const startGameLabel = document.querySelector('.gameEndLabel')
  startGameLabel.textContent = 'Press Start to Play'

  document.querySelector('.playerTwoCard .playerTwoChoiceImg').src = ''
  document.querySelector('.playerOneCard .playerOneChoiceImg').src = ''
  playerOneChoice = ''
  playerTwoChoice = ''

  const playerOneWin = document.querySelector('.playerOneScore')
  playerOneScore = 0
  playerOneWin.textContent = `${playerOneScore}`

  const playerTwoWin = document.querySelector('.playerTwoScore')
  playerTwoScore = 0
  playerTwoWin.textContent = `${playerTwoScore}`

  const tie = document.querySelector(' .tieScore')
  ties = 0
  tie.textContent = `${ties}`

  const startGameButton = document.querySelector(
    '.gameButtonsSection .startRound'
  )
  startGameButton.textContent = 'Start Game'
}

const main = () => {
  const playerOneChoiceRock = document.querySelector('.playerOneCard .rock')
  playerOneChoiceRock.addEventListener('click', handlePlayerOneRockChoice)

  const playerOneChoicePaper = document.querySelector('.playerOneCard .paper')
  playerOneChoicePaper.addEventListener('click', handlePlayerOnePaperChoice)

  const playerOneChoiceScissors = document.querySelector(
    '.playerOneCard .scissors'
  )
  playerOneChoiceScissors.addEventListener(
    'click',
    handlePlayerOneScissorsChoice
  )

  const playerOneChoiceLizard = document.querySelector('.playerOneCard .lizard')
  playerOneChoiceLizard.addEventListener('click', handlePlayerOneLizardChoice)

  const playerOneChoiceSpock = document.querySelector('.playerOneCard .spock')
  playerOneChoiceSpock.addEventListener('click', handlePlayerOneSpockChoice)

  const playerTwoChoiceRock = document.querySelector('.playerTwoCard .rock')
  playerTwoChoiceRock.addEventListener('click', handlePlayerTwoRockChoice)

  const playerTwoChoicePaper = document.querySelector('.playerTwoCard .paper')
  playerTwoChoicePaper.addEventListener('click', handlePlayerTwoPaperChoice)

  const playerTwoChoiceScissors = document.querySelector(
    '.playerTwoCard .scissors'
  )
  playerTwoChoiceScissors.addEventListener(
    'click',
    handlePlayerTwoScissorsChoice
  )

  const playerTwoChoiceLizard = document.querySelector('.playerTwoCard .lizard')
  playerTwoChoiceLizard.addEventListener('click', handlePlayerTwoLizardChoice)

  const playerTwoChoiceSpock = document.querySelector('.playerTwoCard .spock')
  playerTwoChoiceSpock.addEventListener('click', handlePlayerTwoSpockChoice)

  const startGameButton = document.querySelector(
    '.gameButtonsSection .startRound'
  )
  startGameButton.addEventListener('click', handleStartGame)

  const endPlayerOneTurn = document.querySelector(
    '.playerOneCard .endPlayerOneTurn'
  )
  endPlayerOneTurn.addEventListener('click', handlePlayerOneEndTurn)

  const endPlayerTwoTurn = document.querySelector(
    '.playerTwoCard .endPlayerTwoTurn'
  )
  endPlayerTwoTurn.addEventListener('click', handlePlayerTwoEndTurn)

  const restart = document.querySelector('.gameButtonsSection .restart')
  restart.addEventListener('click', handleRestartGame)
}

document.addEventListener('DOMContentLoaded', main)
