function Vote_Function() { //Defining a function
    var Age, Can_Vote; //Assigning value to variable
    Age= document.getElementById("Age").value; // Where to get data from
    Can_Vote = (Age < 18) ? "You are too young to vote":"You are eligible to vote!"; //Comparing if value is more than or less than to determine the return
    document.getElementById("Vote").innerHTML = Can_Vote; //Displays the return
}

function Dog(Breed, Weight, Color, Age) { //Defining and naming a constructor function
    this.Dog_Breed= Breed; 
    this.Dog_Weight= Weight;
    this.Dog_Color= Color;
    this.Dog_Age= Age; // Assigning different categories in the function
}
var Appa = new Dog("American Eskimo", "25 lbs", "White", "6 years old");
var Lily = new Dog("Maltese and Toy Poodle", "10lbs", "White", "9 years old");
var Sophie = new Dog("Golden Retriever", "70 lbs", "Golden Brown", "12 years old"); //Assigning values to the variables
function myFunction() {
    document.getElementById("New_and_This").innerHTML=
    "Appa is a " + Appa.Dog_Color + " " + Appa.Dog_Breed + " who is " + Appa.Dog_Age // This will display results of the constructor function
}

function count_Function() { //Defining and naming a function
    document.getElementById("Nested_Function").innerHTML= Count();
    function Count() { 
        var Starting_point = 13; //Assigning value to the variable
        function Plus_one() {Starting_point += 8;} //Nested function
        Plus_one();
        return Starting_point;
    }
}