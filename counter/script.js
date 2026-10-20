const counter = document.getElementById('count');
let count = 0;
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

incrementButton.onclick = () => {
    count++;
    counter.innerText = count;
}

decrementButton.onclick = () => {
    count--;
    counter.innerText = count;
}

resetButton.onclick = () => {
    count = 0;
    counter.innerText = count;
}