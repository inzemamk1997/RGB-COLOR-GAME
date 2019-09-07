var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDispay = document.querySelector("#message"); 
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
})
hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
})
resetButton.addEventListener("click",function(){
   //generate all new colors
   //pick a new random color from array
   //change colors of squares
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   this.textContent = "NEW COLORS";
   //changed colorDisplay to match picked color
   colorDisplay.textContent = pickedColor;
   messageDispay.textContent = "";
   for(var i=0; i<squares.length; i++){
       squares[i].style.backgroundColor = colors[i];
   }
   h1.style.backgroundColor = "steelblue";
})

for(var i = 0; i<squares.length; i++){
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listener to squares
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            resetButton.textContent = "Play Again ?";
            h1.style.backgroundColor = pickedColor;
            messageDispay.textContent = "Correct!";
            changeColors(clickedColor);
        }else{    
            this.style.backgroundColor = "#232323";
            messageDispay.textContent = "Try Again";
        }
    });
}
function changeColors(color){
//loop through all squares
//change color of each squares to match the background color
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    //Pick Random Color using Math.floor(Math.random());
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //make an array
    var arr = []
    //add random colors to the array
    for(var i = 0; i < num; i++){
        //get random color and push into the array
        arr.push(randomColor());
    }
    //return the array
    return arr;
}
function randomColor(){
    //pick Red(0-255),Green(0-255),Blue(0-255)
    var r = Math.floor(Math.random() * 256); 
    var g = Math.floor(Math.random() * 256); 
    var b = Math.floor(Math.random() * 256); 
    return "rgb(" + r + ", "+ g + ", " + b + ")";
}