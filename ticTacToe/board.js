class Board {
    constructor() {
        this.grid = Board.makeGrid();
    }

    won() {

    }

    winner() {

    }

    empty(pos) {

    }

    place_mark(pos, mark) {

    }

    makeGrid() {
        let grid = []

        for (let i=0; i< 3; i++) {
            minigrid = []
            for (let j=0; j<3; j++) {
                minigrid.push([])
            }
            grid.push(minigrid)
        }
        return grid 
    }

}

module.exports = Board;