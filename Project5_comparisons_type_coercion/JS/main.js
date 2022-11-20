document.write(typeof "Word"); //TypeOf determines the type of data being given

document.write("45" + 8); //Coersion will combine different types of data

document.write((10+15)==25); //Double equal signs compare if the data on the left and right of the symbols are equal or not.

X=18;
Y="Eighteen"; //Assigned values to X and Y
document.write(X===Y); ///Triple equal signs compare if data value and type are equal or not.

document.write(5>4); //Comparing if 5 is greater than 4

document.write(5<4); //Comparing is 5 is less than 4

document.write(6>3 && 7<10); //&& determines if both comparisons are true in order to return "true".

document.write(4<5 || 12>10); //|| only needs one comparison to be true to return "true".

function not_Function() {
    document.getElementById("Not").innerHTML=!(6>12); //Not operator (!) returns "true" if comparison is false, returns "false" if comparison is true
}