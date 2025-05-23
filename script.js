// Инициализация Telegram Web App
window.onload = function () {
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.ready(); // Сообщаем Telegram, что приложение готово
        window.Telegram.WebApp.expand(); // Разворачиваем приложение на полный экран
    }
};

// Логика генерации случайного числа
const generateBtn = document.getElementById('generateBtn');
const result = document.getElementById('result');
result.textContent = localStorage.getItem('number');
generateBtn.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    result.textContent = `Твое число: ${randomNumber}`;
    localStorage.setItem('number',randomNumber)
});