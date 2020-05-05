var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);
