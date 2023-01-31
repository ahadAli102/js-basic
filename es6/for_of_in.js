const names = ['ahad','ali','linkon'];
for (const name of names) {
    console.log(name);
}

function student(name,age) {
    return{
        name,
        age
    }
}
const object = student('Ahad',21)
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element);
    }
}

names.forEach(element => {
    console.log(element);
});
