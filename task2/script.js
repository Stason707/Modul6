const consoleLog = document.querySelector('#consoleLog');
consoleLog.onclick = function () {
    alert('Привет! Console.log - это метод для вывода сообщений в веб-консоль');
}
document.querySelector('#example').onclick = function() {
    console.log('Привет, Мир! Вот так это работает');
}
document.querySelector('#alert').onclick = function() {
    console.log('alert - это простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK. ЖМИ ПРИМЕР НИЖЕ');
}
document.querySelector('#exampleAlert').onclick = function() {
    alert('Появляется такое информационное окно. Блокируется активность на странице.');
}
document.querySelector('#prompt').onclick = function() {
    console.log('prompt - Отображает диалоговое окно с запросом на ввод текста. ЖМИ ПРИМЕР НИЖЕ');
}
document.querySelector('#examplePrompt').onclick = function() {
    prompt('Отображает диалоговое окно с запросом на ввод текста. Блокируется активность на странице.');
}