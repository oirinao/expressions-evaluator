let i;
let output = [];
let stack = [];
let resultStack = [];

function peek(a){
    return a[a.length - 1];
}

function solve(){
    removeZero();
    let infix = input("output");
    //console.log(infix);

    if (infix.length != 0){
        var start = performance.now();
        
        if (validate(infix)){
            let postfix = toPostfix(infix); //transformam din infix in postfix
            console.log(postfix);
    
            let output = calculate(postfix); //calculam expresia data in postfix
            document.getElementById("output").value = output;
            console.log(output);
        }
        
        var end = performance.now();
        var resultTime = (end - start).toFixed(5);

	    let textResult = "Time = " + resultTime + " ms";
	    document.getElementById('result').innerHTML = textResult;
    }
    else {
        alert("Introduce please an expresion");
    }    

}

function input(input){
    let infix = document.getElementById(input).value.replace(/ /g, '')
                .replace(/\++/g, '+')
                .replace(/\-+/g, '-')
                .replace(/\*+/g, '*')
                .replace(/\/+/g, '/')
                .replace(/\-\(+/g, '-1*(');
    console.log("infix", infix);

    return infix;
}

function validate(infix){
    let openCount = 0;
    let closeCount = 0;

    for (let i = 0; i < infix.length; i++) {
        if (infix[i] == '(')
            openCount++;
        else if(infix[i] == ')')
            closeCount++;
    }

    if (openCount != closeCount){
        alert("Error: \nUnequal number of opening and closing paranthesis");
        return 0;
    }
    else
        return 1;
}

function toPostfix(infix){
    output = [];
    stack = [];
    resultStack = [];

    for (i = 0; i < infix.length; i++) {
        if (isNumber(infix)) {
            output.push(getNumberAsString(infix));
        }  
        else if (isOperator(infix)) {
            push(infix[i]); //push to stack
        }
        else if (infix[i] == '(') {
            push(infix[i]);
        }    
        else if (infix[i] == ')') {
            while (peek(stack) != '('){
                output.push(stack.pop());
            }
            stack.pop();
        }
    }
    while (stack.length > 0){
        output.push(stack.pop());
    }

    //console.log(output);
    //console.log(stack);

    return output;
}

function calculate(output){ //coada
    while(output.length > 0) {
        if (!isNaN(parseFloat(output[0]))){ //daca e numar
            let nr = parseFloat(output.shift()); //il stergem din coada
            resultStack.push(nr); //si il adaugam in stiva
        }
        else{
            //efectuam operatia necesara de pe prima pozitie a cozii dintre primele 2 elemente din stiva
            operate(peek(resultStack), output[0], resultStack[resultStack.length - 2]);
            output.shift();
            resultStack.pop();
        }
        
    }
    return resultStack[0];
}

function operate(a, op, b){
    if (op == '+')
		resultStack[resultStack.length - 2] = b + a;
	else if (op == '-')
        resultStack[resultStack.length - 2] = b - a;
	else if (op == '*')
        resultStack[resultStack.length - 2] = b * a;
	else if (op == '/')
        resultStack[resultStack.length - 2] = b / a;
}

function push(temp){
    if (stack.length == 0) {
        stack.push(temp);
    }
    else if(temp == '('){
        stack.push(temp);
    }
    else if(getGrade(temp) > getGrade(peek(stack))){
        stack.push(temp);
    }
    else{
        while(getGrade(peek(stack)) >= getGrade(temp) && stack.length > 0){
            output.push(peek(stack));
            stack.pop();
        }
        push(temp);
    }
        
}

function getGrade(temp){
    if (temp == '-' || temp == '+') {
        return 1;
    }
    else if(temp == '*' || temp == '/'){
        return 2;
    }
    else
        return 0;
}

function getNumberAsString(infix){
    let temp = "";
    let tokens = ['+', '-', '*', '/', '(', ')'];
    
    temp += infix[i];
    i++;

    while (tokens.indexOf(infix[i]) == -1 && i < infix.length ){
        temp += infix[i];
        i++;
    }
    i--;

    return String(temp);
}

function isNumber(infix){
    if (infix[i] >= 0 && infix[i] <= 9) {
        return 1;
    }
    else if ((infix[i] == '-' || infix[i] == '+' && !isNaN(parseFloat(infix[i+1]))) && i == 0){
        return 1;
    }
    else if ((infix[i] == '-' || infix[i] == '+' && !isNaN(parseFloat(infix[i+1]))) && infix[i-1] == '('){
        return 1;
    }
    else
        return 0;
}

function isOperator(infix){
    let ops = ['+', '-', '*', '/'];
    if (ops.indexOf(infix[i] != -1) ) {
        if (!isNaN(parseFloat(infix[i+1]))) {
            return 1;
        }
        else if (infix[i+1] == '(') {
            return 1;
        }
    }
    return 0;
}