function fordelete(){
    let output = document.getElementById("output").value;
    document.getElementById("output").value = output.substr(0, output.length - 1);

    let textResult = "Time = 0.00 ms";
	document.getElementById('result').innerHTML = textResult;
}

function forclear(){
    document.getElementById("output").value = "0";

    let textResult = "Time = 0.00 ms";
	document.getElementById('result').innerHTML = textResult;
}

function removeZero() {
    var value = document.getElementById("output").value;
    if (value == "0") {
         value = " "
         document.getElementById("output").value = value;
    }
}

function fordisplay(value) {
    removeZero();
    document.getElementById("output").value += value;
}

var outputSelector  = document.getElementById("output");
outputSelector.addEventListener("keyup", function (event) {
    var char = String.fromCharCode(event.which).toLocaleLowerCase();
    var acceptedTokens = "+-*/√()1234567890. "

    var text = outputSelector.value;
    for (let i = 0; i < text.length; i++) {
        if (acceptedTokens.indexOf(text[i]) == -1) {
            text = text.replace(text[i], '');
        }
    }
    outputSelector.value = text;
})

addEventListener("keyup", function(event) {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 13:
            document.getElementById("r5-3").click();
            break;
        default:
            break;
    }
});

// addEventListener("keyup", function(event) {
//     console.log(event.keyCode);
//     switch (event.keyCode) {
//         case 13:
//             document.getElementById("myBtn").click();
//             break;
//         case 67: case 99:
//             document.getElementById("r1-1").click();
//             break;
//         case 47:
//             document.getElementById("r1-2").click();
//             break;
//         case 56: case 106:
//             document.getElementById("r1-3").click();
//             break;
//         case 8:
//             document.getElementById("r1-4").click();
//             break;
//         case 55:
//             document.getElementById("r2-1").click();
//             break;
//         case 56:
//             document.getElementById("r2-2").click();
//             break;
//         case 57:
//             document.getElementById("r2-3").click();
//             break;
//         case 109: case 189:
//             document.getElementById("r2-4").click();
//             break;
//         case 52:
//             document.getElementById("r3-1").click();
//             break;
//         case 53:
//             document.getElementById("r3-2").click();
//             break;
//         case 54:
//             document.getElementById("r3-3").click();
//             break;
//         case 107: case 187:
//             document.getElementById("r3-4").click();
//             break;
//         case 49:
//             document.getElementById("r4-1").click();
//             break;
//         case 50:
//             document.getElementById("r4-2").click();
//             break;
//         case 51:
//             document.getElementById("r4-3").click();
//             break;
//         case 37:
//             document.getElementById("r5-1").click();
//             break;
//         case 48:
//             document.getElementById("r5-2").click();
//             break;
//         case 46:
//             document.getElementById("r5-3").click();
//             break;

//         default:
//             break;
//     }
// });