// long running function
function waitThreeSeconds() {
    let ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

document.addEventListener('click', clickHandler);
waitThreeSeconds();
console.log('finished execution');