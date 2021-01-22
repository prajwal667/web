var output=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var random1=Math.floor(Math.random()*6)+1;
var rm1="dice"+random1+".png";
var random2=Math.floor(Math.random()*6)+1;
var rm2="dice"+random2+".png";
var player1=document.querySelector(".img1");
player1.setAttribute("src",rm1);
var player2=document.querySelector(".img2").setAttribute("src",rm2);
if(random1>random2)
{
document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(random1<random2)
{
    var t1=document.querySelector("h1");
    t1.innerHTML="Player2 win";

}
else if(random1===random2){
    var t3=document.querySelector("h1");
    t3.innerHTML="Draw!";
}