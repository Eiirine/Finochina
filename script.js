 // Картинки меняются при наведении мыши, можно менять
 const hoverImages = ["https://cdn.iportal.ru/preview/news/articles/7e9b7e714beab4de010170c6e8d1b178000320ec_1920_1080_c.jpg", "https://storage.myseldon.com/news-pict-29/29B71E9FC46AE5759EF76509A4EEF322"];
 const newsImages = document.querySelectorAll('.news-image');

 newsImages.forEach((el, index) => {
   el.addEventListener('mouseover', () => {
     el.style.backgroundImage = `url('${hoverImages[index + 1]}')`;
   });
   el.addEventListener('mouseout', () => {
     el.style.backgroundImage = `url('${hoverImages[index]}')`;
   });
 });

//  Форма с данными
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  // Получаем данные формы
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var question = document.getElementById('question').value.trim();

  // Проверяем, что поля заполнены на 90%
  var fieldCount = 3; // общее количество полей
  var filledCount = [name, email, question].filter(Boolean).length; // количество заполненных полей
  var filledPercentage = filledCount / fieldCount;

  // Если заполнено менее 90% полей, показываем предупреждение
  if (filledPercentage < 0.9) {
    alert('Пожалуйста, заполните все поля формы.');
    return;
  }

  // Все хорошо, показываем информацию
  alert('Спасибо за ваш запрос!\nИмя: ' + name + '\nEmail: ' + email + '\nВаш вопрос: ' + question);
});

// Калькулятор
function calculate(operation) {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    let result;
  
    switch (operation) {
      case 'add':
        result = number1 + number2;
        break;
      case 'subtract':
        result = number1 - number2;
        break;
      case 'multiply':
        result = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          alert('Деление на 0 невозможно');
          return;
        }
        result = number1 / number2;
        break;
      case 'power':
        result = Math.pow(number1, number2);
        break;
      case 'sqrt':
        if (number1 < 0) {
          alert('Квадратный корень из отрицательного числа невозможен');
          return;
        }
        result = Math.sqrt(number1);
        break;
      case 'cosh':
        result = Math.cosh(number1);
        break;
      default:
        alert('Неизвестная операция');
        return;
    }
  // Вывод результата
    document.getElementById('result').textContent = `Результат: ${result}`;
  }