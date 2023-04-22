'use strict';


let secretNumber = Math.trunc(Math.random()*20) + 1 ;
let score=20;
let maxScore=0;

//when someone click again this function will call and reset everything
document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20) + 1 ;
    document.querySelector('.guess').value="";
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
    score=20;
    document.querySelector('.score').textContent=score;
}
);

//This function is used to set high score 
const setHighScore= function(){
    maxScore=score;
    document.querySelector('.highscore').textContent=maxScore;
}

//This funcion is used to reduce score
const reduceScore= function(){
    score--;
    document.querySelector('.score').textContent=score;
}

//This function is used to print message
const messagePrint= function( msg){
    document.querySelector('.message').textContent= msg;
    document.querySelector('.guess').value="";
}

//console.log(document.querySelector('.score').textContent);
document.querySelector('.check').addEventListener('click', function() {

      const guess=  Number(document.querySelector('.guess').value);
    
    if(score>0){
      if(!guess){
        messagePrint("❌ Not a number");
      }
      else if(guess<secretNumber){
        messagePrint("📉 Too Less!");
        reduceScore();
      }
      else if(guess>secretNumber){
        messagePrint("📈 Too High!");
        reduceScore();
      }
      else if(guess===secretNumber){
           if(score>maxScore)setHighScore();
           messagePrint('🏆 Success 🏆');
           document.querySelector('body').style.backgroundColor='#60b347';
           document.querySelector('.number').style.width='30rem';
           document.querySelector('.number').textContent=secretNumber;
      }
    }
    else {
        messagePrint(' 💩 You Lose 💩');
    }
    }
);