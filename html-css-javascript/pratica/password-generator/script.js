const generateBtn = document.getElementById('generate-btn');
const sliderEl = document.getElementById('slider-element');
const sliderInput = document.querySelector('#slider');
const passwordText = document.querySelector('#password');
const containerPassword = document.getElementById('container-password');
const tooltip = document.querySelector('.tooltip');
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$&?/';
let new_pass = '';

sliderEl.textContent = sliderInput.value;

sliderInput.oninput = () => sliderEl.textContent = sliderInput.value;


generateBtn.addEventListener('click', () => {
    let pass = '';
    for (let i = 0; i < sliderInput.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    passwordText.innerHTML = pass;
    containerPassword.classList.add('show');
    new_pass = pass;
})


passwordText.addEventListener('click', () => {
    navigator.clipboard.writeText(new_pass);
    alert('Password copied successfully!');
})

passwordText.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
})
passwordText.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
})

