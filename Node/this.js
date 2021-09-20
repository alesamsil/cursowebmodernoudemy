console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis () {
    console.log('dentro da função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

}

logThis()