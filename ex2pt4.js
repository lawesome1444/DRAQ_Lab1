//2(d) .map function
const ages = [25, 31, 42, 77];

let partD = ages.map((item)=>{
    //If the number is greater or equal to 70, do not double it. Otherwise, double the value
    if (item >= 70)
        return item;
    else
        return item * 2;
})

//Call partD function and print the array out to console
console.log(partD);