function getValue(el){
  return el.textContent;
}
function wathIsWin(el){
  switch (el){
    case '×':
      xPoint.textContent++;
      break;
    case 'o':
      oPoint.textContent++;
      break;
  }
  
  
  setTimeout(()=>{
    switch (el){
      case '×':
        xPoint.textContent+1;
        text1.textContent = "🥳🥳 X win 🥳🥳";
        myAlert.style.backgroundColor = '#ffffff00';
        break;
      case 'o':
        oPoint.textContent+1;
        text1.textContent = "🥳🥳 O win 🥳🥳";
        myAlert.style.backgroundColor = '#ffffff00';
        break;
    }
    myAlert.classList.remove('hide');
    text1.classList.remove('hide')
    text2.classList.remove('hide');
    myAlert.style.height = '90px';
  }, 0);
  setTimeout(()=>{
    text1.style.animation = "text1 1.5s 1";
    setInterval(()=>{
      text1.style.animation = "";
      text1.classList.add('hide');
    }, 1500);
  }, 500);
  setTimeout(()=>{
    text2.style.animation = "text2 3s 1";
    setTimeout(()=>{
      myAlert.classList.add('hide');
      text2.classList.add('hide');
    }, 3000);
  }, 500);
  
  
  
  btn.forEach((button)=>{
    button.textContent = ++c;
    button.classList.remove('o');
    button.classList.remove('x');
  });
  c = 0;
}
var arr = [];
btn.forEach((button)=>{
  arr.push(button);
});
/*
    [
      0, 1, 2,
      3, 4, 5,
      6, 7, 8
    ]
    [
      a, b, c,
      d, e, f,
      g, h, i
    ]
*/
// a b c
// * * *
// * * *

let abc =  setInterval(()=>{
  let x1 = getValue(arr[0]);
  let x2 = getValue(arr[1]);
  let x3 = getValue(arr[2]);
  if (x1===x2&&x1===x3){
    wathIsWin(x1);
  }
}, 500);

// * * *
// d e f
// * * *

let def =  setInterval(()=>{
  let x1 = getValue(arr[3]);
  let x2 = getValue(arr[4]);
  let x3 = getValue(arr[5]);
  if (x1===x2&&x1===x3){
    wathIsWin(x1);
  }
}, 500);

// * * *
// * * *
// g h i

let ghi =  setInterval(()=>{
  let x1 = getValue(arr[6]);
  let x2 = getValue(arr[7]);
  let x3 = getValue(arr[8]);
  if (x1===x2&&x2===x3){
    wathIsWin(x1);
  }
}, 500);

// a * *
// * e *
// * * i

let aei =  setInterval(()=>{
  let x1 = getValue(arr[0]);
  let x2 = getValue(arr[4]);
  let x3 = getValue(arr[8]);
  if (x1===x2&&x1===x3){
    wathIsWin(x1);
  }
}, 500);

// * * c
// * e *
// g * *

let ceg = setInterval(() => {
  let x1 = getValue(arr[2]);
  let x2 = getValue(arr[4]);
  let x3 = getValue(arr[6]);
  if (x1 === x2 && x1 === x3) {
    wathIsWin(x1);
  }
}, 500);

// a * *
// d * *
// g * *

let adg = setInterval(() => {
  let x1 = getValue(arr[0]);
  let x2 = getValue(arr[3]);
  let x3 = getValue(arr[6]);
  if (x1 === x2 && x1 === x3) {
    wathIsWin(x1);
  }
}, 500);

// * b *
// * e *
// * h *

let beh = setInterval(() => {
  let x1 = getValue(arr[1]);
  let x2 = getValue(arr[4]);
  let x3 = getValue(arr[7]);
  if (x1 === x2 && x1 === x3) {
    wathIsWin(x1);
  }
}, 500);

// * * c
// * * f
// * * i

let cfi = setInterval(() => {
  let x1 = getValue(arr[2]);
  let x2 = getValue(arr[5]);
  let x3 = getValue(arr[8]);
  if (x1 === x2 && x1 === x3) {
    wathIsWin(x1);
  }
}, 500);