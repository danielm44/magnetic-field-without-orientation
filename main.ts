datalogger.onLogFull(function () {
    logging = false
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    logging = !(false)
    ori = 1
    posx += 1
    if (logging) {
        basic.clearScreen()
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
    } else {
        basic.clearScreen()
    }
    if (posx == 6) {
        basic.showString("B")
    }
})
input.onButtonPressed(Button.AB, function () {
    logging = false
    datalogger.deleteLog(datalogger.DeleteType.Fast)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.B, function () {
    logging = false
    posx = 0
    posy += 1
    basic.showString("y = ")
    basic.showString("" + (posy))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    logging = false
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
})
let ori = 0
let posy = 0
let posx = 0
let logging = false
basic.showString("A")
logging = false
posx = 0
posy = 1
loops.everyInterval(100, function () {
    if (logging) {
        datalogger.logData([
        datalogger.createCV("x", input.magneticForce(Dimension.X)),
        datalogger.createCV("y", input.magneticForce(Dimension.Y)),
        datalogger.createCV("z", input.magneticForce(Dimension.Z)),
        datalogger.createCV("strength", input.magneticForce(Dimension.Strength)),
        datalogger.createCV("posx", posx),
        datalogger.createCV("posy", posy)
        ])
    }
})
