// alert('hola');
const textInput = document.getElementById('text-input');
const textStyle = document.getElementById('text-style');
const btnStyle = document.getElementById('btn-style');
const btnTryAgaint = document.getElementById('btn-try-againt');
const styleInput = document.getElementById('style-input');
const styleP = document.getElementById('style-p');

const putTextStyle = () => {
  const textEdit=textInput.value;
  styleInput.style.display='none';
  styleP.style.display='block';
  textStyle.setAttribute('class', 'style-p col-10 offset-1 justify-content-center text-center')

  textStyle.innerHTML=textEdit;
};

const reload = () => {
  window.location.reload();
}

btnStyle.addEventListener('click', putTextStyle);
btnTryAgaint.addEventListener('click', reload);