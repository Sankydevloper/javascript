//for loop syntax

for (let index = 0; index < 10; index++) {
    const element = index; 
   // console.log(element)  
}

//inner and outer loop

for (let i = 0; i < 5; i++) {
    console.log(`outer loop ${i}`)
    for (let j = 0; j < 5; j++) {
       console.log(`inner loop ${j}`)
    }
}

