// 
input.onGesture(Gesture.Shake, function () {
    roll = randint(1, 6)
    // Jack,
    // You are probably seeing that your die always displays a value of 1.
    // 
    // Think for a moment about why that might be.
    // 
    // In your if/then statement, the first condition is checking IF 1 = 1. That is ALWAYS going to be true. Therefore the other "ELSE" branches are never going to run.
    // 
    // In each condition, you should be checking the value of the variable "roll" against each of the possible numbers.
    if (1 == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (2 == 2) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    } else if (3 == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    } else if (4 == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (5 == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
})
/**
 * Code added here will run once when the program starts
 */
let roll = 0
basic.showString("Shake to roll the dice")
