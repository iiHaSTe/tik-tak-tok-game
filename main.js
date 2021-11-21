let btn = document.querySelectorAll('.xo');
let seter = document.querySelector("#Seter");
let span = document.querySelector('#span');
let xPoint = document.querySelector('.xPoint');
let oPoint = document.querySelector('.oPoint');
let myAlert = document.querySelector('.myAlert');
let text1 = document.querySelector('.text1')
let text2 = document.querySelector('.text2');
let restartBtn = document.querySelector('#restart');
let c = 0;



span.textContent = '×';
btn.forEach((button) => {
  button.addEventListener('click', ()=>{
    button.classList.add('x');
    button.textContent = '×';
  });
});
function ll(){
  if (seter.checked) {
    span.textContent = '×';
    span.style.color="red";
    btn.forEach((button) => {
      button.addEventListener('click', ()=>{
        button.classList.add('x');
        button.classList.remove('o');
        button.textContent = '×';
      });
    });
  }
  else{
    span.textContent = 'o';
    span.style.color="blue";
    btn.forEach((button) => {
      button.addEventListener('click', () => {
        button.classList.add('o');
        button.classList.remove('x');
        button.textContent = 'o';
      });
    });
  }
}