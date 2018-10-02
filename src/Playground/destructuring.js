// 
// Object Destructuring
// 

const person = {
  name: 'Gabriel',
  age: 23,
  location: {
    city: 'Stockholm',
    temp: 15,
  }
};

// Name has been renamed and has a default value of Anonymous
const { name: firstname = 'Anonymous', age } = person;
console.log(`${firstname} is ${age}`);

// Renamed temp to temperature
const { city, temp: temperature, } = person.location;
if(city && temperature) {
  console.log(`It's ${temperature}C in ${city}`);
} 

// 
// Array Destructuring
// 

// const address = ['Juvelerarvägen 25', 'Stockholm', 'Stockholms Län', '126 41 Hägersten'];
const address = ['Stockholms Län'];
const [, , stateName = 'Unknown State'] = address;
console.log(`You are in ${stateName}`);

// Challenge
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, small_price, medium_price, large_price] = item;
console.log(`Small ${coffee} costs ${small_price}`);