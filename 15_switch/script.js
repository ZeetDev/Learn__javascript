const day = 1;
switch (day) {
    case 1:
    case 8: // you can check multiple conditions in switch
        console.log('hello');
        break;

    case 2:
        console.log('hello 2');
        break;

    case 3:
        console.log('hello 3');
        break;

    case 4:
        console.log('hello 4');
        break;

    default:
        console.log('hello 5');
}

const age = 24;

switch (true) {
    case age >= 18 && age <= 20:
    case age >= 21 && age <= 30: // you can check comparison operator like this
        console.log('you are under 18 to 30');
        break;

    default:
        console.log('you are noob');
}

const age2 = 25;

switch (
    true // if you want to check multiple condition at one use true
) {
    case (age2 > 20 && age2 < 30) || (age2 > 30 && age2 < 40):
        console.log('age 2 between 20 and 30');
        break;

    default:
        console.log('👆🏼👆🏼👆🏼👆🏼👆🏼');
}
