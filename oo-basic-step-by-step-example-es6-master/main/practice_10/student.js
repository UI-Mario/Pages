import Person from "../../main/practice_10/person.js";

class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        if (this.klass.leader !== this) {
            return super.introduce() + ' I am a Student. I am at ' + this.klass.getDisplayName() + '.';
        } else {
            return super.introduce() + ' I am a Student. I am Leader of ' + this.klass.getDisplayName() + '.';
        }

    }
}
module.exports = Student;