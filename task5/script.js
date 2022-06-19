const userText = document.querySelector('#imputText');
const textShow = document.querySelector('#duplicateField');
const Buttom = document.querySelector('#clearText');
userText.addEventListener('keyup', () =>{
    textShow.textContent=userText.value;
});
clearText.addEventListener('click', (event) =>{
    console.log(userText.value);
    textShow.textContent="";
    document.querySelector('#imputText').value = ""
})