'use strict';

let number = Math.trunc(Math.random()*20) + 1
let score = 20;
let highscore = 0;

//check button
document.querySelector('.check').addEventListener('click' , function() {
    const guess = Number(document.querySelector('.guess').value);
    
    //no input
    if (!guess) { 
        document.querySelector('.message').textContent = '🤔 NO INPUT PROVIDED';
    }
    
    //correct guess
    else if (guess === number) 
    {
        document.querySelector('.message').textContent = '😎 YOU GUESSED IT RIGHT. GG!!';

        //winning color ,number reveal, size change
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //highscore
        if (score>highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = score;

        }
    }


    //lower guess
    else if (guess < number)
    {
        if (score >1) 
        {
            document.querySelector('.message').textContent = '👇🏼You Guessed a Lower Number';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else 
        {
            document.querySelector('.message').textContent = '💀 YOU lOST THE GAME';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff6666'
        }

        
    }
    //higher guess
    else if (guess > number) 
    {
        if (score>1)
        {
        document.querySelector('.message').textContent = '👆🏼You Guessed a Higher Number'
        score--;
        document.querySelector('.score').textContent = score;
        }
        else 
        {
            document.querySelector('.message').textContent = '💀 YOU lOST THE GAME';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = '#ff6666'
        }
    }
});


//Try Again button
document.querySelector('.again').addEventListener('click', function() {

    //main body restoration
    score = 20;
    number = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.message').textContent = '💭 Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';

    //css restoration
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
});


