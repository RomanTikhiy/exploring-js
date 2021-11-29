let person = {
    name: 'Roman',
    age: 24
}

// bracket notation
let namePropertyName = 'name';

person['name'] = 'Pomko';
person[namePropertyName] = 'Ogirok';

console.log(person);

// array
let fibNumbers = [1, 2, 3, 5, 8, 13];

// adding an elemnt to array
fibNumbers[6] = 21;

// arrays are dynamic
fibNumbers[7] = 'thirty-four';

console.log(fibNumbers);

// first function

function greet(name){
    console.log('Welcome, ' + name);
}

greet('Roman');

function square(number){
    return number * number;
}

console.log(square(3));