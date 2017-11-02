class Heap {
  constructor() {
    this._heap = []
  }

  add(value) {
    // push the element inside the heap
    this._heap.push(value)
    // sort the heap
    this._bubbleUp(this._heap, this._heap.length - 1)
  }

  remove(value) {
    // find the element index
    const lastIndex = this._heap.length - 1,
      valueIndex = this._heap.findIndex(el => el === value)

    if (valueIndex === lastIndex) return this._heap.pop()

    // swap the element with the head
    this._heap[valueIndex] = this._heap[this._heap.length - 1]
    this._heap[this._heap.length - 1] = value
    // pop out the element index
    this._heap.pop()
    // sort the heap
    this._bubbleDown(this._heap, valueIndex)
    console.log(this._heap)
  }

  min() {
    return this._heap[0]
  }

  _bubbleUp(heap, index) {
    if (index === 0) return

    const parentIndex = Math.round((index - 2) / 2),
      parent = heap[parentIndex],
      value = heap[index]

    if (value < parent) {
      // swap parent with its child
      heap[parentIndex] = value
      heap[index] = parent
      this._bubbleUp(heap, parentIndex)
    }
  }

  _bubbleDown(heap, index) {
    const value = heap[index],
      leftIndex = (index * 2) + 1,
      rightIndex = (index * 2) + 2

    let left, right

    if (leftIndex < heap.length) left = heap[leftIndex]
    if (rightIndex < heap.length) right = heap[rightIndex]

    if (typeof left === 'undefined' && typeof right === 'undefined') return
    if (typeof left === 'undefined') {
      heap[index] = right
      heap[rightIndex] = value
      return this._bubbleDown(heap, rightIndex)
    }
    if (typeof right === 'undefined') {
      heap[index] = left
      heap[leftIndex] = value
      return this._bubbleDown(heap, leftIndex)
    }

    if (left < right) {
      heap[index] = left
      heap[leftIndex] = value
      return this._bubbleDown(heap, leftIndex)
    } else {
      heap[index] = right
      heap[rightIndex] = value
      return this._bubbleDown(heap, rightIndex)
    }
  }
}

const heap = new Heap(),
  INSERT = 1,
  REMOVE = 2,
  PRINT = 3

//const data = ['5', '1 4', '1 9', '3', '2 4', '3'].join('\n')
//const data = ['5', '1 4', '1 9', '3', '2 9', '3'].join('\n')
const data = ['5', '1 -3', '1 -2', '3', '1 -1', '1 0', '1 1', '3', '1 2', '1 3', '2 0', '1 0', '3', '2 -3', '3'].join('\n')
//const data = ['5', '1 9', '1 4', '1 8', '1 2', '1 5', '1 5', '2 5', '3', '1 1', '3', '1 1', '3', '1 12', '1 99', '3', '2 1', '1 -3', '1 -1', '3', '1 -50', '1 -50', '3', '2 -50', '3'].join('\n')
//const data = ['5', '1 -9', '1 -9', '1 10', '3', '2 -9', '3'].join('\n')
const commands = data.split('\n')

commands.shift()

commands.forEach(commandStr => {
  const tmp = commandStr.split(' '),
    command = parseInt(tmp[0])

  let value
  switch (command) {
    case INSERT:
      value = parseInt(tmp[1])
      heap.add(value)
      break
    case REMOVE:
      value = parseInt(tmp[1])
      heap.remove(value)
      break
    case PRINT:
      console.log(heap.min())
      break
  }
})