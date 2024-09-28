// Получаем элементы модального окна
var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("gallery-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Добавляем обработчик события к каждому изображению
for (let i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        modal.style.display = "block"; // Показываем модальное окно
        modalImg.src = this.src; // Устанавливаем источник изображения
        captionText.innerHTML = this.alt; // Устанавливаем подпись
    }
}

// Закрываем модальное окно при нажатии на "x"
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none"; // Скрываем модальное окно
}

// Закрываем модальное окно при нажатии вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Скрываем модальное окно
    }
}
