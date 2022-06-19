document.querySelector('#linkPrompt').onclick = function(evt) {
    const userText = prompt('Введите текст, который хотите разместить вместо ссылки');
    const linkPrompt = document.querySelector('#linkPrompt');
    linkPrompt.textContent = userText;
    evt.preventDefault(evt);
}