console.log("Up and RUNNING")

const cards = ["King", "King", "Queen", "Queen"];
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
  cardsInPlay.push(cards[cardID]);
  console.log("User just flipped " + cards[cardID]);
  checkForMatch(cardsInPlay)
}



flipCard(0);
flipCard(2);
