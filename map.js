// 1. Define a function with two parameters, assigning a default value to the second one. Call it with both one and two arguments,
//and show the outputs.

let myself=(greeting,text='hi') => {
    return `${greeting},${text}`
}
console.log(myself('hellow','world'))

// output:hellow,world

// 2. Create a function that takes a name and a city as input and returns a multi-line message using template literals,
//  incorporating both variables

let address = (name,city) =>{
    return `My name is ${name}.
    The name of my city is ${city}`
}
console.log(address('Mitu','Khulna'))

// output:My name is Mitu.
// The name of my city is Khulna


//3. Combine two arrays using the spread operator and find the maximum value in the merged array.

let arr1 = [1,4,6,7]
let arr2 = [5,9,7,8]
let Combines = [...arr1,...arr2]
let maxValue = Math.max(... Combines)
console.log(maxValue)

// output:9


//4. Create an object with properties name, age, and country, and use destructuring to extract them into variables.
//  Also, destructure an array of five numbers to get the first two elements.


let object={fName:'Mitu',age:28,country:'Bangladesh'};

let {fName,age,country} = object;
console.log(age)
console.log(fName)
console.log(country)
// output:28
// Mitu

 let students=['rahim','karim','rahul','akash']
 let [a,b]=students;
 console.log(a)
 console.log(b)

//  output:rahim
// karim



// 5. Access the city property of a nested object using both dot notation and optional chaining.
// Bangladesh

let person={
    Name:'Mitu',
    age:28,
    address:{
        country:'bangladesh',
        city:'khulna'
    }

}

let city1=person.address.city
console.log(city1)

let city =person.address?.city
console.log(city)

// 6.Given an array of student objects with properties name and marks, use:map() to extract the names.


let student = [
    { name: "rabbi", marks: 77 },
    { name: "Rafi", marks: 71 },
    { name: "Ruhan", marks: 98 },
    { name: "akash", marks: 44 }
];

let studentName=student.map(student=>{
    return student.name
})
console.log(studentName)

let studentMarks=student.map(student=>{
    return student.marks
})
console.log(studentMarks)


// 7. filter() to return students with marks above 80.

let student2 = [
    { name: "rabbi", marks: 77 },
    { name: "Rafi", marks: 71 },
    { name: "Ruhan", marks: 98 },
    { name: "akash", marks: 44 }
];

let averageMark = student2.filter(student =>{
    return student.marks>70
})
console.log(averageMark)

// 8.Use map() on a string array to create a new array where each string is prefixed with "Hello, ".


let names=['rahim','karim', 'jannat']

let stringArray=names.map(name=>{
    return `hello,${name}`
})
console.log(stringArray)


// 9. Given an array of objects, use filter() to return all objects where a specific condition is met 
// (e.g., products priced above a certain amount).



let products = [
    { name: "monitor ", price: 500 },
    { name: "tv", price: 700 },
    { name: "Phone", price: 300 },
    { name: "remote", price: 200 },
    { name: "Keyboard", price: 100 }
];
let allProducts= products.filter(products=>{
    return products.price>300
} )
console.log(allProducts)


// 10. You have an array of product objects, where each product has a name and price. Write a function 
// that uses the map method to create a new array of strings. Each string should contain the product's
//  name and price formatted as Product: [name] costs $[price].


let product = [
    { name: "monitor ", price: 500 },
    { name: "tv", price: 700 },
    { name: "Phone", price: 300 },
    { name: "remote", price: 200 },
    { name: "Keyboard", price: 100 }
];
let allProduct= product.map(product=>{
    return `product:${product.name} costs:${product.price}`
})
console.log(allProduct)



