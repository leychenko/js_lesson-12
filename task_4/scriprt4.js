//================================= Задача 4 ====================================
// Задача 4.Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.

const exampleArr = getRandomArray(5, 1, 100)
const exampleArr2 = [...exampleArr]
const exampleArr3 = [...exampleArr]
function getRandomArray(arrow, minV, maxV) {
  let randumArr = []
  for (let i = 0; i < arrow; i++) {
    const arr = minV + Math.floor(Math.random() * (maxV - minV + 1))
    randumArr.push(arr)
  }
  return randumArr
}
//========================================================================================================================================================
// функція сортування бульбашкою
const sortBubbleArr = getBubbleSortTable(exampleArr)

function getBubbleSortTable(arr) {
	let counChangeNum
	let result = ''
  do {
    counChangeNum = false
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = temp
		  result += `[${arr}]<br>`
        counChangeNum = true
      }
    }
  } while (counChangeNum)
  return result
}


//=============================================================================

const sortMixArr = getMixSorting(exampleArr2)
function getMixSorting(arr) {
	let results = ''
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex < rightIndex) {
    for (let i = leftIndex; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
		  results += `[${arr}]<br>`

      }
    }
    rightIndex--

    for (let i = rightIndex; i > leftIndex; i--) {
      if (arr[i] < arr[i - 1]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
        results += `[${arr}]<br>`

      }
    }
    leftIndex++
  }
  return results
}
//========================================================================================================================================================
const sortOnArr = getOnSorting(exampleArr3)

function getOnSorting(arr) {
	let key, i
  let result = ''
  for (let k = 1; k < arr.length; k++) {
    key = arr[k]
    i = k - 1
    while (i >= 0 && arr[i] > key) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      i = i - 1
		 result += `[${arr}]<br>`
    }
  }
  return result


}






document.write(`<p>Сортування бульбашкою</p>
					<p>${sortBubbleArr}</p>
					<p>Змішане сортування</p>
					<p>${sortMixArr}</p>
					<p>Сортування включеннями</p>
					<p>${sortOnArr}</p>`)




