 // Assingment to be done 
function iterate(i) {
for (let i = 1; i <=100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('the current element is: ',"fizz buzz");
  } else if (i % 3 === 0) {
    console.log('the current element is: ',"fizz");
  } else if (i % 5 === 0) {
    console.log('the current element is: ',"buzz");
  } else {
    console.log('the current element is: ', i );
  }
}
}
iterate(); 


console.log ('================================ javascript ==================================');

// No parameters
const greets = () => 'Hello, world!';
console.log(greets()); // Output: Hello, world!

// Single parameter
const squares = x => x * x;
console.log(squares(5)); // Output: 25

// Multiple parameters
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6

// With block body
const divide = (a, b) => {
  if (b === 0) {
    return 'Error: Division by zero';
  }
  return a / b;
};
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Error: Division by zero
console.log ('==================================== javascript ===============================');
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const john = new Person('John', 30);
john.greet(); 
console.log ('========================= javascript ====================================');
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    
  console.log(`${this.name} is studying Software Engineering.`);
  }
}

const jane = new Student('Jane', 27, 'A');
jane.greet();  // Output: Hello, my name is Jane and I am 22 years old.
jane.study();  // Output: Jane is studying.
console.log ('=============== javascript ======= CONST EXAMPLE BELOW ==================');
const PI = 3.14;
console.log(PI); // Output: 3.14

// PI = 3.14159; // Error: Assignment to constant variable.
console.log ('=============== javascript ========= LET EXAMPLE BELOW ==================');
let counter = 0;
counter = 1;
console.log(counter); // Output: 1

if (true) {
let counter = 2; 
console.log(counter); // Output 2 (inside block)
}

console.log(counter); // Output 1 (outside block)
console.log ('================== javascript ===========ES6 MODULES =========================');
