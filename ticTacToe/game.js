const Board = require("./board");

class Game {
    constructor() {
        this.board = new Board()
        this.player = "x"
    }

    switch() {
        if (this.player === "x") {
            this.player = "o"
        } else {
            this.player = "x"
        }
    }

    
}