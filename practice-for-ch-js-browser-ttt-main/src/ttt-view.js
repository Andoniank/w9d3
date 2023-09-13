
class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.handleClick = this.handleClick.bind(this)
    this.setupBoard()
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
    this.el.append(grid)
    this.el.addEventListener("click", this.handleClick)
  }
  
  handleClick(e) {
    const square = e.target
    this.makeMove(square)
  }

  makeMove(square) {

  }
  
  handleGameOver() {
  }
}

export default View;