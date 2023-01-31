// const nums = [1,2,3,4,5,6,7,8,9];
// const squreNums = []

// nums.forEach(element => {
//     squreNums.unshift(element * element);
// });

// console.log(squreNums)


const nums = [1,2,3,4,5,6,7,8,9];

var squreNums = nums.map(num => {
    return num*num;
}).filter(num =>{
    if(num%2==0){
        return num;
    }
});



console.log(squreNums)