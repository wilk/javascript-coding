/**
 HackerLand University has the following grading policy:

 Every student receives a grade in the inclusive range from 0 to 100.
 Any grade less than 40 is a failing grade.
 Sam is a professor at the university and likes to round each student's grade according to these rules:

 If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
 If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.

 Example:
 Input:
 4
 73 -> 75 - 73 < 3 -> 75
 67 -> 70 - 67 = 3 -> 67
 38 -> 40 - 38 < 3 -> 40
 33 -> < 38 -> 33

 Output:
 75
 67
 40
 33
 */

const solve = grades => {
  return grades.map(grade => {
    if (grade < 38) return grade
    const nextMultiple = (Math.floor(grade / 5) + 1) * 5
    if ((nextMultiple - grade) < 3) return nextMultiple
    else return grade
  })
}

console.log(solve([73, 67, 38, 33, 0, 100, 98]).join('\n'))