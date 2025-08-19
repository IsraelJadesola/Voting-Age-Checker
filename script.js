
const input = document.getElementById('ageInput');
const ageResult = document.getElementById('ageText');

function ageBtn() {
    age = input.value
    if (age >= 18) {
        console.log('Citizen can vote');
        ageResult.textContent = `Hurray! You can vote in the upcoming election`
    } else if (age == 17) {
        console.log('Citizen needs 1 year more to vote');
        ageResult.textContent = `Oops! You need just a year more to be able to vote`
    } else if (age < 17 && age >= 10) {
        console.log(`Citizen's age is between 10-16`);
        ageResult.textContent = `Sorry! You can't vote, your age falls between 10 and 16 `
    } else if (age < 10 && age >= 5) {
        console.log(`Citizen's age is between 9-5`);
        ageResult.textContent = `Sorry! Your age is too low, your age falls between 9 and 5`
    } else if (!age) {
        console.log(`Citizen did not input age`);
        ageResult.textContent = `Please input your age`
    } else if (age < 5 && age >= 0) {
        console.log(`Citizen's input 0`);
        ageResult.textContent = `Ops, You can't vote! (your are not even up to 5)`
    } else if (age < 0) {
        console.log(`Citizen's input negative number`);
        ageResult.textContent = `Error, Age can't be negative! (Pls input a correct age)`
    } 
}