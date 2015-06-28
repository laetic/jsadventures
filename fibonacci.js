"use strict";

//Keeps the HTML clean
function fibonacciHandler()
{
    var n = document.getElementById('fibInput').value;
    document.getElementById('fibOutput').innerHTML = ("The " + n + getOrdinal(n) + " fibonacci number is " + fibonacci(n));
    return 0;
}

//Recursive function for calculating the nth fibonacci number
//Will probably lock up your browser if you put in values > 40 or so
function recfibonacci(n)
{

    if (n <= 2)
    {
	return 1;
    }
    
    else
    {
	n--;
	return (fibonacci(n) + fibonacci(n-1));
    }
}

//non-recursive fibonacci using arrays; more robust
function fibonacci(max)
{
    max--; //arrays in javascript are 0-based
    var fibonacci = [1, 1] //the first two terms are defined

    for(var i = 1; i < max; i++)
    {
	var n = fibonacci[i] + fibonacci[i-1];
	fibonacci.push(n);
    }

    return fibonacci[fibonacci.length-1];
}

//Simple switch to return the proper ordinal suffix for a nicer output
function getOrdinal(n)
{
    if(n >= 10 && n<= 20)
	return "th";

    var m = n.toString();
    switch(m.charAt(m.length-1))
    {

    case "1":
	return "st";
	break;
    case "2":
	return "nd";
	break;
    case "3":
	return "rd";
	break;
    default:
	return "th";
	break;
    }
}

//So the user can press enter instead of clicking on the button
document.getElementById('fibInput').onkeydown = function(e)
{
    if(e.keyCode == 13)
    {
	fibonacciHandler();
	return 0;
    }
}
