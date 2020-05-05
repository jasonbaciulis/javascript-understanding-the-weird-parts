// IIFE
(function(global, name) {
    
    var greeting = 'Hello';
    global.greeting = 'Hello';
    console.log(greeting + ' ' + name);
    
}(window, 'John')); // IIFE

console.log(greeting);






















