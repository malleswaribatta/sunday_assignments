const roverX = 0;
const roverY = 0;
const heading = 0;
const instructions = 32;

// The above input should leave the Mars Rover at 2 2 0
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let xPosition = roverX;
let yPosition = roverY;
let direction = heading;
let reverse = 0;
let instruction = 0;
let number = instructions;

while (number !== 0) {
    instruction = number % 10;
    number = number - instruction;
    reverse = (reverse * 10) + instruction;
    number = number / 10;
}

number = reverse;
instruction = 0;

while (number !== 0) {
    instruction = number % 10;
    number = number - instruction;
    number = number / 10;

    switch(instruction) {
        case 1 :
            if (direction === 0) {
                direction = direction + 3;
            } else {
                direction = direction - 1;
            }
            break;
        case 2 :
            if (direction === 3) {
                direction = direction - 3;
            } else {
                direction = direction + 1;
            } 
            break;
        case 3 :
            if (direction === 1) {
                xPosition = xPosition + 1;
            }
            if (direction === 3) {
                xPosition = xPosition - 1;
            }
            if (direction === 0) {
                yPosition = yPosition + 1;
            }
            if (direction === 2) {
                yPosition = yPosition - 1;
            }

    }
    //  direction = direction === 0 ? direction = direction + 3 : direction = direction - 1;

    // if (instrution === 1) {
    //     if (direction === 0) {
    //         direction = direction + 3;
    //     } else {
    //         direction = direction - 1;
    //     }
    // }

    // if (instrution === 2) {
        // if (direction === 3) {
        //     direction = direction - 3;
        // } else {
        //     direction = direction + 1;
        // } 
    // }

    // if (instrution === 3) {
        // if (direction === 1) {
        //     xPosition = xPosition + 1;
        // }
        // if (direction === 3) {
        //     xPosition = xPosition - 1;
        // }
        // if (direction === 0) {
        //     yPosition = yPosition + 1;
        // }
        // if (direction === 2) {
        //     yPosition = yPosition - 1;
        // }
    // }

}

console.log(xPosition, yPosition, direction);