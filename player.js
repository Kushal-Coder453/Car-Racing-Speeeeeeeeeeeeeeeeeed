class Player{
constructor(){
this.index=null;
this.distance=0;
this.name=null;
this.rank=null;
}
getCount(){
var playercountref=database.ref('playerCount')
playercountref.on("value", (data)=>{
playerCount=data.val()
})
} 
updateCount(count){
database.ref('/').update({
playerCount:count
})
}
update(){
var playerIndex="players/player"+this.index;
database.ref(playerIndex).set({
name:this.name, distance:this.distance
})
}
static getPlayerinfo(){
var playerinforef=database.ref('players')
playerinforef.on("value", (data)=>{
allPlayers=data.val();
})
}
getCarsatend(){
database.ref('carSatend').on("value", (data)=>{
this.rank=data.val()
})
} 
static updateCarsatend(rank){
database.ref('/').update({
carSatend:rank
})
}
}