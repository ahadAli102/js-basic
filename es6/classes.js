
// es6 class, object, set, get
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    set studentName(name) {
        this.name = name;
    }
    get studentInfo() {
        return this.id + " " + this.name;
    }
}

let s1 = new Student(101, "Ahad");
s1.studentName = 'Name';
console.log(s1.studentInfo);