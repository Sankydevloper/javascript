//filter

const num = [9,8,0,6,5]

const store = num.filter((n)=>{
    return n>7
})
//console.log(store);


//using for each

const newnum =[]
num.forEach((n)=>{
    if(n>7){
        newnum.push(n)
    }
})
//console.log(newnum);

//maps
let newarray = [23,12,9,78,21]

const save = newarray.map((num)=> (num + 10))
//console.log(save);

//using foreach in maps
let lastarray = [];
newarray.forEach((n)=> {
    lastarray.push(n+10)
}
)
//console.log(lastarray)


//chaining 

let final_array = [1,2,4,7,9]

const chain = final_array.map((number)=>{return number*10})
                         .filter((number)=>{ return number<60})
                        .map((n)=>{ return n+5})
console.log(chain)




