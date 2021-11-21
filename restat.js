// filter buttons by x or o

let res = [];
setInterval(()=>{
  res = arr.map((el) => {
    let value = getValue(el);
    if (value==="×"||value==="o") return el;
  }).filter(el=>el!==undefined);
  if (res.length>=9){
    restartBtn.classList.remove('hide');
  }
}, 100);
restartBtn.addEventListener('click', ()=>{
  btn.forEach((el)=>{
    el.textContent = c++;
    el.classList.remove('x');
    el.classList.remove('o');
  });
  c=0;
  restartBtn.classList.add('hide');
});