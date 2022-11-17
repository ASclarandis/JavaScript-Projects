function myFunction() { //Defining and naming a function
    var sentence ="My favorite color"; //Assigning a string value to a variable
    sentence += " is pink!"; //Using += to concatenate string values
    document.getElementById("Concatenate").innerHTML= sentence; //Document will display different text
    document.getElementById("Concatenate").style.color="pink"; //Document will display different color
}