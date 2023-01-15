input.onButtonPressed(Button.A, function () {
    scrollbit.clear()
    scrollbit.scrollText("I{Heart}you!", 64, 50)
    scrollbit.show()
})
input.onButtonPressed(Button.B, function () {
    scrollbit.clear()
    Linie2(0, 0, 16, 0)
    Linie2(16, 1, 16, 6)
    Linie2(15, 6, 0, 6)
    Linie2(0, 5, 0, 1)
    Linie2(1, 1, 15, 5)
    Linie2(1, 5, 15, 1)
})
function Linie2 (x0: number, y0: number, x1: number, y1: number) {
    x = x0
    y = y0
    dx = Math.abs(x1 - x0)
    dy = -1 * Math.abs(y1 - y0)
    if (x0 < x1) {
        sx = 1
    } else {
        sx = -1
    }
    if (y0 < y1) {
        sy = 1
    } else {
        sy = -1
    }
    err = dx + dy
    while (true) {
        scrollbit.setPixel(x, y, 64)
        if (x == x1 && y == y1) {
            break;
        }
        e2 = 2 * err
        if (e2 > dy) {
            err += dy
            x += sx
        }
        if (e2 < dx) {
            err += dx
            y += sy
        }
    }
    scrollbit.show()
}
let e2 = 0
let err = 0
let sy = 0
let sx = 0
let dy = 0
let dx = 0
let y = 0
let x = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
scrollbit.clear()
scrollbit.show()
