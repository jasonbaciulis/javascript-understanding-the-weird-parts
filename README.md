# JavaScript: Understanding the Weird Parts
These are my notes from the briliant course by [Tony Alicea](https://twitter.com/anthonypalicea) about learning in-depth JavaScript. If you want to learn how JavaScript engine works under the hood I highly recommend you to check out this course which you can find at [Udemy](https://www.udemy.com/understand-javascript/).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Define goals of success](#define-goals-of-success)
- [5 - Conceptual Aside - Syntax Parser, Execution Context, and Lexical Environment](#5---conceptual-aside---syntax-parser-execution-context-and-lexical-environment)
- [6 - Conceptual Aside - Name-Value Pairs and Objects](#6---conceptual-aside---name-value-pairs-and-objects)
- [7 - The Global Environment and The Global Object](#7---the-global-environment-and-the-global-object)
- [8 - The Execution Context - Creation & Hoisting](#8---the-execution-context---creation--hoisting)
- [9 - Conceptual Aside - Javascript and undefined](#9---conceptual-aside---javascript-and-undefined)
- [10 - The Execution Context - Code Execution](#10---the-execution-context---code-execution)
- [11 - Conceptual Aside - Single Threaded, Synchronous Execution](#11---conceptual-aside---single-threaded-synchronous-execution)
- [12 - Function Invocation and the Execution Stack](#12---function-invocation-and-the-execution-stack)
- [13 - Functions, Context, and Variable Environments](#13---functions-context-and-variable-environments)
- [14 - The Scope Chain](#14---the-scope-chain)
- [15 - Scope, ES6, and `let`](#15---scope-es6-and-let)
- [16 - What About Asynchronous Callbacks](#16---what-about-asynchronous-callbacks)
- [17 - Conceptual Aside Types And Operators](#17---conceptual-aside-types-and-operators)
- [18 - Primitive Types](#18---primitive-types)
- [19 - Conceptual Aside - Operators](#19---conceptual-aside---operators)
- [20 - Operator Precedence and Associativity](#20---operator-precedence-and-associativity)
- [21 - Conceptual Aside Coercion](#21---conceptual-aside-coercion)
- [22 - Comparison Operators](#22---comparison-operators)
- [23 - Existence and Booleans](#23---existence-and-booleans)
- [24 - Default Values](#24---default-values)
- [25 - Framework Aside: Default Values](#25---framework-aside-default-values)
- [26 - Objects and the Dot](#26---objects-and-the-dot)
- [27 - Objects and Object Literals](#27---objects-and-object-literals)
- [28 - Framework Aside: Faking Namespaces](#28---framework-aside-faking-namespaces)
- [29 - JSON and Object Literals](#29---json-and-object-literals)
- [30 - Functions are Objects](#30---functions-are-objects)
- [31 - Function Statements and Function Expressions](#31---function-statements-and-function-expressions)
- [32 - Conceptual Aside By Value vs By Reference](#32---conceptual-aside-by-value-vs-by-reference)
- [33 - Objects, Functions, and `this`](#33---objects-functions-and-this)
- [34 - Conceptual Aside - Arrays  - Collections of Anything](#34---conceptual-aside---arrays----collections-of-anything)
- [35 - `arguments` and spread](#35---arguments-and-spread)
- [36 - Framework Aside Function Overloading](#36---framework-aside-function-overloading)
- [37 - Conceptual Aside  - Syntax Parsers](#37---conceptual-aside----syntax-parsers)
- [38 - Dangerous Aside Automatic Semicolon Insertion](#38---dangerous-aside-automatic-semicolon-insertion)
- [39 - Framework Aside Whitespace](#39---framework-aside-whitespace)
- [40 - Immediately Invoked Functions Expressions (IIFEs)](#40---immediately-invoked-functions-expressions-iifes)
- [41 - Framework Aside IIFEs and Safe Code](#41---framework-aside-iifes-and-safe-code)
- [42 - Understanding Closures](#42---understanding-closures)
- [43 - Understanding Closures Pt. 2](#43---understanding-closures-pt-2)
- [44 - Framework Aside Function Factories](#44---framework-aside-function-factories)
- [45 - Closures And Callbacks](#45---closures-and-callbacks)
- [46 - `call()`, `apply()`, and `bind()`](#46---call-apply-and-bind)
- [47 - Functional Programming](#47---functional-programming)
- [48 - Functional Programming Pt. 2](#48---functional-programming-pt-2)
- [49 - Conceptual Aside Classical vs Prototypal Inheritance](#49---conceptual-aside-classical-vs-prototypal-inheritance)
- [50 - Understanding The Prototype](#50---understanding-the-prototype)
- [51 - Everything is an Object (Or a primitive)](#51---everything-is-an-object-or-a-primitive)
- [52 - Reflection and Extend](#52---reflection-and-extend)
- [53 - Functions Contructors, `new` And The History Of JavaScript](#53---functions-contructors-new-and-the-history-of-javascript)
- [54 - Function Constructors and `.prototype`](#54---function-constructors-and-prototype)
- [55 - Dangerous Aside `new` and functions](#55---dangerous-aside-new-and-functions)
- [56 - Conceptual Aside Built-In Function Constructors](#56---conceptual-aside-built-in-function-constructors)
- [57 - Dangerous Aside Built-In Function Constructors 2](#57---dangerous-aside-built-in-function-constructors-2)
- [58 - Dangerous Aside Arrays and `for`..`in`](#58---dangerous-aside-arrays-and-forin)
- [59 - `Object.create` and Pure Prototypal Inheritance](#59---objectcreate-and-pure-prototypal-inheritance)
- [60 - ES6 and Classes](#60---es6-and-classes)
- [61 - Initialization](#61---initialization)
- [62 - `typeof`, `instanceof`, and Figuring Out What Something Is](#62---typeof-instanceof-and-figuring-out-what-something-is)
- [63 - Strict Mode](#63---strict-mode)
- [64 - Learning From Other's Good Code](#64---learning-from-others-good-code)
- [65 - Deep Dive into Source Code jQuery - Part 1](#65---deep-dive-into-source-code-jquery---part-1)
- [66 - Deep Dive into Source Code jQuery - Part 2](#66---deep-dive-into-source-code-jquery---part-2)
- [67 - Deep Dive into Source Code jQuery - Part 3](#67---deep-dive-into-source-code-jquery---part-3)
- [68 - Requirements](#68---requirements)
- [73 - Good Commenting](#73---good-commenting)
- [76 - TypeScript, ES6, and Transpiled Languages](#76---typescript-es6-and-transpiled-languages)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Define goals of success
1. Be able to read jQuery source code and able to understand what is happening.
2. Complete and understand final project of writing own library. 
 
## 5 - Conceptual Aside - Syntax Parser, Execution Context, and Lexical Environment
**Syntax parser** - a program that reads your code and determines what it does and if its grammar/syntax is valid.

When you write JavaScript it isn't directly telling computer what to do. You're writing code, but then someone else built programs that convert your JS into something that computer can understand. Those programs are called compilers or interpreters.

**Compilers** go character by character and translate your code into a set of instructions. Important to understand is that during that process programmers who wrote that compiler can choose to do extra stuff. Your code is not what actually is given to a computer but a translation of it.

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

When parser runs through code it recognizes where you created variables and functions and it sets up memory space for them. So before your code begins to be executed, JS engine has already set aside memory space for all the variables and functions you created. When the code begins to execute line by line it can access it.

However, for variables JS engine puts a placeholder `undefined`, because it doesn't know what it's value will ultimately end up being until it starts executing that line of
code.
 
```javascript
console.log(a);

var a = 'Hello World!';
```

## 9 - Conceptual Aside - Javascript and undefined
**`undefined`** - is a special value, a keyword that JavaScript sets up to all variables during a creation phase of execution context. 

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

Primitives:

- **`undefined`** - represents lack of existence. You shouldn't set a variable to `undefined` yourself.
- **`null`** - also represents lack of existence. You can set a variable to `null`.
- **`boolean`** - `true` or `false`.
- **Number** - floating point number (there's always some decimals).
- **String** - a sequence of characters in 'single' or "double quotes".
- **Symbol** - used in ES6.

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

**`bind()`** creates a copy of a function it is attached to. E.g. `name.bind(obj)` inherits `this` from the object you pass to it as a parameter. `bind()` can also bind permanent parameters to the function: `name.bind(this, 1, 2)`. So when you call `name()` it will have parameters `1` and `2` already passed.

**`call()`** invokes the function but also lets you to decide what `this` variable will be, by passing an object: `call(object, 'param', 'param2')`. Unlike bind, it executes the function instead of copying it.

**`apply()`** is almost the same as `call()` but instead you need to pass an array as a parameter: `.apply(object, [parameters])`

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

`extend(obj, obj2, obj3)` takes all properties and methods of given objects and passes them to the first object.

It is not a built in feature but many libraries have it and ES6 have `extends`.

## 53 - Functions Contructors, `new` And The History Of JavaScript
**`new Function()`** creates an empty object and invokes a function. It also changes what `this` points to. It points to that empty object.

`new` lets construct an object via function.

**Function constructors** - a normal function that is used to construct objects. The `this` variable points to a new empty object, and that object is returned from the function automatically.

`new` keyword creates an object and functions constructors are used for adding properties and methods to that object.

## 54 - Function Constructors and `.prototype`
**`.prototype`** is a property that sits in every function in JavaScript but unless you use a function constructor with `new` operator it is never used.

A `.prototype` is **not** *the* prototype of a function object. It is only a prototype of objects created with a `new` keyword.

It's better to put your methods on the `prototype` to save memory space as it gets shared between all objects.

## 55 - Dangerous Aside `new` and functions
Any function that we intend to use as a function constructor should be named with a first capital letter. This makes it easier to spot errors in case you would miss `new` keyword.

Although worth mentioning that creating objects with function constructors is going away because of new methods and ES6.

## 56 - Conceptual Aside Built-In Function Constructors
JavaScript has some built it function constructors like: `new Number(3)` and `new String('Jason')`.

These constructors look like you're creating primitives but you are not. You are creating objects.

When you use some methods like `.length` on a string, your string is boxed in a `String` object automatically to get access to all its methods.
 
Although it doesn't work like that for numbers and you would need to create `Number` object first.

All these built-in function constructors have a prototype and you can actually add your own methods to it.

```javascript
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;  
}

console.log("John".isLengthGreaterThan(3));
```

## 57 - Dangerous Aside Built-In Function Constructors 2
It's best to avoid using built-in function constructors to create primitives because you're not creating primitives but rather objects.

```javascript
var a = 3;
var b = new Number(3);

a == b // will return true because of coersion
a === b // will return false because we are comparing object with a primitive
```

## 58 - Dangerous Aside Arrays and `for`..`in`
For arrays use standard `for` loop or `forEach`, but don't use `for in`. Because arrays are objects with `for in` you could iterate into a prototype.

## 59 - `Object.create` and Pure Prototypal Inheritance
```javascript
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;   
    }
}

var john = Object.create(person);
```

`Object.create(person)` - creates an empty object with its prototype pointing at whatever you passed in as a parameter.

```javascript
john.firstname = 'John';
john.lastname = 'Doe';
```

And you can override properties and methods by adding new ones to this object with the same names.

**Polyfill** - code that adds a feature which the engine may lack.

## 60 - ES6 and Classes
JavaScript has classes in ES6. However, it is not like a `class` in other languages. In other languages `class` is like a template. `class` in JS is an object by itself that you use to create other objects.

`class` doesn't change anything how objects and prototypes work under the hood. It just gives you a different way to type. Because of it you may hear JavaScript classes being called syntactic sugar.

**Syntactic sugar** - a different way to type something that doesn't change how it works under the hood.

## 61 - Initialization
Large arrays of objects are useful for testing and initialization before you have an actual data to pull from, like a JSON file.

## 62 - `typeof`, `instanceof`, and Figuring Out What Something Is
**`typeof`** is an operator (essentially a function) that excepts a parameter and returns a string.

**`instanceof`** will tell you if it has something in its prototype chain by returning a boolean.

```javascript
var a = 3;
console.log(typeof a); // returns a string 'number'

var b = "Hello";
console.log(typeof b); // returns a string 'string'

var c = {};
console.log(typeof c); // returns a string 'object'

var d = [];
console.log(typeof d); // also returns a string 'object', weird!

console.log(Object.prototype.toString.call(d)); // this little trick returns a string '[object Array]'

function Person(name) {
    this.name = name;
}
var e = new Person('Jane');
console.log(typeof e); // also an object

console.log(e instanceof Person); // returns true because Person is down the prototype chain of e

console.log(typeof undefined); // returns undefined, makes sense
console.log(typeof null); // returns an 'object', a bug since, like, forever... 

var z = function() { };
console.log(typeof z); // returns a 'function'
```

## 63 - Strict Mode
JavaScript is a more liberal of what it allows.

**`"use strict";`** - enforces more strict rules. E.g. in this mode you must declare var first to use it. In not strict mode if you forget to type `var`, it will still be created on the global object `window`.

You can use use strict at the top of the document or at the top of a function to use strict only inside it's execution context.

## 64 - Learning From Other's Good Code
There are many aspects of improving as a developer. One of the most powerful is learning from other's good code. There is a fantastic treasure trove of good code out there to learn from. Tony calls it "an open source education".

It may sound as fun as reading an encyclopedia, but you don't need to spend hours reading the source code. Find some area that's interesting to you. Don't get intimidated by famous libraries and what may seems complex patterns. Look at the structure, see what you could take away and imitate.

This is a great way to learn advanced patterns and concepts in JavaScript. So make a practice to occasionally look at the source code of the library or framework you're using.

## 65 - Deep Dive into Source Code jQuery - Part 1
When we're reading code we are not trying to understand how every feature is implemented. First, we'll try to see if we can read the code and learn how it is structured. And if we can learn some techniques and borrow some ideas.

## 66 - Deep Dive into Source Code jQuery - Part 2
jQuery has some good code you could borrow for your own projects. It has been developed and watched by many developers so it has some of the best methods and practices.

Inside jQuery there is Sizzle CSS Selector library for handling selectors.

## 67 - Deep Dive into Source Code jQuery - Part 3
**Method chaining** - calling one method after another, and each method affects the parent object.

So `obj.method1().method2()` where both methods end up with `this` variable pointing at `obj`.

## 68 - Requirements
First of all, before building any application let's think of the requirements. What this app/library should do?

## 73 - Good Commenting
Remember to write good comments for your code. Because even if you are the sole developer for a project you may need to come back after a year and you'll have to figure it out how everything works like it was someone else's code.

## 76 - TypeScript, ES6, and Transpiled Languages
**Transpile** - convert the syntax of one programming language, to another.

In this case, languages that don't really ever run anywhere, but instead are processed by transpilers that generate JavaScript.

**TypeScript** - one of the most popular transpiled languages and is created by Microsoft. The biggest difference that it uses strict types for its variables instead of dynamic types like JavaScript.