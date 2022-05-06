// variables
const colors = ["red", "blue", "green", "yellow", "orange", "indigo", "violet"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// event listener
btn.addEventListener('click', function(){
    // get random number between 0 - 6
    const randomNumber = getRandomNumber();

    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];
})

// invoking function
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}