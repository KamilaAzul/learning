const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
 
function flipCard(){
  if (lockBoard) return;
  if (this ===firstCard) return;
  this.classList.add('flip');

  if (!hasFlippedCard){
    //first card click
    hasFlippedCard = true;
    firstCard = this;
} 
else{
  //second card click
  
  secondCard = this;}
 
// checking if the cards match

if (firstCard.dataset.framework === 
  secondCard.dataset.framework){

     // the cards match-->disable cards
     firstCard.removeEventListener('click', flipCard);
     secondCard.removeEventListener('click', flipCard);
     resetBoard();
  } else{
    // the cards don't-->unflip cards
      
      lockBoard = true;
      setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }, 1500);

    //adding 'shake' animation when cards don't match
    setTimeout(() => {
      firstCard.classList.add("shake");
      secondCard.classList.add("shake");
    }, 1000);
    
    setTimeout(() => {
      firstCard.classList.remove("shake", "flip");
      secondCard.classList.remove("shake", "flip");
      firstCard = secondCard = "";
      resetBoard();
    }, 1500);
    
  }
//reset board
function resetBoard() {
    firstCard = null;
    secondCard = null;
    hasFlippedCard = false;
    lockBoard = false;
}}
// IIFE- Immediately Invoked Function expression method
(function shuffle()
{cards.forEach(function (card)
{let randomPos = Math.floor(Math.random() * 16);
card.style.order = randomPos;
});
 })();

cards.forEach(function (card) {
  card.addEventListener('click', flipCard);
});