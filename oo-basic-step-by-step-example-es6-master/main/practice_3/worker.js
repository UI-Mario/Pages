import Person from "../../main/practice_3/person.js";
class Worker extends Person {
    constructor(name, age) {
        super(name, age);
    }

    introduce() {
        return 'I am a Worker. I have a job.';
    }

}

module.exports = Worker;