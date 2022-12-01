var X= 20; //Assigning global variable
function Add_numbers_1() { //Defining a function
    document.write(35 + X + "<br>"); //Document will display outcome
}
function Add_numbers_2() { //Defining a variable
    document.write(X + 500); //Document will display the outcome
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { //Defining a function
    var Y= 10; //Assigning a local variable
    document.write(10 + Y + "<br>"); //Document will display the outcome
}
function Add_numbers_4() { //Defining a function
    document.write(Y + 25); //Document will not display outcome because of local variable
}
Add_numbers_3();
Add_numbers_4();

if (6 > 3) { //Conditional statement
    document.write("The number on the left is larger than the number on the right.") //If conditional statement is true, document will display message
}

function Add_numbers_3() { //Defining a function
    var Y= 10; //Assigning a variable
    console.log(10 + Y); //Help debug code
}
function Add_numbers_4() { //Defining a function
    console.log(Y + 25); //Help debug code
}
Add_numbers_3();
Add_numbers_4();

function get_Date() { //Defining a function
    if (new Date().getHours() < 18) { //Conditional statement
        document.getElementById("Greeting").innerHTML="How are you today?"; //If statement is true, document will display message
    }
}