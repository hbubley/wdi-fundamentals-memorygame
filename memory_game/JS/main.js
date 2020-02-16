console.log("Up and RUNNING")

const cards =
[
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "IMG/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "IMG/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "IMG/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "IMG/king-of-diamonds.png"
  }
];
const cardsInPlay = [];

function checkForMatch(cardsInPlay)
{
    if(cardsInPlay[0] === cardsInPlay[1])
    {
      alert("You found a match!");
    }
    else {
      alert("Sorry, try again!");
    }
}

function flipCard()
{
  cardID = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardID].rank);
  console.log("User just flipped " + cards[cardID].rank);
  console.log(cards[cardID].suit);
  console.log(cards[cardID].cardImage);
  this.setAttribute('src', cards[cardID].cardImage);
  if (cardsInPlay.length===2)
  {
    checkForMatch(cardsInPlay);
  }
  else if (cardsInPlay.length>2)
  {
    this.addEventListener('click', alert("You have already picked two cards!"));
  }
}

function createBoard()
{
  for(let i = 0; i < cards.length; i++)
  {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', "IMG/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

createBoard();
