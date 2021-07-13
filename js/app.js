/*
 * Create a list that holds all of your cards
 */
var cards = ['fa-diamond', 'fa-diamond',
            'fa-paper-plane-o', 'fa-paper-plane-o',
            'fa-anchor', 'fa-anchor',
            'fa-bolt', 'fa-bolt',
            'fa-cube', 'fa-cube',
            'fa-leaf', 'fa-leaf',
            'fa-bicycle', 'fa-bicycle',
            'fa-bomb', 'fa-bomb'
]

function generateCard(card){
    return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 function initGame(){
     var cardHTML = shuffle(cards).map(function(card){
         return generateCard(card);
     });
     moves = 0;
     moveCounter.innerHTML = moves + " Moves"; //add 0 to moves count

     deck.innerHTML = cardHTML.join(' ');
 }

 function endGame(){
    document.body.classList.add("active");
    allCards.forEach(function(card){
        card.classList.remove('open','show','match');
    });
    for (var i = deck.children.length; i >= 0; i--) {
        deck.appendChild(deck.children[Math.random() * i | 0]);
}
}

function showStars(moves){
    if(moves<=5){
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
    }else if(moves<=10){
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
    }else if(moves<=15){
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
    }else if(moves<=20){
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
    }else if(moves<=25){
        stars.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
    }
}

//creating a timer for fliping card
var timer_card;
function startTimer() {
    timer_card = setTimeout(function(){
                    openCards.forEach(function(card){
                    card.classList.remove('open','show');
                    })
                    openCards = [];
                },800);
                
                moves +=1 ;
                move(moves);
                moveCounter.innerHTML = moves + " Moves";
  }
  
  function stopTimer() {
    clearTimeout(timer_card);
    openCards.forEach(function(card){
        card.classList.remove('open','show');
        })
        openCards = [];
  }

//adding a progress bar
 var i = 0;
 var star_progress = 100;
 function move(moves) {
   if (i == 0) {
     i = 1;
     var elem = document.getElementById("myBar");
     var width = 1;
     var id = setInterval(frame, 1);
     function frame() {

        //adding as many stars as progress bar change
        if(moves<=5){
            starsProgress.innerHTML = "";
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        }else if(moves<=10){
            document.getElementById("stars-progress").style.marginRight = "8%";
            starsProgress.innerHTML = "";
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        }else if(moves<=15){
            //error
            document.getElementById("stars-progress").style.marginRight = "15%";
            starsProgress.innerHTML = "";
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        }else if(moves<=20){
            document.getElementById("stars-progress").style.marginRight = "22%";
            starsProgress.innerHTML = "";
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        }else if(moves<=25){
            document.getElementById("stars-progress").style.marginRight = "29%";
            starsProgress.innerHTML = "";
            starsProgress.insertAdjacentHTML('beforeend', '<li><i class="fa fa-star"></i></li>');
        }else{
            starsProgress.innerHTML = "";
        }

       if (width >= (star_progress-(4*moves))) {
         clearInterval(id);
         i = 0;
       } else {
         width++;
         elem.style.width = width + "%";
       }
     }
   }
 }

 //change the background when you win
// function changeBackground() { 
// } 

//main function
 var moves = 0;
 var moveCounter = document.querySelector('.moves');
 var finalMoves = document.querySelector('.final-moves');
 var deck = document.querySelector('.deck');
 initGame();
 move(moves);
 var allCards = document.querySelectorAll('.card');
 var openCards = [];
 var stars = document.querySelector('.stars');
 var starsProgress = document.querySelector('#stars-progress');
 var matched_box = 0;

 //document.body.style.background = "#ffffff url('geometry2.png') no repeat";

 allCards.forEach(function(card){
     
     card.addEventListener('click',function(e){
        if(matched_box == 8){
            matched_box = 0;
            stars.innerHTML = "";
            moves = 0;
            moveCounter.innerHTML = moves + " Moves"; //add 0 to moves count
        }
        if(!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')){
            openCards.push(card);
            card.classList.add('open','show');
    
            if(openCards.length==2){

                //box matched
                if(openCards[0].dataset.card == openCards[1].dataset.card){
                    openCards[0].classList.add('match');
                    openCards[0].classList.add('open');
                    openCards[0].classList.add('show');

                    openCards[1].classList.add('match');
                    openCards[1].classList.add('open');
                    openCards[1].classList.add('show');
                    matched_box ++;
                    openCards = [];
                }else{
                    //hide those cards again
                    startTimer();
                }
            }
            //check if user clicked 3rd box
            if(openCards.length>2){
                stopTimer();
            }
        }
        if(matched_box == 8){
            showStars(moves);
            finalMoves.innerHTML = moves + " moves";
            moves = 0;
            move(0);
            document.body.classList.remove('active');
            document.getElementById("stars-progress").style.marginRight = "0%";
            endGame();
        }
     });

 });

 var restart_game = document.querySelectorAll('.restart');
 restart_game.forEach(function(restart){
    restart.addEventListener('click',function(e){
        finalMoves.innerHTML = moves + " moves";
        moves = 0;
        moveCounter.innerHTML = moves + " Moves"; //add 0 to moves count
        stars.innerHTML = "";
        matched_box = 0;
        openCards = [];
        move(0);
        endGame();
    });
 });
