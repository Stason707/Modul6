const userText = document.querySelector('#inputText');
const textShow = document.querySelector('#duplicateField');
const Buttom = document.querySelector('#clearText');
userText.addEventListener('input', () =>{
    textShow.textContent=userText.value;
});
clearText.addEventListener('click', (event) =>{
    console.log(userText.value);
    textShow.textContent="";
    document.querySelector('#inputText').value = ""
    event.preventDefault();
})