let costOne = document.querySelector('#costOne');
let costTwo = document.querySelector('#costTwo');
let costThree = document.querySelector('#costThree');
let costFour = document.querySelector('#costFour');
let totalSum = document.querySelector('#totalSum');

let countSum = () => {
    return +costOne.textContent + +costTwo.textContent + +costThree.textContent + +costFour.textContent;
};

totalSum.innerHTML = countSum();

function subtractionOne() {
    return +costOne.textContent * 80 / 100
}
function subtractionTwo() {
    return +costTwo.textContent * 80 / 100
}
function subtractionThree() {
    return +costThree.textContent * 80 / 100
}
function subtractionFour() {
    return +costFour.textContent * 80 / 100
}
function subtractionTotal() {
    return +countSum() * 80 / 100
}
function changeSum() {
    costOne.innerHTML = subtractionOne();
    costTwo.innerHTML = subtractionTwo();
    costThree.innerHTML = subtractionThree();
    costFour.innerHTML = subtractionFour();
    totalSum.innerHTML = subtractionTotal();
    buttonDiscount.removeEventListener('click', changeSum);
}

let buttonDiscount = document.querySelector('#buttonDiscount');

buttonDiscount.addEventListener('click', changeSum);