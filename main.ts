input.onButtonPressed(Button.B, function () {
    scrollbit.clear()
    Linie2(1, 1, 1, 1)
    Linie2(1, 1, 1, 1)
    Linie2(1, 1, 1, 1)
    Linie2(1, 1, 1, 1)
    Linie2(1, 1, 1, 1)
    Linie2(1, 1, 1, 1)
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
basic.forever(function () {
    scrollbit.setPixel(0, 0, 128)
})
