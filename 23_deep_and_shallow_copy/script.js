//ts-worksheet

/*
    datatype that contains shallow copy behavior
  - String;
  - Number;
  - Boolean;
  - null;
  - undefined;
  - Symbol;
  - BigInt;
*/

let a = 10;
let b = a;
b = 20;

console.log(a);

/*
 - datatype that contains shallow copy behavior
 - Object
 - Array
 - Function
 - Date, Map, Set, etc.
*/

let obj1 = { name: 'Alice' };
let obj2 = obj1;

obj2.name = 'Bob';

console.log(obj1.name);

// shallow copy behavior with objects

const original = {
    name: 'John',
    address: { city: 'New York' },
};

const shallow = { ...original };

shallow.name = 'Jane'; // ✅ Only affects shallow copy
shallow.address.city = 'Los Angeles'; // ❌ Affects both!

console.log(original.address.city);

// convert object into from shallow to deep copy
const userInfo = {
    fname: 'John',
    lname: 'Wick',
    age: 36,
    city: {
        state: 'New York',
        country: 'USA',
    },
};

const cloneUser = structuredClone(userInfo); // use structuredClone method to convert object from shallow to deep
cloneUser.city.state = 'Vegas';

console.log(userInfo);
console.log(cloneUser);
