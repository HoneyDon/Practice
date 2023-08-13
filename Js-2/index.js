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