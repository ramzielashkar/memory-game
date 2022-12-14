const cards = document.querySelectorAll('.card');
const btn = document.querySelector('.btn');
const scores = document.querySelector('.score');
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let score =0;

// Function to shuffle cards positions
const shuffleCards = () => {
  matched = 0;
  let arr = [1, 2, 3, 1, 2, 3];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
      let front = card.querySelector('.front');
      let back = card.querySelector('.back');
      front.classList.remove("hidden");
      back.classList.add("hidden");
        let imgTag = card.querySelector(".back img");
        imgTag.src = `images/img${arr[i]}.png`;

       });
}
// Function to check if the two selected cards matches
const matchCards = (cardOneImg, cardTwoImg) => {
  console.log("match");
if(cardOneImg == cardTwoImg){
  matched++;
  score+=5;
  scores.textContent = `Your score is: ${score}`;

  if(matched==3){
shuffleCards();
  }
console.log("success");
cardOne = cardTwo = "";
return disableDeck = false;

}
}

// Function to flip cards
const flipCard = (card) => {
  let front = card.querySelector('.front');
  let back = card.querySelector('.back');
  front.classList.toggle("hidden");
  back.classList.toggle("hidden");

  if(cardOne !== card && !disableDeck) {
          if(!cardOne) {
              return cardOne = card;
          }
          cardTwo = card;
          disableDeck = true;
          let cardOneImg = cardOne.querySelector(".back img").src;
          let cardTwoImg = cardTwo.querySelector(".back img").src;
          matchCards(cardOneImg, cardTwoImg);
      }
}
// Adding Event Listeners to Cards
cards.forEach(card => {
card.addEventListener("click",() =>{
flipCard(card);

})
});

// Adding play again button event Listener
btn.addEventListener("click", () => {
location.reload();
})
  shuffleCards();
