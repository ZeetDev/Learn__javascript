// object is only one non primitive data type because in the end array and function is object

const userInfo = {
    // in this object name is a property and fullName is method in object function called as method
    name: 'John',
    surname: 'Wick',
    age: 32,
    fullName: function () {
        return `${this.name} ${this.surname}`; // in this object this keyword reference userInfo it's parent object
    },
    // fullName: () => `${userInfo.name} ${userInfo.surname}`, // we can't use this keyword in arrow function
};

console.log(userInfo?.fullName(), '👆🏼'); // this call function
// output John Wick

console.log(userInfo?.fullName, '👆🏼'); // this reference function

/*  output function () {
        return `${this.name} ${this.surname}`; // in this object this keyword reference userInfo it's parent object
    }
*/

console.log(userInfo.name);
