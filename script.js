// Массив путей к изображениям
const imagePaths = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
];

// Функция для получения случайного изображения
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    const randomImage = imagePaths[randomIndex];
    console.log('Selected image path:', randomImage); // Отладочное сообщение
    return randomImage;
}


// Функция для получения случайной цитаты и смены изображения
async function getRandomQuote() {
    try {
        // Вызов API для получения случайной цитаты
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error('Error getting quote :(');
        }

        // Парсинг JSON-ответа
        const data = await response.json();

        // Обновление текста на странице
        document.getElementById('quote').innerText = `"${data.content}" — ${data.author}`;

        // Смена изображения
        const newImage = getRandomImage();
        document.getElementById('random-image').src = newImage;

    } catch (error) {
        // Обработка ошибок
        document.getElementById('quote').innerText = 'Failed to load quote :(. Please try again.';
        console.error('Error:', error);
    }
}

// Добавляем обработчик события на кнопку после загрузки страницы
document.addEventListener('DOMContentLoaded', () => {
    const quoteButton = document.getElementById('get-quote-btn');
    quoteButton.addEventListener('click', getRandomQuote);
});
