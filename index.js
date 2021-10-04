const color1 = document.getElementById('picker-1');
const color2 = document.getElementById('picker-2');
const split = document.getElementById('split');
const btnRandom = document.getElementById('btn-random');
const gradientBox = document.getElementById('gradient');
const gradientCode = document.getElementById("gradient-code");

const changeGradient = () => {
    document.body.style.backgroundImage = `linear-gradient(to right, ${color1.value} ${split.value}%, ${color2.value} 100%)`;
    gradientBox.style.background = `linear-gradient(to right, ${color1.value} ${split.value}%, ${color2.value} 100%)`;
    gradientCode.value = `background:(${color1.value}, ${split.value}%, ${color2.value}) `
}

const setRandomColor = (e) => {
    e.preventDefault()
    const randomColor1 = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    const randomColor2 = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    color1.value = randomColor1;
    color2.value = randomColor2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${randomColor1} ${split.value}%, ${randomColor2} 100%)`;
    gradientBox.style.background = `linear-gradient(to right, ${randomColor1} ${split.value}%, ${randomColor2} 100%)`;
    gradientCode.value = `background:(${randomColor1}, ${split.value}%, ${randomColor2}) `
}

color1.addEventListener("input", changeGradient)
color2.addEventListener("input", changeGradient)
split.addEventListener("input", changeGradient)
btnRandom .addEventListener("click", setRandomColor)

changeGradient();


