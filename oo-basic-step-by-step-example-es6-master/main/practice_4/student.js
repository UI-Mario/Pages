import Person from "../../main/practice_4/person.js";
class Student extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return super.basic_introduce() + ' I am a Student. I am at Class ' + this.klass + '.';
    }
}

module.exports = Student;