// object 

let myInformation = {
    name : "Manish Basnet", 
    address : ["Itahari","Udayapur"], 
    age : 22, 
    college : "Namuna College"
}


let myProduct = {
    productName : "apple", 
    productPrice : 300, 
    productQty : 2
}

//array
let juttas = ["goldstar","addidas","nike","calibar"]
juttas.push("calibar") // adds to last 
juttas.pop() // remove last 

juttas.unshift("calibar") // adds to first 
juttas.shift() // remove firsts 

juttas[4] = "Umbro"
juttas[5] = "haha"
console.log(juttas[3]) //output: calibar

//object in array
let products = [
    {
        productName : "apple", 
        productPrice : 300, 
        productQty : 2
    },
    {
        productName : "banana", 
        productPrice : 100, 
        productQty : 3
    }
]   
console.log(products[0].productName) //output: apple



// Case (Casing)

// PascalCase (JAVA)

// iloveprogramming --> PascalCase --> ILoveProgramming -
// iamfromnepal --> PascalCase --> IAmFromNepal

// camelCase (Javascript)

// iloveprogramming --> camelCase --> iLoveProgramming
// iamfromnepal --> camelCase ---> iAmFromNepal


// kebab-case (VUE)
// iloveprogramming --> kebab-case --> i-love-programming

// snake_case(PYTHON)
// iloveprogramming --> i_love_programming
// iamfromnepal -->- i_am_from_nepal