class Class {
    constructor(number) {
        this.number = number;
    }
    getDisplayName() {
        return 'Class ' + this.number;
    }
    assignLeader(student) {
        if (student.klass === this) {
            this.leader = student;
        } else {
            console.log('It is not one of us.');
        }
    }
    appendMember(student) {
        student.klass = this;
    }
    isIn(student) {
        return student.klass === this;
    }
}
module.exports = Class;