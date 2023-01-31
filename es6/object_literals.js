function student(name,age) {
    return{
        name,
        age
    }
}
// console.log(student('Ahad',21));

let message1 = {
    body(){
        return 'Hi! I am object function';
    }
}

console.log(message1.body());


let message2 = {

    'another body'(){
        return 'Hi';
    }
}

console.log(message2['another body']());