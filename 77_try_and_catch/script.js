// ts-worksheet
const a = 'hello';

try {
    console.log(a); // if a exist it's run this code
} catch (err) {
    console.log(err, '👏'); // if a no exist it's run this code
} finally {
    console.log('finally'); // it's run compulsory if error exist or not it's run.
}
