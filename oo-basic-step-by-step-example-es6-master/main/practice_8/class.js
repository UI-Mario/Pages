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
        }
    }
}
module.exports = Class;