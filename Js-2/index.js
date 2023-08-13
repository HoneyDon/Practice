// ADDITION__

const addthreenumbers = (num1, num2, num3) => {
    try {
        return (num1 + num2 + num3);
    } catch (error) {
        return error.messagge
    }
}

console.log(addthreenumbers(44, 23, 7));

// SUBTRACTION__

const subtractthreenumbers = (num1, num2, num3) => {
    try {
        return (num1 - num2 - num3);
    } catch (error) {
        return error.messagge
    }
}

console.log(subtractthreenumbers(40, 22, 1));

// MULTIPLICATION__

const multiplythreenumbers = (num1, num2, num3) => {
    try {
        return (num1 * num2 * num3);
    } catch (error) {
        return error.messagge
    }
}

console.log(multiplythreenumbers(11, 6, 2));

// DIVISION__

const dividethreenumbers = (num1, num2, num3) => {
    try {
        return (num1 / num2 / num3);
    } catch (error) {
        return error.messagge
    }
}

console.log(dividethreenumbers(1000,50,5));

// ODD OR EVEN__

const oddoreven = (num1) => {
    try {
        if (num1 % 2 === 0) {
            return `${num1} is even`
        } else {
            return `${num1} is odd`
        }
    } catch (error) {
        return error.messagge
    }
}

console.log(oddoreven(80));
console.log(oddoreven(21));

// SQUARES__

const squares = (num1) => {
    try {
        return (num1 * num1);
    } catch (error) {
        return error.messagge
    }
}

console.log(squares(9));

// SQUARE ROOT__

const squareroot = (num1) => {
    try {
        return (Math.sqrt(num1));
    } catch (error) {
        return error.messagge
    }
}

console.log(squareroot(81));

// CUBE__

const cube = (num1) => {
    try {
        return (num1 * num1 * num1);
    } catch (error) {
        return error.messagge
    }
}

console.log(cube(3));

// CUBE ROOT__

const cuberoot = (num1) => {
    try {
        return (Math.cbrt(num1));
    } catch (error) {
        return error.messagge
    }
}

console.log(cuberoot(27));

// NTH NUMBER__

const nthterm = (n) => {
    try {
        return (n * 2 + 1);
    } catch (error) {
        return error.messagge
    }
}

console.log(nthterm(5));

// NTH ROOT__

const nthroot = (n) => {
    try {
        return (Math.pow(n, 1 / n));
    } catch (error) {
        return error.messagge
    }
}

console.log(nthroot(10));


// Calculator__

const calculator = (num1, num2, num3, operator) => {
    const operators = {
        '+' : num1 + num2 + num3,
        '-' : num1 - num2 - num3,
        '*' : num1 * num2 * num3,
        '/' : num1 / num2 / num3,
        '%' : num1 % num2 % num3,
    };
    return operators[operator] || 'Please enter a valid operator'
}

console.log(calculator(3, 4, 5, '+'));
console.log(calculator(3, 4, 10, '-'));
console.log(calculator(1, 4, 2, '*'));
console.log(calculator(10, 2, 5, '/'));


