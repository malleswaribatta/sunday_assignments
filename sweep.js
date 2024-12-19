// Do not rename minefield, use it as input for your program.
const minefield = "-*---\n---*-\n*----\n-*---";

// Clear the mines one by one, always choosing the mine closest to the top left hand corner
// See the README for more details
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let index = 0;
let range = "";
let string = "";
//console.log(minefield);

for (let column = 0; column < minefield.length; column++) {
    let row = 0;
    while (minefield[index] !== "\n" && index < minefield.length) {
        //string += minefield[j];
        if (minefield[index] === "*") {
            console.log(column, row);
            range = range + (column + row);
            console.log(range);
        }
        //string = range + string;
        index++;
        //console.log(minefield[j]);
        row++;
        // console.log(string);
        // string = "";
    }
    index++;
}

// let min = 0;
// let temp = "";

// for(let i = 0; i < range.length; i++) {
//     for (let j = i + 1; j < range.length; j++) {
//         if (range[i] > range[j]) {
//             temp += range[i];
//             range[i] = "";
//             range[i] += range[j];
//             range[j] = "";
//             range[j] += temp;
//             temp = "";
//         }    
//     }   
// }
// min = range[i];
// console.log(min);