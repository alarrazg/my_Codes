let currentInput = '';
let currentResult = '0';
let operator=["+","-","*","/"];
let result="=";

function appendToDisplay(value) {
    document.getElementById('result').value = currentInput;
    if(operator.includes(value))
    {
        calculateResult(value);
    }
    else
    {
        currentInput += value;
    }
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '0';
}

/*function calculateResult() {
    try {
        currentResult = eval(currentInput);
        document.getElementById('result').value = currentResult;
        currentInput = currentResult.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
} */

function calculateResult(oper)
{
    try 
    {
       
    }
    catch (error)
    {
        
    }
}
