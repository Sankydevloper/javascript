//object literals
const mysym = Symbol(91)
const user = {
    name: "Sanket",
    age: 19,
    over: true,
    "language":["java", "javascript"],
    email:"snaket@gmail.com",
    // mysym : 91,.......String
    [mysym]: 91//........Symbol
}
console.log(user.over)
console.log(user["over"])
console.log(user["language"])
//console.log(user.mysym)
//console.log(typeof user.mysym)
console.log(user[mysym])


user.name = "Raj"
console.log(user.name)
Object.freeze(user)
user.name="tinu"
console.log(user)


