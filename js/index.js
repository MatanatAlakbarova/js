while (true) {
    let x, y, operator;
    x = prompt("Enter a number")
    operator = prompt("Enter operator")
    y = prompt("Enter another number")
    switch (operator) {
        case "+":
            function Sum(x, y) {
                let result = Number(x) + Number(y);
                alert("Sum: " + result);
            }
            Sum(x, y);
            break;
        case "-":
            function Diffirence(x, y) {
                let result = Number(x) - Number(y);
                alert("Difference: " + result);
            }
            Diffirence(x, y);
            break;
        case "*":
            function Multiply(x, y) {
                let result = Number(x) * Number(y);
                alert("Multiply: " + result);
            }
            Multiply(x, y);
            break;
        case "/":
            function Divide(x, y) {
                let result = Number(x) / Number(y);
                alert("Divide: " + result);
            }
            Divide(x, y);
            break;
    }
}