const canvas = document.getElementById("canvas") as HTMLCanvasElement
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext("2d")

const car = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    vx: 3,
    vy: 3,
    draw() {
        ctx.save()
        ctx.fillStyle = "#333"
        ctx.font = "48px 'Courier New'"
        ctx.translate(this.x, this.y)
        ctx.fillText("⚽️", 0, 0)
        ctx.restore()
    }
}

function clear() {
    ctx.save()
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#D8D8D8'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.restore()
}

function draw() {
    if (car.x > canvas.width - 48 || car.x < 0) {
        car.vx = -car.vx
    }
    if (car.y > canvas.height || car.y < 48) {
        car.vy = -car.vy
    }
    clear()
    car.draw()
    car.x += car.vx
    car.y += car.vy
    window.requestAnimationFrame(draw);
}

draw()