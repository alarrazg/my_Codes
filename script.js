let currentInput = '';
let currentResult=0;
let acumulador=0;
let i=0;
let cadena=[];
const operators=["+","-","*","/","%","="];

function appendToDisplay(value) 
{
    if(operators.includes(value)==false)
    {
        currentInput+=value;
        console.log('Input',currentInput);
        document.getElementById("result").value=currentInput;
        currentInput=document.getElementById("result").value;
        console.log('Input',currentInput);
    }
    else if(value!='=')
        {
            if(currentInput!=='')
            {
            cadena[i]=currentInput;
            cadena[i+1]=value;
            document.getElementById("result").value=value;
            currentInput='';
            i+=2;
            }
            else
            {
                currentInput=document.getElementById("result").value;
                cadena[i]=currentInput;
                cadena[i+1]=value;
                currentInput='';
                i+=2;
            }
        }
    console.log(cadena);
}

function clearDisplay() {
    currentInput = '';
    currentResult=0;
    i=0;
    document.getElementById('result').value = '0';
    cadena=[];
}

function calculateResult()
{
    try 
    {
        cadena[i]=currentInput;
        //console.log(cadena);
        for(j=0;j<cadena.length;j++)
        {
            if(cadena[j]==='')
            {
                cadena[j]=0;
            }
        }
        //console.log(cadena);
        for(let j=0;j<cadena.length;j++)
        {
   
            element=cadena[j];

            if(isNaN(element)==false)
            {
                acumulador=parseFloat(element);
            }
            switch (element)
            {
                case '+':
                    acumulador+=parseFloat(cadena[j+1]);
                    j+=1;
                    console.log(acumulador);
                    break;
                case '-':
                    acumulador-=parseFloat(cadena[j+1]);
                    j+=1;
                    console.log(acumulador);
                    break;
                case '*':
                    acumulador*=parseFloat(cadena[j+1]);
                    j+=1;
                    console.log(acumulador);
                    break;
                case '/':
                    acumulador/=parseFloat(cadena[j+1]);
                    j+=1;
                    console.log(acumulador);
                    break;
                case '%':
                    console.log('1:',acumulador);
                    acumulador=(acumulador*parseFloat(cadena[j+1]))/100;
                    j+=1;
                    break;
            }
        }
        console.log(cadena);
        //document.getElementById('result').value=acumulador;
        mostrarResult(acumulador);
        cadena=[];
        console.log(cadena);
        currentInput='';
        j=0;
        i=0;
    }
    catch (error)
    {
        document.getElementById('result').value='Error';
    }
}

function mostrarResult(res)
{
    console.log(res);
    document.getElementById('result').value=res;
}
