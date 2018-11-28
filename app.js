// alert('hola');
const textInput = document.getElementById('text-input');
const textStyle = document.getElementById('text-style');
const btnStyle = document.getElementById('btn-style');
const btnTryAgaint = document.getElementById('btn-try-againt');
const styleInput = document.getElementById('style-input');
const styleP = document.getElementById('style-p');
let count = 0;


const putTextStyle = () => {
  const textEdit=textInput.value;
  styleInput.style.display='none';
  styleP.style.display='block';
  count ++;
  console.log(count);
  if(count===1){
    textStyle.setAttribute('class', 'style-a col-10 offset-1 justify-content-center text-center');
  } else if (count===2) {
    textStyle.setAttribute('class', 'style-b col-10 offset-1 justify-content-center text-center');
  } else if (count===3) {
    textStyle.setAttribute('class', 'style-c col-10 offset-1 justify-content-center text-center');
  } else {
    count = 0;
    putTextStyle();
  }


  textStyle.innerHTML=textEdit;
};

const reload = () => {
  // window.location.reload();
  styleInput.style.display='block';
  styleP.style.display='none';
}

btnStyle.addEventListener('click', putTextStyle);
btnTryAgaint.addEventListener('click', reload);