
var randomNumber1 =  Math.floor(1+(6*Math.random())) ; //1-6
var randomNumber2 =  Math.floor(1+(6*Math.random())) ;

var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 ==randomNumber2) {
  
  document.querySelector("h1").innerHTML = "Draw!";
  
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
