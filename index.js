const cards = document.querySelectorAll('.card');

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

cards.forEach(card => {
card.addEventListener("click",() =>{
let front = card.querySelector('.front');
let back = card.querySelector('.back');
front.classList.toggle("hidden");
back.classList.toggle("hidden");
})
});
