function sayHiLater() {

    var greeting = 'Hi!';

    setTimeout(function() {

        console.log(greeting);
        
    }, 3000);

}

sayHiLater();