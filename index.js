var im1=Math.floor(Math.random()*6) +1;
var s1="images/dice"+im1+".png";
document.querySelectorAll("img")[0].setAttribute("src",s1);

var im2=Math.floor(Math.random()*6) +1;
var s2="images/dice"+im2+".png";
document.querySelectorAll("img")[1].setAttribute("src",s2);

if(im1>im2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(im2>im1){
  document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="TIE";
}
