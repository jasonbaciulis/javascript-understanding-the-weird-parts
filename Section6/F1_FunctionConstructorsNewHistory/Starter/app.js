function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
    console.log('This function is invoked');

}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);