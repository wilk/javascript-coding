const processData = input => {
  const commands = input.split("\n"),
    stack = []

  // skip first element
  commands.shift()

  let max = -1,
    maxIndex = -1
  commands.forEach(command => {
    const split = command.split(' ')
    const action = split[0]
    let value

    switch (action) {
      case '1':
        value = parseInt(split[1])
        stack.push(value)
        if (value > max) {
          max = value
          maxIndex = stack.length - 1
        }
        break
      case '2':
        value = stack.pop()
        if (value === max && maxIndex === stack.length) {
          max = -1
          for (let i = 0; i < stack.length; i++) {
            if (stack[i] > max) {
              max = stack[i]
              maxIndex = i
            }
          }
        }
        break
      case '3':
        console.log(max)
        break
    }
  })
}

processData(`10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3`)