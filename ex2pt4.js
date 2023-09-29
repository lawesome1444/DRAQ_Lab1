//2(d) .map function
//Age array
const ages = [25, 31, 42, 77];


let ageMultiply = ages.map((age)=>{
    //If the number is greater or equal to 70, do not double it. Otherwise, double the value
    if (age >= 70)
        return age;
    else
        return age * 2;
})

//Call the ageMultiply function and print the array out to console
console.log(ageMultiply);