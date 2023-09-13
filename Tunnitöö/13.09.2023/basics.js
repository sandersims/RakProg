
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function findMyIndex(array, element){
   
    return array.indexOf(element)
}

console.log(findMyIndex(array, 4))


function addNumbers(num1, num2){
    return num1 + num2;
}

console.log(addNumbers(34, 35))

const arrowFunction = (num1, num2) => num1 + num2
console.log(arrowFunction(3, 5))

const addNumbers2 = (num1, num2) =>{
    return function addNumbersHelper(num2){
        return num1 + num2
    }
}

console.log(addNumbers2(3)(4))

const nameString = (name) => `Name is ${name}`

console.log(nameString("Sander"))


const numberArray = [1, 2, 3, 4, 5]

const newArray = numberArray.map((n) => n + 5)
console.log(newArray)