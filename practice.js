function getSum(a, b) {
    return a + b;
}

function isSquare(num) {
    return Math.sqrt(num);
}

function greeting(firstName, lastName, age) {
    return `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
}

function getMin(x, y, z) {
    return Math.min(x, y, z);
}

function evenOrOdd(a, b, c) {
    if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) return 'even';
    else if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) return 'odd';
    else return 'even/odd';
}

function inOrOutRange(x, y, num) {
    return num >= x && num <= y ? 'In range' : 'Out of range';
}

function createString(min, max, step) {
    let result = '';
    for (let i = min; i <= max; i += step) {
        result += i + ' ';
    }
    return result.trim();
}

function rangeSum1(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
        for (let j = start; j <= end; j++) {
        sum += j;
        }
    }
    return sum;
}

function rangeSum2(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

function seriesSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / (i * i);
    }
    return sum.toFixed(2);
}

function countDigits(num) {
    return num.toString().length;
}
