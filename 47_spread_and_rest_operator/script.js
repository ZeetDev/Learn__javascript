// ts-worksheet
// how many things we can spread using spread operator

// array
const arr = [1, 2, 3];
const newArr = [...arr]; // [1, 2, 3]

// string
const str = 'hello';
const chars = [...str]; // ['h', 'e', 'l', 'l', 'o']

// objects
const obj = { a: 1, b: 2 };
const newObj = { ...obj }; // { a: 1, b: 2 }

// ------------------------------------------------------------------------

// rest in function parameters
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4));

// rest with array destructuring
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]

// rest with object destructuring
const user = {
    name: 'Alice',
    age: 25,
    country: 'India',
    job: 'Developer',
};

const { name, ...others } = user;
console.log(name); // 'Alice'
console.log(others); // { age: 25, country: 'India', job: 'Developer' }
