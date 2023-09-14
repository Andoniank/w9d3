
        
class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.handleClick = this.handleClick.bind(this);
    this.setupBoard();
  }
  
  setupBoard() {
    const grid = document.createElement("ul")
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const square = document.createElement("li")
        square.dataset.position = JSON.stringify([i, j])
        grid.append(square)
      }
    }
    // console.log(this.el)
    this.el.addEventListener("click", this.handleClick)
    return this.el.append(grid)
  }
  
  handleClick(e) {
    const square = e.target
    console.log(square)
    const move = JSON.parse(square.dataset.position);
    const mark = this.game.currentPlayer;
    this.game.playMove(move);
    square.classList.add(mark);
  }

  // makeMove(square) {
    
  
  // }
  
  handleGameOver() {
    if (this.game.isOver()) {
      this.el.classList.add("game-over");
    }
    const winner = this.game.winner();
    const msg = document.createElement("figcaption");
    winner ? (this.el.classList(`winner-${winner}`), msg.append(`You win ${winner}`)) : msg.append("It's a draw"), this.el.append(msg)
  }
}

export default View;