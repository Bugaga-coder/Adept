document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})
// На маленьких экранах меняем текст в кнопке шапки сайта, как велит дизайн
const screenWidth = window.screen.width;
if (screenWidth < 1026) {
    let orderOnlineMeeting = document.querySelector('.orderOnlineMeeting');
    orderOnlineMeeting.textContent = "Заказать встречу";
}