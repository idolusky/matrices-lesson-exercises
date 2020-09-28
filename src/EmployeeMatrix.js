
const Matrix = require('./Matrix')
class EmployeeMatrix extends Matrix {
    constructor(rows, columns) {
        super(rows, columns)

    }

    loadData(salaryData) {
        this.matrix = []

        // salaryData.forEach(person =>
        //     this.matrix.push((Object.values(person))))
        for (let r of salaryData) {
            this.matrix.push((Object.values(r)))
        }
        return this.matrix
    }

    getEmployees(department) {
        // let names = []
        // for (let d of this.matrix) {
        //     if (d[2] === department) {
        //         names.push(d[1])
        //     }
        // }
        // return names
        return this.matrix.filter(row => row[2] === department)
            .map(row => row[1])
    }

    getTotalSalary(department) {
        let sum = 0
        let relevantPeople = this.matrix
            .filter(person => person[2] === department)
            .forEach(person =>
                sum += person[3])
        return sum
    }

    findRichest() {
        let highest = 0
        let mainMan = ""
        for (let person of this.matrix) {
            if (person[3] > highest) {
                highest = person[3]
                mainMan = person[1]

            }
        }
        return mainMan
    }
}



let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
// m.print()

// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200

// console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
// console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]

// console.log(m.getTotalSalary("Finance")) //prints 4300
// console.log(m.getTotalSalary("Design")) //prints 5300

console.log(m.findRichest()) //prints Anisha

/* Do not remove the exports below */
module.exports = EmployeeMatrix