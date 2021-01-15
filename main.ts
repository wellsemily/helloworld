input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        `)
    basic.showString("HEY!")
    basic.showIcon(IconNames.Surprised)
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
