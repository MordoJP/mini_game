const board = document.querySelector('#board')
const colors = ['#0090c2', '#7b7978', '#417a00', '#e6b759', '#f63864', '#b9507f']
const SQUARES_NUMBER = 1056

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(evt) {
    const element = evt.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (evt) {
    const element = evt.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #1d1d1d'
}

function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)]
}
