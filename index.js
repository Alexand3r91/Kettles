const buttons = document.querySelectorAll('.kettles__btnShop');

/*// Устанавливаем обработчик события на наведение (mouseover)
buttons.addEventListener('mouseover', function() {
  // Задаем цвет кнопки при наведении (например, красный)
  button.style.backgroundColor = 'white';
});

// Устанавливаем обработчик события на уход курсора с кнопки (mouseout)
buttons.addEventListener('mouseout', function() {
  // Восстанавливаем цвет кнопки после ухода курсора (например, в исходный цвет)
  buttons.style.backgroundColor = '';
});
console.log(buttons)



onmousedown
onmouseenter
onmouseleave
onmousemove
onmouseout
onmouseover
onmouseup
*/

// Добавляем обработчик события на каждую кнопку
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.classList.add('button__hover');
  });
  button.addEventListener('mouseout', () => {
    button.classList.remove('button__hover');
  });
});