function my_Dictionary() { //Defined and named function
    var Animal = { //Assigned key values to key variables
        Species:"Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound; //Delete statement will remove key
    document.getElementById("Dictionary").innerHTML= Animal.Sound; //Display value that is selected
}