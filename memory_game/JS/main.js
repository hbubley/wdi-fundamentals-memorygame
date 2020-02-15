console.log("Up and RUNNING")

const cards =
[
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
  }
];
const cardsInPlay = [];

function checkForMatch(cardsInPlay)
{
  if (cardsInPlay.length===2)
  {
    if(cardsInPlay[0] === cardsInPlay[1])
    {
      console.log("You found a match!");
    }
    else {
      console.log("Sorry, try again!");
    }
  }
}

function flipCard(cardID)
{
  cardsInPlay.push(cards[cardID].rank);
  console.log("User just flipped " + cards[cardID].rank);
  console.log(cards[cardID].suit);
  console.log(cards[cardID].cardImage);
  checkForMatch(cardsInPlay);
}



flipCard(0);
flipCard(2);
