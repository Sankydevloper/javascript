let compiled_languages = ["c", "c++", "c#"]
let interpreted_languages = ["python","javascript","Ruby"]
compiled_languages.push(interpreted_languages)
console.log(compiled_languages)
console.log(compiled_languages[3][1])


const store = compiled_languages.concat(interpreted_languages)
console.log(store)

let compileandinterpreted_languages = ["java"]
const all_languages = [...compiled_languages,...interpreted_languages,...compileandinterpreted_languages]
console.log(all_languages)

const real_array = [12,23,45,[32,11],2,5,[7,[67,99],0]]
const anotherreal_array = real_array.flat(Infinity)
console.log(anotherreal_array)
console.log(Array.isArray("465"))
console.log(Array.from("465"))
console.log(Array.isArray("sanket"))
console.log(Array.from("sanket"))
let num1 = 78
let num2 = 90
let num3 = 55
console.log(Array.of(num1,num2,num3))



