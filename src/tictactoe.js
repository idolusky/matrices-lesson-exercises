const Matrix = require('./Matrix')

class TicTacToe extends Matrix {
    constructor() {
        super()
        this.player1 = { IsPlaying: false }
        this.player2 = { IsPlaying: false }
    }
    loadBoard() {
        this.matrix = []
        for (let r = 0; r < 3; r++) {
            let row = []
            this.matrix.push(row)
            for (let c = 0; c < 3; c++) {
                this.matrix[r].push('.')
            }
        }
        return this.matrix
    }

    // play(rowNum, colNum, player) {
    //     player === 1 ? this.alter(rowNum, colNum, "x") : this.alter(rowNum, colNum, "O")
    //     _threeInARow ? console.log(`Boo ya ! player ${player} won the game`) : null
    // }
    getColumn(colNum) {
        let str = ''


        for (let i = 0; i < this.matrix.length; i++) {
            str += this.matrix[i][colNum]
        }


        return str
    }




    gettRow(rowNum) {
        let str = ''


        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            str += this.matrix[rowNum][i]
        }


        return str
    }


    play(rowNum, columnNum, player) {

        if (player === 1) {
            if (this.player1.IsPlaying === false) {
                if (this.matrix[rowNum][columnNum] === 'x' || this.matrix[rowNum][columnNum] === 'o') {
                    console.log("wrong move buddy,try again")
                } else {
                    this.alter(rowNum, columnNum, 'x')
                    this._checkThreeInARow() ? console.log(`Congratulations player ${player}`) : null
                    this.player1.IsPlaying = true
                    this.player2.IsPlaying = false
                }
            }
            else {
                console.log('not your turn bro')
            }
        } else {
            if (player === 2) {
                if (this.player2.IsPlaying === false) {
                    if (this.matrix[rowNum][columnNum] === 'x' || this.matrix[rowNum][columnNum] === 'o') {
                        console.log("wrong move buddy, try again")
                    } else {
                        this.alter(rowNum, columnNum, 'o')
                        this._checkThreeInARow() ? console.log(`Congratulations player ${player}`) : null
                        this.player2.IsPlaying = true
                        this.player1.IsPlaying = false
                    }
                }
                else {
                    console.log('not your turn bro')
                }
            }
        }
    }


    //     if (this.player.IsPlaying === false) {
    //         if (this.matrix[rowNum][columnNum] === 'x' || this.matrix[rowNum][columnNum] === 'o') {
    //             console.log("wrong move buddy")
    //         }
    //         player === 1 ? this.alter(rowNum, columnNum, 'x') : this.alter(rowNum, columnNum, 'o')
    //         this._checkThreeInARow() ? console.log(`Congratulations player ${player}`) : null
    //         if (player === 1) {
    //             this.player1.IsPlaying = true
    //             this.player2.IsPlaying = false
    //         } else {
    //             this.player1.IsPlaying = false
    //             this.player2.IsPlaying = true
    //         }
    //     } else {
    //         console.log('not your turn bro')
    //     }


    // }


    _checkThreeInARow() {
        let strs = []
        for (let i = 0; i < 3; i++) {
            strs.push(this.getColumn(i))
        }


        for (let i = 0; i < 3; i++) {
            strs.push(this.gettRow(i))
        }


        let middle1 = ''
        for (let i = 0; i < 3; i++) {
            middle1 += this.matrix[i][i]
        }


        let middle2 = ''
        for (let i = 2; i >= 0; i--) {
            middle2 += this.matrix[i][i]
        }


        for (let str of strs) {
            if ((str === 'xxx') || (str === 'ooo')) {
                this.loadBoard()
                return true
            }
        }


        return false
    }



}

let board = new TicTacToe()
board.loadBoard()

board.play(2, 2, 1)
board.play(2, 2, 2)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
board.play(1, 0, 2)
board.play(1, 2, 1) //prints Congratulations Player 1

board.print()
//prints
// o       .       x
// o       .       x
// .       .       x
