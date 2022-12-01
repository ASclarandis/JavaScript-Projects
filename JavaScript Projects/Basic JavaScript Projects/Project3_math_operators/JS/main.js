function addition_Function() { //Defined and named function
    var addition = 5 + 2; //Assigned number values and addition operation to variable
    document.getElementById("Add").innerHTML="5 + 2 = "+ addition; //Document will display the outcome of the operation
}

function subtraction_Function() { //Defined and named function
    var Subtraction = 6- 1; //Assigned number values and subtraction operation to variable
    document.getElementById("Minus").innerHTML="6 - 1 =" + Subtraction; //Document will display the outcome of the operation
}

function multiplication() { //Defined and named function
    var simple_Math=10 * 7; //Assigned number values and multiplication operation to variable
    document.getElementById("Multiply").innerHTML="10 x 7 = "+simple_Math; //Document will display the outcome of the operation
}

function division() { //Defined and named function
    var simple_Math= 99 / 9; //Assigned number values and division operation to variable
    document.getElementById("Division").innerHTML= "48 / 6 = " +simple_Math; //Document will display the outcome of the operation
}

function more_Math() { //Defined and named function
    var simple_Math=(2 + 4) * 12 / 2 - 8; //Assigned number values and multiple operations to variable
    document.getElementById("moreMath").innerHTML="1 plus 4, multiplied by 12, divided in half and then subtracted by 8 equals "+ simple_Math; //Document will display the outcome of the operation
}

function modulus_Operator() { //Defined and named function
    var simple_Math=84 % 8; //Assigned number values and modulus operation to variable
    document.getElementById("Modulus").innerHTML="When you divide 84 by 8 you have a remainder of: "+ simple_Math; //Document will display the outcome of the operation
}

function negation_Operator() { //Defined and named function
    var x=100; //Assigned number value to variable
    document.getElementById("Negation").innerHTML= -x; //Document will display the outcome of the operation
}

function increment_Operator() { //Defined and named function
    var X=9; //Assigned number value to variable
    X++; //Increment will count one step up
    document.write(X); //Document will display the outcome of the operation
}

function decrement_Operator() { //Defined and named function
    var X=14; //Assigned number value to variable
    X--; //Decrement will decrease amount one step down
    document.write(X); //Document will display the outcome of the operation
}

window.alert(Math.random()*100); //Alert window will pop up on document displaying a random number