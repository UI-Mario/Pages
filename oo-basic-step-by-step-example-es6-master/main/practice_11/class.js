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
            if (student.klass.assignLeaderListener) {
                console.log('I am ' + student.klass.assignLeaderListener.name + '. I know ' +
                    student.name + ' become Leader of ' + student.klass.getDisplayName() + '.');
            }

        } else {
            console.log('It is not one of us.');
        }
    }
    appendMember(student) {
        student.klass = this;
        if (student.klass.joinListener) {
            console.log('I am ' + student.klass.joinListener.name + '. I know ' +
                student.name + ' has joined ' + student.klass.getDisplayName() + '.');
        }
    }
    isIn(student) {
        return student.klass === this;
    }
    registerAssignLeaderListener(teacher) {
        this.assignLeaderListener = teacher;
    }
    registerJoinListener(teacher) {
        this.joinListener = teacher;
    }
}
module.exports = Class;