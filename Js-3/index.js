// ODD AND EVEN NUMBS

for (let x = 1; x <= 100; x++) {
    if (x % 2 === 0) {  // check if number is even
        process.stdout.write(x + ' ');
    }
}
console.log();

for (let x = 1; x <= 100; x++) {
    if (x % 2 !== 0) {  // check if number is odd
        process.stdout.write(x + ' ');
    }
}
console.log(); 

// Dynamic_Table