/**
 There are  plants in a garden. Each of these plants has been added with some amount of pesticide. After each day, if any plant has more pesticide than the plant on its left, being weaker than the left one, it dies. You are given the initial values of the pesticide in each plant. Print the number of days after which no plant dies, i.e. the time after which there are no plants with more pesticide content than the plant to their left.

 Input Format

 The input contains of an integer . The next line contains  integers, describing the array  where  denotes the amount of pesticide in plant .

 Constraints



 Output Format

 Output an integer equal to the number of days after which no plants die.

 Sample Input

 7
 6 5 8 4 7 10 9
 Sample Output

 2
 Explanation

 Initially all plants are alive.

 Plants = {(6,1), (5,2), (8,3), (4,4), (7,5), (10,6), (9,7)}

 Plants[k] = (i,j) => jth plant has pesticide amount = i.

 After the 1st day, 4 plants remain as plants 3, 5, and 6 die.

 Plants = {(6,1), (5,2), (4,4), (9,7)}

 After the 2nd day, 3 plants survive as plant 7 dies.

 Plants = {(6,1), (5,2), (4,4)}

 After the 3rd day, 3 plants survive and no more plants die.

 Plants = {(6,1), (5,2), (4,4)}

 After the 2nd day the plants stop dying.
 */

const poisonousPlants = plants => {
  let currentStack = [plants[0]]
  let stacks = [currentStack]
  for (let i = 1; i < plants.length; i++) {
    if (plants[i] <= currentStack[currentStack.length - 1]) currentStack.unshift(plants[i])
    else {
      currentStack = [plants[i]]
      stacks.push(currentStack)
    }
  }

  let days = 0
  while (stacks.length > 1) {
    stacks = stacks.reduce((acc, stack) => {
      stack.pop()
      if (stack.length > 0) acc.push(stack)

      return acc
    }, [])

    const copyStacks = [stacks[0]]
    for (let i = 1; i < stacks.length; i++) {
      const currentStack = copyStacks[copyStacks.length - 1]
      const nextStack = stacks[i]
      if (currentStack[currentStack.length - 1] >= nextStack[0]) copyStacks[copyStacks.length - 1] = currentStack.concat(nextStack)
      else copyStacks.push(nextStack)
    }

    days++
  }

  return days
}

console.log(poisonousPlants([6, 5, 8, 4, 7, 10, 9]))