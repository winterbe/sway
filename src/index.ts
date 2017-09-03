const canvas = document.getElementById("canvas") as HTMLCanvasElement
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext("2d")
ctx.fillStyle = '#D8D8D8'
ctx.fillRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = "#333"
ctx.font = "32px 'Courier New'"
ctx.fillText("Hi there! 🚔", 100, 100)