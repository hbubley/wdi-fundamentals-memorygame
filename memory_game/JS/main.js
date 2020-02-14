console.log("Up and RUNNING")

const cards = ["King", "King", "Queen", "Queen"];
const cardsPlay = [];

let cardOne = cards[1];
console.log("User just flipped " + cardOne)
let cardTwo = cards[2];
console.log("User just flipped " + cardTwo)
cardsPlay.push(cardOne);
cardsPlay.push(cardTwo);

if(cardsPlay.length === 2)
{
  if(cardsPlay[0] === cardsPlay[1])
  {
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again!")
  }
}
