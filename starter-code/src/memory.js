var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var myPseudoLength = this.cards.length;

  for (var i = 0; i < this.cards.length; i++) {
    var randomIndex = Math.floor(Math.random() * myPseudoLength);
  
    var swappy = this.cards[randomIndex];
    this.cards[randomIndex] = this.cards[myPseudoLength - 1];
    this.cards[myPseudoLength - 1] = swappy;
    myPseudoLength--;
  }
  return undefined;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked++;
  if (secondCard === firstCard) { // Adequate compare? I guess so...
    this.pairsGuessed++;
    return true;
  }
  return false;
}

MemoryGame.prototype.isFinished = function () {
  return (this.pairsGuessed >= this.cards.length / 2);
};