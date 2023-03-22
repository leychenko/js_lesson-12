

//================================= Задача 6 ====================================
// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.

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

const sortAllNames = sortNames(arrNames)

function sortNames(arr) {
  let key, i
  for (let k = 1; k < arr.length; k++) {
    key = arr[k]
	 nameLength = arr.length
    i = k - 1
    while (i >= 0 && arr[i].length > nameLength) {
      arr[i + 1] = arr[i]
      i = i - 1
    }
    arr[i + 1] = key
  }
  return arr
}
document.write(`<p>[${sortAllNames}]</p>`)

const getElementMoreFive = binarySearchNameMoreFive(sortAllNames, 5)

function binarySearchNameMoreFive(arr, elementLength) {
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (arr[middle].length === elementLength) return [arr[middle],middle]
    if (arr[middle].length < elementLength) start = middle + 1
    if (arr[middle].length > elementLength) end = middle - 1
  }
  return -1
}



if (getElementMoreFive !== -1) document.write(
  `<p>Ім'я довжиною п'ять літер - <span>'${getElementMoreFive[0]}'</span></p>
  <p>Ім'я знаходиться за індексом - <span>${getElementMoreFive[1]}</span></p> `
)
else document.write(`В цьому масиві нема імені такої довжини`)





