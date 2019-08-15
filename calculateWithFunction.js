// function zero(a) {
//     if (!a) {
//         return 0
//     } else {
//         return operator(0, a[0], a[1])
//     }

// }
// function one(a) {
//     if (!a) {
//         return 1
//     } else {
//         return operator(1, a[0], a[1])
//     }
// }
// function two(a) {
//     if (!a) {
//         return 2
//     } else {
//         return operator(2, a[0], a[1])
//     }
// }function three(a) {
//     if (!a) {
//         return 3
//     } else {
//         return operator(3, a[0], a[1])
//     }
// }
// function four(a) {
//     if (!a) {
//         return 4
//     } else {
//         return operator(4, a[0], a[1])
//     }
// }
// function five(a) {
//     if (!a) {
//         return 5
//     } else {
//         return operator(5, a[0], a[1])
//     }
// }


// function six(a) {
//     if (!a) {
//         return 6
//     } else {
//         return operator(6, a[0], a[1])
//     }
// }
// function seven(a) {
//     var result = 0
//     if (!a) {
//         return 7
//     } else {
//         return operator(7, a[0], a[1])
//     }
// }
// function eight(a) {
//     if (!a) {
//         return 8
//     } else {
//     return operator(8, a[0], a[1])
//     }
// }
// function nine(a) {
//     if (!a) {
//         return 9
//     } else {
//         return operator(9, a[0], a[1])
//     }
// }

// function plus(num2) {
//     return ['+', num2]
// }
// function minus(num2) {
//     return ['-', num2]
// }
// function times(num2) {
//     return ['*', num2]
// }
// function dividedBy(num2) {
//     return ['/', num2]
// }

// function operator(num1, op, num2) {
//     if (op === '+') {return num1+num2} 
//     else if (op === '-') {return num1-num2}
//     else if (op === '*') {return num1*num2}
//     else if (op === '/') {return Math.floor(num1/num2)}
// }

// =================== cara ke-2 =======================

function zero(input = '') {

    return Math.round(eval('0' + input))

}


function one(input = '') {

    return eval('1' + input)

}


function two(input = '') {

    return eval('2' + input)

}


function three(input = '') {

    return eval('3' + input)

}


function four(input = '') {

    return eval('4' + input)

}



function five(input = '') {

    return Math.round(eval('5' + input))

}


function six(input = '') {

    return eval('6' + input)

}


function seven(input = '') {

    return eval('7' + input)

}


function eight(input = '') {

    return eval('8' + input)

}


function nine(input = '') {

    return eval('9' + input)

}
function plus(num) {

    return '+' + String(num)

}

function minus(num) {

    return '-' + String(num)

}

function times(num) {

    return '*' + String(num)

}

function dividedBy(num) {

    return '/' + String(num)

}


console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(five(dividedBy(two())), 3);
