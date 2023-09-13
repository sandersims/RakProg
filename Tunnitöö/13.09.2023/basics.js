
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

// const newArray = numberArray.map((element) => element + 5)
const newArray = numberArray.map((element, index, array) => {
    console.log({
    element: element,
    newElement: element + 5, 
    index, 
    array 
    })

    return element + 5
})



const filteredArray = numberArray.filter(element => element < 4)

console.log({numberArray, filteredArray})
// console.log(1 < 4)


const name = ['Juku', 'Jaanus', 'Mari', 'Anni']

const data = name.map(name => {
    return {
        name: name,
        age: name.length + 20,
        email: name.toLowerCase() + "@company.com",
        address: `${name} Street 69`,
        username: name.split("").reverse().join("")
    }
})


console.log(data)

const newJuku = {
    ...data[0],
    height: 175
}

const evenNewerJuku = {
    ...newJuku,
    age: 99
}
console.log({ newJuku, evenNewerJuku }) 