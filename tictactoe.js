

var boxs = document.getElementsByTagName('td');
var winner = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
var player1 = [];
var player2 = [];

var player_one = 1;

function play(){
  if (this.innerHTML == ''){
    if(player_one == 1){
      document.getElementById('playerTurn').innerHTML = '<h2 id="playerTurn">It is Os turn</h2>';
      this.innerHTML = 'x';
      player2.push(event.target.dataset.num);
      console.log(player2);
      player_one = 0;
      }


    else {
      this.innerHTML = 'O';
      document.getElementById('playerTurn').innerHTML = '<h2 id="playerTurn">It is Xs turn</h2>';
      player_one = 1;
      player1.push(event.target.dataset.num);
      check(player1);
      console.log(player1);
    }
  }
  else {
    console.log("error");
  }
}

function check(array) {
  for(var i=0; i<winner.length; i++){
    if(winner[i].every((val) =>array.includes(val))){
      console.log("hello"); }
    }
}

var player1 = [];
var player2 = [];
for (let box of boxs) {
  box.addEventListener('click', play, function(event){
  player1.push(event.target.dataset.num);
  console.log(player1 + player2);
  });
}
