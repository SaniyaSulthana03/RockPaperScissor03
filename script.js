function myFunction() {
  // Replace this with your actual code
  function getPlayer1Choice() {
    const Player1 = prompt("Enter Player1 choice:");
    console.log("Player1 entered: " + Player1);

    if (Player1 == "rock" || Player1 == "paper" || Player1 == "scissors") {
      return Player1;
    } else {
      alert("invalid choice");
      return getPlayer1Choice();
    }
  }
  function getPlayer2Choice() {
    const Player2 = prompt("Enter Player2 choice:");
    console.log("Player2 entered: " + Player2);
    if (Player2 == "rock" || Player2 == "paper" || Player2 == "scissors") {
      return Player2;
    } else {
      alert("invalid choice");
      return getPlayer2Choice();
    }
  }
  function toDetermineWinner(Player1, Player2) {
    if (Player1 === Player2) return "It is a Tie";
    else if (
      (Player1 === "rock" && Player2 === "Scissors") ||
      (Player1 === "Scissors" && Player2 === "paper") ||
      (Player1 === "paper" && Player2 === "rock")
    )
      return "Player1 is win";
    else return "Player2 is winner";
  }

  function toPlayGame() {
    const numberOfTurns=3;
    for (let iterate = 0; iterate < numberOfTurns; iterate++) {
      const Player1 = getPlayer1Choice();
      const Player2 = getPlayer2Choice();
      console.log("Player1 choose" + getPlayer1Choice);
      console.log("Player2 choose" + getPlayer2Choice);
      console.log(toDetermineWinner(Player1, Player2));
    }
    // console.log(toDetermineWinner(Player1, Player2));
  }
  toPlayGame();
}
