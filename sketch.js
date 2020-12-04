var database, position;
var form, player, rank, game, gameState=0, playerCount, distance=0, allPlayers;
var car1, car2, car3, car4, cars;
var car1image, car2image, car3image, car4image, trackimage;
function preload(){
car1image=loadImage("car1.png");
car2image=loadImage("car2.png");
car3image=loadImage("car3.png");
car4image=loadImage("car4.png");
trackimage=loadImage("track.jpg");
}
function setup(){
createCanvas(displayWidth-20,displayHeight-20);
database=firebase.database();
game=new Game();
game.getState();
game.start();
}
function draw(){
if(playerCount==4){
game.update(1);
}
if(gameState==1){clear()
game.play()}
if(gameState==2){
game.end();
}
}