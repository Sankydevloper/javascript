// syntax of for of loop
//for (const iterator of object) {    }

let arr = [{1:`high school`},{2:`college`},{3:`University`}]
for (const index of arr) {
    console.log(index);
}


//maps
const maps = new Map()
maps.set('IN','India')
maps.set(`us`,`United states`)
maps.set('ussr',`russia`)
console.log(maps);
for (const [key,value] of maps) {
 console.log(value);  
}


let newobj = {
    pears:"fruit",
    rose:"flower",
    papaya:"vegetable"
}
for (const key in newobj) {
   console.log(`the thing is ${key},the type is ${newobj[key]}`)
}

const news =["republic bharat","news 18","otv"]
for (const key in news) {
    console.log(key);
    //the index number of array are its keys 
    console.log(news[key]);
}


//for each
news.forEach(function (item){
    console.log(item);
})


function create(item){console.log(item);}

news.forEach(create)



