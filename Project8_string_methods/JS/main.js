function full_Sentence() { //Defining a function
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence."; //Variables part 1-4 are assigned values
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //Combining parts 1-4 to create whole sentence
    document.getElementById("Concatenate").innerHTML = whole_sentence; //Document will display the concatenated string
}

function slice_Method() { //Defining a function
    var Sentence = "All work and no play makes Johnny a dull boy."; //Assigning a string 
    var Section = Sentence.slice(27,33); //Extracting a section from the string
    document.getElementById("Slice").innerHTML= Section; //Document will display the extracted section
}

function string_Method() { //Defining a function
    var X =182; //Assigning value to variable
    document.getElementById("Numbers_to_string").innerHTML=X.toString(); //Document will return number as a string
}

function precision_Method() { //Defining a function
    var X= 12938.3012987376112; //Assigning a value
    document.getElementById("Precision").innerHTML=X.toPrecision(10); //Document will display the specified length of number value
}