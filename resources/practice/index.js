let text = document.querySelector('.text');
let text1 = document.querySelector('.text1');
let button = document.querySelector('.button');
// let elem = document.querySelector('ul')
let link = document.querySelector('.link')
let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')

link.addEventListener('click', function(event){
    let result = input1.value * input2.value;
    event.preventDefault();
    text.textContent = result
})