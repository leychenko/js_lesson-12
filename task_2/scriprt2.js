//================================= Задача 2 ====================================
// Задача 2.  Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.

function getRandomArray(arrow, minV, maxV) {
  let randumArr = []
  for (let i = 0; i < arrow; i++) {
    const arr = minV + Math.floor(Math.random() * (maxV - minV + 1))
    randumArr.push(arr)
  }
  return randumArr
}

 const exampleArr = getRandomArray(30, 1, 100)
const mixSort = getMixSorting(exampleArr)

 function getMixSorting(arr) {
	let count = 0
  let leftIndex = 0
  let rightIndex = arr.length - 1
  while (leftIndex < rightIndex) {
    for (let i = leftIndex; i < rightIndex; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        count++
      }
    }
	 rightIndex--

    for (let i = rightIndex; i > leftIndex; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
		  count++
      }
    }
	  leftIndex++
  }
  return count
 }
 
document.write(`<p>[${exampleArr}]</p>`)
 document.write(
   `<p><span>${mixSort} </span> - обмінів було під час сортування змішуванням. </p>`
 )






//=================================================================================
 
