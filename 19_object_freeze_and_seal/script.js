const freezeUser = {
    fname: 'John',
    lname: 'Wick',
    age: 42,
};

Object.freeze(freezeUser); // to freeze object that mean not you can't add and edit object value
freezeUser.mobileNum = '12345678910';
console.log(freezeUser);
console.log(freezeUser.mobileNum); // you got undefined
console.log(Object?.isFrozen(freezeUser)); // check is your object frozen or not

const sealUser = {
    user: 'John',
    lname: 'Doe',
    age: 48,
};

Object.seal(sealUser); // to seal user that mean you can only able to change object value you can't add new value in object.
sealUser.user = 'Johnny';
console.log(sealUser); // username changed from John to Johnny
console.log(Object?.isSealed(sealUser)); // check is your object is sealed or not
