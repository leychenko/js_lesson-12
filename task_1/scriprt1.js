//================================= Задача 1 ====================================
// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою

function getRandomArray(arrow,minV,maxV) {
	let randumArr = []
	for (let i = 0; i < arrow; i++) {
		const arr = minV +Math.floor(Math.random()* (maxV - minV + 1))
		randumArr.push(arr)
	}
	 return randumArr
}
 const exampleArr = getRandomArray(30,1,100)
	let count = 0
	let counChangeNum 
	do {
		counChangeNum = false
		for (let i = 1; i < exampleArr.length; i++) {
			if(exampleArr[i-1] > exampleArr[i]){
				let temp = exampleArr[i - 1]
				exampleArr[i - 1] = exampleArr[i]
				exampleArr[i] = temp
				counChangeNum = true
				count ++
			}
    }
	} while (counChangeNum);
	
document.write(`<p>[${exampleArr}]</p>`)
document.write(
  `<p><span>${count}</span> обмінів було під час сортування бульбашкою</p>`
)


