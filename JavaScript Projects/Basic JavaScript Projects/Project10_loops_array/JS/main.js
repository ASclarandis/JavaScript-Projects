function count_To_Ten() { //Defining a function
    var Digit= "";
    var X= 1; //Assigning values to variables
    while (X < 11) { //While loop
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML= Digit; //Display numbers 1-10
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //Values of variable
var Content = "";
var Y;
function for_Loop() { //Defining a function
    for (Y=0; Y < Instruments.length; Y++) { //For loop
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML= Content; //Document will display a list of instruments
}

function array_Function() {  //Defining a function
    var Cat_Picture = [];
    Cat_Picture[0]="sleeping";
    Cat_Picture[1]="playing";
    Cat_Picture[2]="eating";
    Cat_Picture[3]="purring"; //Array of values of the variable
    document.getElementById("Array").innerHTML="In this picture, the cat is "  //Document will display the selected valur from the array
    + Cat_Picture[2] + ".";
}

let car = { //Assigned variable
    make: "Dodge ",
    model: "Viper ",
    year: "2021",
    color: "red ", //Various properties of the variable
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML= car.description(); //Document will display the properties of the variable
