let currentInput = '';
let acumulador=0;
let i=0;
let cadena=[];
const operators=["+","-","*","/","%","="];

const digit=document.querySelectorAll(".digit");
digit.forEach((dig) => {
	dig.addEventListener("click", (e) => {
		appendToDisplay(dig.value);
		if(dig.value=="")
		{
			clearDisplay();
		}
	})
});

const operator=document.querySelectorAll(".operator");
operator.forEach((op) => {
	op.addEventListener("click", (e) => {
		appendToDisplay(op.value);
		if(op.value=="=")
		{
			calculateResult();
		}
	})
});

function appendToDisplay(value) 
{
	console.log("value:",value);
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
	i=0;
	document.getElementById('result').value = '0';
	cadena=[];
}

function calculateResult()
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
	mostrarResult(acumulador);
	cadena=[];
	console.log(cadena);
	currentInput='';
	j=0;
	i=0;
}

function mostrarResult(res)
{
	console.log(res);
	document.getElementById('result').value=res;
}
