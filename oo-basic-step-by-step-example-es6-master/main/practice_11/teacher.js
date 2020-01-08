import Person from "../../main/practice_10/person.js";

class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        if (this.klasses) {
            const klasses = this.klasses.reduce(function(previousValue, currentValue) {
                return previousValue.number + ', ' + currentValue.number;
            });
            return super.introduce() + ' I am a Teacher. I teach Class ' + klasses + '.';
        } else {
            return super.introduce() + ' I am a Teacher. I teach No Class.';
        }
    }

    introduceWith(student) {
        if (student.klass in this.klasses) {
            return super.introduce() + ' I am a Teacher. I teach ' + student.name + '.';
        } else {
            return super.introduce() + ' I am a Teacher. I don\'t teach ' + student.name + '.';
        }
    }
    isTeaching(student) {
        for (let i = 0; i < this.klasses.length; i++) {
            if (this.klasses[i].isIn(student)) {
                return true;
            }
        }
    }

}
module.exports = Teacher;