
var n1 =  Math.floor(1+(6*Math.random())) ; //1-6
var n2 =  Math.floor(1+(6*Math.random())) ;

var randomImageSource1 = "images/dice" + n1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomImageSource2 = "images/dice" + n2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (n1 ==n2) {
  
  document.querySelector("h1").innerHTML = "Draw!";
  
}
else if (n2 > n1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
