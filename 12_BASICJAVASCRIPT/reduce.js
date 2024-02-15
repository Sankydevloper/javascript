let array = [2,4,3,5]

const total = array.reduce(function(accumulator,currentvalue){
    console.log(`accumulator value ${accumulator}and current value ${currentvalue}`)
    return accumulator + currentvalue
},5)
console.log(total);

//arrow function
const finalize = array.reduce((acc,curr)=>(acc+curr),0);
console.log(finalize);



