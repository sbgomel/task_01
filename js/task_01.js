// Sum // (1, 2) = 3
function Sum(num1, num2) {
    return num1 + num2;
}

document.write("<p>Sum (1, 2) = 3, result: " + Sum(1, 2) + "</p>");


// Sub // (2, 1) = 1
function Sub(num1, num2) {
    return num1 - num2;
}

document.write("<p>Sub (2, 1) = 1, result: " + Sub(2, 1) + "</p>");

// Mul // (5, 3) = 15
function Mul(num1, num2) {
    return num1 * num2;
}

document.write("<p>Mul (5, 3) = 15, result: " + Mul(5, 3) + "</p>");

// Percent // (10, 5) = 0.5
function Percent(num1, num2) {
    return num1 / 100 * num2;
}

document.write("<p>Percent (10, 5) = 0.5, result: " + Percent(10, 5) + "</p>");

// Div // (1, 2) = 0.5
function Div(num1, num2) {
    return num1 / num2;
}

document.write("<p>Div (1, 2) = 0.5, result: " + Div(1, 2) + "</p>");

// IntegerDiv // (9, 2) = 4
function IntegerDiv(num1, num2) {
    return Math.floor(num1 / num2);
}

document.write("<p>IntegerDiv (9, 2) = 4, result: " + IntegerDiv(9, 2) + "</p>");

// Abs // (-1) = 1
function Abs(num1) {
    return Math.abs(num1);
}

document.write("<p>Abs (-1) = 1, result: " + Abs(-1) + "</p>");

// Sqr // (2) = 4				???
function Sqr(num1) {
    return Math.sqrt(num1);
}

document.write("<p>Sqr (2) = 4, result: " + Sqr(2) + "</p>");

//Factorial // (3) = 6
function Factorial(num) {
    return (num != 1) ? num * Factorial(num - 1) : 1;
}

document.write("<p>Factorial (3) = 6, result: " + Factorial(3) + "</p>");

//Round // (3.6) = 4
function Round(num) {
    return Math.round(num);
}

document.write("<p>Round (3.6) = 4, result: " + Round(3.6) + "</p>");

//Sin // (0.5) = ~0.479
function Sin(num) {
    return Math.sin(num);
}

document.write("<p>Sin (0.5) = ~0.479, result: " + Sin(0.5) + "</p>");

//Cos // (0.5) = ~0.877
function Cos(num) {
    return Math.cos(num);
}

document.write("<p>Cos (0.5) = ~0.877, result: " + Cos(0.5) + "</p>");

//Tg // (0.5) = ~0.546
function Tg(num) {
    return Math.tan(num);
}

document.write("<p>Tg (0.5) = ~0.546, result: " + Tg(0.5) + "</p>");

//Ctg // (0.5) = 1.83
function Ctg(num) {
    return 1 / Tg(num);
}

document.write("<p>Ctg (0.5) = 1.83, result: " + Ctg(0.5) + "</p>");