l̥var r1 = Math.floor(Math.random()*6)+1;
r1_image = "images/dice"+r1+".png";
document.querySelectorAll("img")[0].setAttribute("src",r1_image);

var r2 = Math.floor(Math.random()*6)+1;
r2_image = "images/dice"+r2+".png";
document.querySelectorAll("img")[1].setAttribute("src",r2_image);

if (r1>r2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (r2>r1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}