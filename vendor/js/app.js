/*

@author
Dercio Nhatsave

GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

//set the current value on screen
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//Read element of an HTML and store
//var x = document.querySelector('#score-1').textContent;
//console.log(x);



 document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
       // 1. Random a number 1 - 6
    var dice = Math.floor(Math.random() * 6 + 1);
    var dice2 = Math.floor(Math.random() * 6 + 1);

    
    //2. Display the result 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src= 'vendor/img/dice-' + dice + '.png';

    var dice2DOM = document.querySelector('.dice2');
    dice2DOM.style.display = 'block';
    dice2DOM.src= 'vendor/img/dice-' + dice2 + '.png';

    
    //3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1 && dice2 !== 1){
        //Add score
        roundScore = dice + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else{
        //Next player 
        nextPlayer();  
    }

    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    //Add the current score to blobal score
    scores[activePlayer] += roundScore;
    var scoreValue = document.getElementById('score-value').value;
    var winner;
    if(scoreValue){
        winner = scoreValue;
      }else{
        winner = 25;
      }
    
    // Update de UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    if (scores[activePlayer] >= winner){
        document.querySelector('#name-' + activePlayer).textContent= "Winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
        gamePlaying = false;
    } else{
        //Next Player
        nextPlayer();
    }
    }

});

function nextPlayer(){
    //Next player and change the player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

     // change css tag hide the dice
     document.querySelector('.dice').style.display = 'none';
     document.querySelector('.dice2').style.display = 'none';
 
     document.getElementById('score-0').textContent   = '0';
     document.getElementById('score-1').textContent   = '0';
     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.getElementById('name-0').textContent= "Player 1";
     document.getElementById('name-1').textContent= "Player 2";

     document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('winner');
     document.querySelector('.player-0-panel').classList.remove('active');
     document.querySelector('.player-1-panel').classList.remove('active');

     document.querySelector('.player-0-panel').classList.add('active');




}














