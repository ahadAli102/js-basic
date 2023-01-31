const taskOne = () => {
    console.log(`Task 1`);
};

const taskTwo = (callback) => {
    setTimeout(() => {
        console.log(`Task 2`);
        console.log("------------------------------------");
        callback();
    }, 2000);
};

const taskThree = () => {
    console.log(`Task 3`);
};
const taskFour = () => {
    console.log(`Task 4`);
};

taskOne()
taskTwo(()=>{
    taskThree()
    taskFour()
})