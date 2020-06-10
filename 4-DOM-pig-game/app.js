/*
Game rules:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
-The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
-The first player to reach 100 points on GLOBAL score wins the game.

*/

var scores, roundScore, previousScore, activePlayer, gamePlaying;
init();

//query selector
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){    
        // 1. 2 Random Numbers
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;
        // 2. Display result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice0 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice1 + '.png';
        // 3. update the round score if the rolled number was not a 1
        /* if (previousScore === 6 && dice === 6) {
            document.getElementById('score-' + activePlayer).textContent = '0';
            window.alert('Oh no double 6!');
            nextPlayer();
        } else */
        if (dice0 !== 1 && dice1 !== 1) {
            //add score
            //previousScore = dice;
            roundScore += dice0 + dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }  else {
            // next player
            nextPlayer();
        }

    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
   if (gamePlaying){ 
    //add current score to global score
    scores[activePlayer] += roundScore;
    // update UI
    var input = document.querySelector('.final-score').value;
    var winningScore;
    // undefined, 0, null or "" are COERCED to false
    // anything else is COERCED to true
    if(input) {
        winningScore = input;
    } else {
        winningScore = 100;
    }

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //Check if they won the game
    if (scores[activePlayer] >= winningScore) {
        //Winner defined here
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        //Change Players
        nextPlayer();
    }
}

})

function nextPlayer(){
    //Next Player + set 0
    document.querySelector('#current-' + activePlayer).textContent = 0;
    //ternery
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    //toggle between active players
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    //remove dice display
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    previousScore = 0;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    //ID SELECTOR
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;














/*
YOUR 3 CHALLENGES
Chgange the game to follow these rules:

1. A player losses his ENTIRE score when he rolls two 6's in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an imput field to the HTML where players can set the winning score, so that they can change the gpredefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out) 
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/