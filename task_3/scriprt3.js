

//================================= Задача 3 ====================================
// Задача 3.Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.

function getRandomArray(arrow, minV, maxV) {
  let randumArr = []
  for (let i = 0; i < arrow; i++) {
    const arr = minV + Math.floor(Math.random() * (maxV - minV + 1))
    randumArr.push(arr)
  }
  return randumArr
}

const exampleArr = getRandomArray(30, 1, 100)
const sortInsertElement = getSortInsert(exampleArr)

function getSortInsert(arr) {
	let key, i
	let count = 0
  for (let k = 1; k < arr.length; k++) {
    key = arr[k]
    i = k - 1
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i]
		i = i - 1
		count ++
    }
    arr[i + 1] = key
	
  }
  return count
}


document.write(`<p>[${exampleArr}]</p>`)
document.write(
  `<p><span>${sortInsertElement} - </span> обмінів під час сортування включеннями.</p>`
)
