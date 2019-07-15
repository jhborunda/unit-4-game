$(document).ready(function(){
// Randon Number between 19 & 20
var Random=Math.floor(Math.random()*101+19);

$('#randomNumber').text(Random);

//crystal's hidden value between 1-12
var redGem=Math.floor(Math.random()*11+1);
var goldGem=Math.floor(Math.random()*11+1);
var turqGem=Math.floor(Math.random()*11+1);
var purpGem=Math.floor(Math.random()*11+1);
//create variables/values for crystals

//number to be pushed for winsLosses
var userScore=0;
var wins=0;
var losses=0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

//functions for winsLosses

function winner(){
    wins++;
    $('#numberWins').text(wins);
    reset();
}

function loser(){
    losses++;
    $('#numberLosses').text(losses);
    reset();
}

//clicks for gems
//Red Gem
$('#redGem').on('click', function(){
    userScore=userScore+redGem;

    $('#userTotal').text(userScore);

    if (userScore == Random){
        winner();
    } else if (userScore > Random){
        loser();
    }
});

//Gold Gem
$('#goldGem').on('click', function(){
    userScore=userScore+goldGem;

    $('#userTotal').text(userScore);

    if (userScore == Random){
        winner();
    } else if (userScore > Random){
        loser();
    }
});

//Turquoise Gem
$('#turqGem').on('click', function(){
    userScore=userScore+turqGem;

    $('#userTotal').text(userScore);

    if (userScore == Random){
        winner();
    } else if (userScore > Random){
        loser();
    }
});

//Purple Gem
$('#purpGem').on('click', function(){
    userScore=userScore+purpGem;

    $('#userTotal').text(userScore);

    if (userScore == Random){
        winner();
    } else if (userScore > Random){
        loser();
    }
});
//reset
function reset(){
    Random=Math.floor(Math.random()*101+19);
    $('#randomNumber').text(Random);

    numOne=Math.floor(Math.random()*11+1);
    numTwo=Math.floor(Math.random()*11+1);
    numThree=Math.floor(Math.random()*11+1);
    numFour=Math.floor(Math.random()*11+1);

    userScore=0;
    $('#userTotal').text(userScore);
};
})