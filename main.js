
let grades = ['A', 'C-', 2, 3, 'B', 4]
let studentsWhoPass = []

for (grade of grades) {
    if (grade >= 3 || grade === 'A' || grade === 'A-' || grade === 'B' || grade === 'B-' || grade === 'C') {
        studentsWhoPass.push(grade)
    }
}

console.log("passing grades: ")
for (grade of studentsWhoPass) {
    console.log(grade)
}