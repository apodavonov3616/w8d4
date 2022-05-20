class Board {
    constructor() {
        this.grid = Board.makeGrid();
    }

    won() {
        if (this.winner) {
            return true
        }
    }

    winner() {

    }

    render() {
        newGrid = []
        for (let i=0; i< 3; i++) {
            smallGrid = []
            for (let j=0; j<3; j++) {
                smallGrid.push([])
            }
            newGrid.push(smallGrid)
        }
        for (let i=0; i< 3: i++) {
            for (let j=0; j<3; j++) {
                if (this.grid[i][j]){
                    newGrid[i][j] = this.grid[i][j]
                } else {
                    newGrid[i][j] = " "
                }
            }
        }
        console.log(newGrid.join(""))
    }

    validPos(pos) {
        if (pos[0] >= 0 && pos[0] <= 3 && pos[1] >= 0 && pos[1] <= 3)
            return true
        } else {
            return false 
        }
    }

    empty(pos) {
        if (!Board.validPos(pos)) {
            throw new Error('not valid');
        }

        if (this.grid[pos[0]][pos[1]] == null) {
            return true
        } else {
            return false;
        }

    }

    place_mark(pos, mark) {
        if (!this.isEmptyPos(pos)) {
            throw new MoveError('not available')
        }

        this.grid[pos[0]][pos[1]] = mark 
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