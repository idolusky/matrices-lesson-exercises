/* Write your code below */
class Matrix {
    constructor(rows, columns) {
        this.matrix = this.generateMatrix(rows, columns)

    }
    generateMatrix(rows, columns) {
        let matrix = []
        let counter = 1
        for (let r = 0; r < rows; r++) {
            let row = []
            matrix.push(row)
            for (let c = 0; c < columns; c++) {
                matrix[r].push(counter++)
            }
        } return matrix
    }

    print() {

        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }
    get(row, column) {
        return this.matrix[row][column]
    }
    alter(row, column, newNum) {
        this.matrix[row][column] = newNum
    }
    printColumn(colNum) {
        for (let r = 0; r < this.matrix.length; r++) {
            console.log(this.matrix[r][colNum])
        }
    }
    printRow(rowNum) {
        for (let c = 0; c < this.matrix[rowNum].length; c++) {
            console.log(this.matrix[rowNum][c])
        }
    }
    findCoordinate(value) {
        let obj = {}
        for (let r = 0; r < this.matrix.length; r++) {
            if (this.matrix[r].indexOf(value) != -1) {
                obj.x = this.matrix[r].indexOf(value)
                obj.y = r
            }
        }
        return obj
    }
}



let m = new Matrix(3, 4)
m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/
// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)

console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}



/* Do not remove the exports below */
module.exports = Matrix