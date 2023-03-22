//================================= Задача 5 ====================================
// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

const arrNames = [
  "Ira",
  "Koly",
  "Serega",
  "Andrew",
  "Olga",
  "Ira",
  "Ina",
  "Sveta",
  "Igor",
  "Maks",
]
const sortNames = sortNameOlga(arrNames)
 
function sortNameOlga(arr) {
let key, i
  for (let k = 1; k < arr.length; k++) {
    key = arr[k]
    i = k - 1
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i]
		i = i - 1
    }
    arr[i + 1] = key
	}
	return arr
}

const findIndexNameOlga = findIndexBinarySearchNameOlga(sortNames,'Olga')

function findIndexBinarySearchNameOlga(arr,searchName) {
let start = 0
  let end = arr.length - 1
  while (start <= end) {
	let middle = Math.floor((start + end) / 2)
	if(arr[middle] === searchName) return middle
	if(arr[middle] < searchName) start = middle +1
	if (arr[middle] > searchName) end = middle - 1
  }
  return -1
}


document.write(`<p>[${sortNames}]</p>`)
document.write(
  `<p>Ім’я «Olga» під індексом - <span> ${findIndexNameOlga}</span></p>`
)