
# JavaScript: Understanding the Weird Parts
These are my notes from the briliant course by Tony Alicea about learning in-depth JavaScript. If you want to learn how JavaScript engine works under the hood I highly recommend you to check out this course which you can find at [Udemy](https://www.udemy.com/understand-javascript/).

## Define goals of success
1. Be able to read jQuery source code and able to understand what is happening.
2. Complete and understand final project of writing own library. 
 
## 5 - Conceptual Aside - Syntax Parser, Execution Context, and Lexical Environment
**Syntax parser** - a program that reads your code and determines what it does and if its grammar/syntax is valid.
When you write JavaScript it isn't directly telling computer what to do. You're writing code, but then someone else built programs that convert your JS into something that computer can understand. Those programs are called **compilers** or interpreters. 
They go character by character and translate your code into a set of instructions. 
Important to understand is that during that process programmers who wrote that compiler can choose to do extra stuff. 
Your code is not what actually is given to a computer but a translation of it.

**Lexical environment** - where something sits physically in the code you write and what surrounds it. In JavaScript where you write something is important.

**Execution context** - a wrapper to help manage the code that is running.
There are lots of lexical environments, areas of the code that you look at physically, but which one is currently running is managed via execution contexts.
Execution context contains your running code, but it can also contain things beyond what you've written in your code. Because remember that your code is being translated by a syntax parser. 
 
## 6 - Conceptual Aside - Name-Value Pairs and Objects
**Name value pair** - a name which maps to a unique value. The name may be defined more than once, but can only have one value in any given execution context.
**Object** - is a collection of name value pairs. 
 
## 7 - The Global Environment and The Global Object
**Global execution context** - the base execution context. It creates global object and special variable called `this`. In a browser `this` global object is `window`.

## 8 - The Execution Context - Creation & Hoisting
**Hoisting** - because of the way JS works, you can write in your code a call to a function before an actual function and it will execute without any errors. 

```javascript
b();

function b() {
	console.log('This works!');
}
```

This is how it works.
When parser runs through code it recognizes where you created variables and functions and it sets up memory space for them. So before your code begins to be executed, JS engine has already set aside memory space for all the variables and functions you created. So when the code begins to execute line by line it can access it.
However, for variables JS engine puts a placeholder `undefined`, because it doesn't know what it's value will ultimately end up being until it starts executing that line of
code. 
 
```javascript
console.log(a);

var a = 'Hello World!';
```

## 9 - Conceptual Aside - Javascript and undefined
`undefined` - is a special value, a keyword that JavaScript sets up to all variables during a creation phase of execution context. 

## 10 - The Execution Context - Code Execution
In the execution phase JS engine runs your code line by line. 

## 11 - Conceptual Aside - Single Threaded, Synchronous Execution
**Single threaded** - JavaScript is a single threaded, synchronous language. That means one command execution at a time. Maybe not under the hood of the browser but from our perspective as programmers it is single threaded.

**Synchronous execution** - means one at a time and in order that it appears. 

## 12 - Function Invocation and the Execution Stack
**Invocation** - running or calling a function by using parenthesis `()`.

**Execution Stack** - every time you invoke a function a new execution context is created for that function and is put on top of execution stack.

## 13 - Functions, Context, and Variable Environments
**Variable environments** - where the variables live and how they relate to each other in memory. Every execution context has its own variable environment.

## 14 - The Scope Chain
If JavaScript engine doesn't find variable in it's own environment it looks in the outer environment. That whole process of searching of variable in outer lexical environments down the chain is called the **scope chain**.

So in this example `myVar` would actualy log `1` even though it sits inside a function which is inside another. `myVar` sits in the outer global environment so JS will go down the scope chain until it finds it.

```javascript
function a() {
    
    function b() {
        console.log(myVar);
    }
    
	b();
}

var myVar = 1;
a();
```

## 15 - Scope, ES6, and `let`
**Scope** - where a variable is available in your code. And if it's truly a new variable, or a new copy.

## 16 - What About Asynchronous Callbacks
**Asynchronous** - executed more than one at a time. What is happening inside JS engine is synchronous. Its just the browser is putting things asynchronously in the event queue.

**Event queue** - events like click and others are placed in the queue. And this queue starts to get processed in the order it happened only when execution stack is empty.

## 17 - Conceptual Aside Types And Operators
**Dynamic typing** - you don't tell the engine what type of data a variable holds, it figures out while your code is running. Variable can hold different types of values because it's all figured out during execution.

## 18 - Primitive Types
**Primitive type** - a type of data that represents a single value. That is, not an object.

`undefined` - represents lack of existence. You shouldn't set a variable to `undefined` yourself.

`null` - also represents lack of existence. You can set a variable to `null`.

`boolean` - `true` or `false`.

**Number** - floating point number (there's always some decimals).

`string` - a sequence of characters in 'single' or "double quotes".

**Symbol** - used in ES6.

## 19 - Conceptual Aside - Operators
**Operator** - a special function that is written differently. Generally operators take two parameters and return result.

## 20 - Operator Precedence and Associativity
**Operator precedence** - which operator function gets called first on the same line of code. Functions are called in order of precedence (higher precedence wins).

**Associativity** - what order operator functions get called in: left-to-right or right-to-left when functions have the same precedence.

Operator precedence table: [https://developer.mozilla.org/Operator_Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## 21 - Conceptual Aside Coercion
**Coercion** - converting a value from one type to another. This happens quite often in JavaScript because it's dynamically typed. For example adding a number to a string would result in number being converted to a string:

```javascript
7 + '7'// would be = '77'
 ```

## 22 - Comparison Operators
When `true` is coerced to number it is `1`.

When `false` is coerced to number it is `0`.

When `null` is coerced to number it is `0`.

When `undefined` is coerced to number it is `NaN`.

`===` is a strict comparison operator and doesn't do conversion. So it's the best practice to always use it to prevent strange bugs due to conversion.

## 23 - Existence and Booleans
`undefined`, `null` and `''`(empty strings) is converted to boolean `false`.

We can use that to our advantage. This pattern is used in many JS libraries and good open source code. 
Whatever is in parenthesis of if statement it is converted to a boolean. 
So this statement returns `true` if `a` is set or `false` if not.

```javascript
var a;

if (a) {
	console.log('Something is there.');
}
```
Also worth mentioning that `false || true` returns `true.` 

## 24 - Default Values
If you pass two values to `||` operator it will return a first one which returns `true`.

This pattern is used in many open source code:

```javascript
var name = name || "your name";
``` 

This way you can set a default parameter value in case no arguments are passed during invocation of a function.

## 25 - Framework Aside: Default Values
When using a few libraries to avoid overwriting vars, most libraries use this pattern:

```javascript
window.variableName = window.variableName || "String";
```

## 26 - Objects and the Dot
**Objects** are name value pairs that are sitting in memory and have references to other things inside them like properties and methods.

Object can have a primitive(string, boolean) and that will be called a **property**. It can have another object and it will also be a property.

Object can also contain a function and it is called a **method**.


```javascript
var person = new Object();
person['firstName'] = 'Jason';

person.address = "111 Main St.";
```

Since `firstName` doesn't exist on person object, we create it using brackets operator and give a value to it (property).
Dot is an operator that works from left to right. It allows to access or set an object's properties.

## 27 - Objects and Object Literals
Object literal syntax is more clean and preferred way to create objects.

```javascript
var Jason = { 
    firstname: 'Jason', 
    lastname: 'Baciulis',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};
```

## 28 - Framework Aside: Faking Namespaces
**Namespace** - a container for variables and functions. Typically to keep variables and functions with the same name separate.

You can prevent name collisions by using objects to store properties: 

```javascript
var english = {}; 
english.greet = 'hello';
```

## 29 - JSON and Object Literals
**JSON** - JavaScript object notation is inspired by JS. In JSON property names must be wrapped in double quotes.

`JSON.stringify(objectLiteral)` - converts object to JSON.

`JSON.parse()` - converts to a JavaScript object.

## 30 - Functions are Objects
In JavaScript functions are objects.

**First class functions** - everything you can do with other types you can do with functions. Assign them to variables, pass them around as parameters to other functions, you can create functions on the fly.

Just like any object, function object resides in memory. Though, it's a special type of object because it has all the features of a normal object but has some other special properties. It's hidden special properties:

**Name** - though it can be anonymous ant not have a name.

**Code property** - where the actual lines of code sit.

The code that you write gets placed in the special property of the function object. So it isn't like the code you write *is* a function. The function *is* an object with other properties. And the code that you write is just one of those properties that you're adding onto it. What is special about that property that it's invocable. You can say run that code and that's when execution context creation and execution happens.

It's important that you have this mental model of functions in your mind. You have to think of functions as objects whose code just happens to be one of the properties. 
There are other things that functions can have attached to it. And it can be moved around and copied just like other object.

You have to think about **functions as more than just containers of code**.

## 31 - Function Statements and Function Expressions
**Expression** - a unit of code that results in a value. Statements just do work, bet expressions end up creating value. That value doesn't necessarily have to be saved to a variable.

E.g. `1 + 2` is a function expression that return a value of `3`. Do you remember how we covered that `+` operator is a function?

This is regular function statement:

```javascript
function greet() {
	console.log('hi');
}
```

It is put into memory. But it doesn't return a value until a function is invocated.

This is expression:

```javascript
var anonymousGreet = function() {
	console.log('hi');
}
```

Remember functions are objects. So it creates an object on the fly and sets it equal to the variable `anonymousGreet`. So when your code runs in the execution phase, sees the first function it just says "yeah there is function" and does nothing, just keeps going. But when it sees a variable it results in a value of a function object being created.
That's why you can call function statement before it but function expression will throw an error as "undefined is not a function" because that function is not yet created.

## 32 - Conceptual Aside By Value vs By Reference
**By value** (primitives):

```javascript
var a = 3; b = a;
``` 

When you set `b` equals to `a`, equals operator sees these are primitives creates a new spot in memory and makes a copy of it. `b` and `a` will be both `3` but they are copies sitting on separate spots in memory. So if I change `a = 5` it doesn't affect `b`, it is still `3`, because after making a copy these values are on their own.

**By reference** (all objects including functions):

```javascript
var c = {greetings: 'hi'};
var d;
d = c;
```
Equals operator sees there is an object so it simply points to the same spot in memory.

After changing a value of an object: `c.greetings = 'hello'` `d` would change as well.

**Mutate** means change something.

## 33 - Objects, Functions, and `this`

`this` inside a function points to global object.

`this` inside a method points to that object from which it is called. Left of the dot rule.

But `this` inside a function which is inside a method will point to the global object.

With ES5 JavaScript using `var` you could solve this by setting inside a method `var _this = this;` which is a very common pattern.

## 34 - Conceptual Aside - Arrays  - Collections of Anything
**Arrays** can hold a mix of anything: functions, primitives, objects.

## 35 - `arguments` and spread
**Arguments** are the parameters you pass to a function. JS creates a keyword of the same name which is an array-like that contains all parameters that you passed.

In ES6 we can do: `function greet(firstname, ...other)` and `other` will be an array that contains the rest of the arguments.

## 36 - Framework Aside Function Overloading
You can call one function which inside calls another function with a certain set of parameters.

## 37 - Conceptual Aside  - Syntax Parsers
JavaScript engine is syntax parser in the browser.

## 38 - Dangerous Aside Automatic Semicolon Insertion
Semicolons are optional in JS because JS engine injects them automatically.
But it is a bad practice to not put them because you want to know what code you are writing.

## 39 - Framework Aside Whitespace
**Whitespace** - invisible characters that create space in your code: returns, tabs, space.

## 40 - Immediately Invoked Functions Expressions (IIFEs)
Using an Immediately Invoked Function Expression (IIFE):

```javascript
var firstname = 'John';

(function(name) {
    
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
    
}(firstname)); // IIFE
```

Function statements can't be anonymous.

Everything inside a parenthesis is considered expression.

## 41 - Framework Aside IIFEs and Safe Code
**IIFE** creates a new execution context so it's safe code because it is wrapped in separate execution context and prevents variable names collision.
Wrapping code libraries is very common pattern to not clash code with the global object.
You can reference to global object by passing `window` as a parameter.

## 42 - Understanding Closures
When a function runs and completes it is removed from execution stack, but variables created and saved in that execution phase are still stored in memory and can be accessed from down the scope.

```javascript
function greet(whattosay) {

   return function(name) {
	   console.log(whattosay + ' ' + name;
   }
	
}

var sayHi = greet('Hi');
sayHi('Jason');
```

Inside the variable `sayHi` we run `greet` function which returns another function and passes string `'Hi'`. After that functions is finished and it is popped from the execution stack. But `whattosay` variable still sits saved in the memory with a value `Hi`. So when we call function `sayHi` it will go in the outer environment and look for whattosay variable and will find it and log "Hi Jason".
We describe this proccess as execution context has closed in outer variables.

## 43 - Understanding Closures Pt. 2
Pay attention when functions are executed to understand where it will look for variables down the scope chain.

## 44 - Framework Aside Function Factories
Every time function is called it creates a new execution context and its variable environment which sits in that specific space in memory. So even if you call the same function again and it creates a new variable of the same name. It doesn't overwrite it, because it is created in a separate environment and sits in the different space in the memory.

## 45 - Closures And Callbacks
**Callback function** - a function you give to another function to be run when the other function is finished.

## 46 - `call()`, `apply()`, and `bind()`
Because functions are objects, all functions have access to built-in `call()`, `bind()` and `apply()` methods.

`bind()` creates a copy of a function it is attached to. I.e `name.bind(obj)` inherits `this` from the object you pass to it as a parameter. `bind()` can also bind permanent parameters to the function: `name.bind(this, 1, 2)`. So when you call `name()` it will have parameters `1` and `2` already passed.

`call()` invokes the function but also lets you to decide what `this` variable will be, by passing an object: `call(object, 'param', 'param2')`. Unlike bind, it executes the function instead of copying it.

`apply()` is almost the same as `call()` but instead you need to pass an array as a parameter: `.apply(object, [parameters]);
`
In practice, you can use `call()` and `apply()` to borrow methods/functions from objects and use on another object with the same property names.

**Function currying** - creating a copy of a function but with some preset parameters.

## 47 - Functional Programming
A mapping function is a function which takes one array and outputs another array. It is very powerful and useful technique that you will see in codebases.

```javascript
function mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])   
        )
    };
    
    return newArr;
}
```

You should avoid mutating/changing things. That's why it is better to return a new array than change existing one.

## 48 - Functional Programming Pt. 2
Open source libraries are great educational tools. So take the time to read some of the most popular ones like jQuery, React.

## 49 - Conceptual Aside Classical vs Prototypal Inheritance
**Inheritance** - one object gets access to properties and methods of another object.

**Classical inheritance** is the way it's been done a long time, it's what Java, C# uses. It's very verbose.
**Prototypal** is much simpler, flexible, extensible, easy to understand.

## 50 - Understanding The Prototype
All objects have built-in prototype property, including functions. Each prototype can also have its own prototype.
Each object inherits properties and methods of other objects through a prototype. So if you call a property on one object and it doesn't find it there it goes the prototype chain and looks for it on a prototype.

## 51 - Everything is an Object (Or a primitive)
Functions, arrays, and objects all have their prototype that's why we say that everything is an object in JavaScript.
All objects, functions, arrays have their prototype pointing to the special object where you can access methods like `call()`, `bind()`, `push()`. 

## 52 - Reflection and Extend
**Reflection** - an object can look at itself, listing and changing its properties and methods.

`extend(obj, obj2, obj3)` takes all properties and methods of given objects and shares them between those objects.

It is not a built in feature but many libraries have it and ES6 have `extends`.

## 53 - Functions Contructors, `new` And The History Of JavaScript
`new Function()` creates an empty object and invokes a function. It also changes what `this` points to. It points to that empty object.
`new` lets construct an object via function.

**Function constructors** - a normal function that is used to construct objects. The `this` variable points to a new empty object, and that object is returned from the function automatically.

`new` keyword creates an object and functions constructors are used for adding properties and methods to that object.

## 54 - Function Constructors and `.prototype`
`.prototype` is a property that sits in every function in JavaScript but unless you use a function constructor with `new` operator it is never used. A `.prototype` is **not** *the* prototype of a function object. It is only a prototype of objects created with a `new` keyword.

It's better to put your methods on the `prototype` to save memory space and it gets shared between all objects.

## 55 - Dangerous Aside `new` and functions

## 56 - Conceptual Aside Built-In Function Constructors

## 57 - Dangerous Aside Built-In Function Constructors 2

## 58 - Dangerous Aside Arrays and `for`..`in`

## 59 - `Object.create` and Pure Prototypal Inheritance

## 60 - ES6 and Classes

## 61 - Initialization
Large arrays of objects is useful for testing and initialization

## 62 - `typeof`, `instanceof`, and Figuring Out What Something Is
typeof returns a type of variable
array is returned as an object
e instanceof Person - return true if e is down the prototype chain
typeof null returns an object - it's a bug

## 63 - Strict Mode
"use strict"; - in this mode you must declare var first to use it. In not strict mode if you forget to type var, it will still be created on global object window.
You can use use strict at the top of the document or at the top of a function to use strict only inside it's execution context

## 64 - Learning From Other's Good Code
Reading good open source code of libraries and apps you're using is valuable way of learning.

## 65 - Deep Dive into Source Code jQuery - Part 1
jQuery has some good code you could borrows for your own projects. I has been developed and watched by many developers so it probably has some of the best methods and practices.

## 66 - Deep Dive into Source Code jQuery - Part 2

## 67 - Deep Dive into Source Code jQuery - Part 3

## 68 - Requirements

## 69 - Structuring Safe Code

## 70 - Our Object and Its Prototype

## 71 - Properties and Chainable Methods

## 72 - Adding jQuery Support

## 73 - Good Commenting

## 74 - A Side Note

## 76 - TypeScript, ES6, and Transpiled Languages

## 77 - Existing and Upcoming Features