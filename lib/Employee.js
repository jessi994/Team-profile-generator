// TODO: Write code to define and export the Employee class
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }
    getEmail() {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (emailRegex.test(this.email)){
            return this.email;
        } else{
            throw new Error("Invalid Email Address");
        }
        
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;