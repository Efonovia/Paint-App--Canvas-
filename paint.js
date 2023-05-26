const rectButton = document.querySelector('.rect')
const circleButton = document.querySelector('.circle')
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1200
canvas.height = 500
const width = canvas.width 
const height = canvas.height 
let rectMode = false
let circleMode = false
let canvasON = false
let newRect
let newCircle
let startX
let startY
let rectArr = []
let circleArr = []

console.log(width, height)
rectButton.addEventListener('click', () => {
    rectMode = true
    rectButton.style.backgroundColor = 'white'
})

circleButton.addEventListener('click', () => {
    circleMode = true
    circleButton.style.backgroundColor = 'white'
})


rectArr.forEach(rect => {
    rect.addEventListener('click', () => {})
})

circleArr.forEach(circle => {
    circle.addEventListener('click', () => {})
})


setInterval(() => {
    c.clearRect(0, 0, width, height)
    canvas.addEventListener('mousedown', e => {
        canvasON = true
        startX = e.offsetX
        startY = e.offsetY
    })

    canvas.addEventListener('mouseup', () => {
        canvasON = false
    })

    canvas.addEventListener('mousemove', e => {
        if(canvasON) {
            c.beginPath()
            c.fillStyle = "orange"
            c.fillRect(startX, startY, e.offsetX - startX, e.offsetY - startY)
            c.fill()
            console.log(startX, startY, e.offsetX - startX, e.offsetY - startY)
            // console.log(e.offsetX, e.offsetY)
        }
    })
}, 1)


