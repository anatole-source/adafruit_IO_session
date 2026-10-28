
//store adafruitio credentials
let userName = "anatoele";
let apiKey = "";

//we create an IO object
const IO = new AdafruitIO(userName, apiKey);

//we target the html elements
let colorPicker = document.querySelector("#colorInput")
let colorButton = document.querySelector("#colorButton")



//we listen to the click on the button
colorButton.addEventListener("click", function(){
//we can get the value of the color input
let newColor = colorPicker.value;

console.log(newColor);
IO.postData("color", newColor);


})

