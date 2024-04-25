//Навигация на стрелки
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Новые переменные 
const content = [
  {
    img: './Pic/image-1.jpg',
    dot: document.querySelector('.point_1'),
    line: document.querySelector('.li_navigation_1'),
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3,5 months'
  },
  {
    img: './Pic/image-2.jpg',
    dot: document.querySelector('.point_2'),
    line: document.querySelector('.li_navigation_2'),
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months'
  },
  {
    img: './Pic/image-3.jpg',
    dot: document.querySelector('.point_3'),
    line: document.querySelector('.li_navigation_3'),
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months'

  }
]

//Блок с фото
const slider = document.querySelector('.projects_photo');

//Изменеие картинки
const setEntity = (index) => {
  slider.style.backgroundImage = `url(${content[index].img})`;
}

//Акивный или не аакивный режим 
const makeActive = (index) => {
  content[index].dot.style.opacity = 1;
}
const makeInactive = (index) => {
  content[index].dot.style.opacity = 0.2;
}

//Смена текста
const changeTextContent = (index) => {
  document.querySelector('.city').textContent = content[index].city;
  document.querySelector('.area').textContent = content[index].area;
  document.querySelector('.time').textContent = content[index].time;
}

//Переключение заголовка и точки
const pressOnElement = (index) => {
  makeInactive(contentIndex);
  changeTextContent(index);
  contentIndex = index;
  setEntity(contentIndex);
  makeActive(contentIndex);
}

//Настройка на нулевой элемент
let contentIndex = 0;

//Левая правая стрелки
arrowLeft.addEventListener('click', () => {
  makeInactive(contentIndex);

  if (contentIndex == 0) {
    contentIndex = content.length - 1;
  } else {
    contentIndex -= 1;
  }

  changeTextContent(contentIndex);
  setEntity(contentIndex);
  makeActive(contentIndex);
})

arrowRight.addEventListener('click', () => {
  makeInactive(contentIndex);

  if (contentIndex == content.length - 1) {
    contentIndex = 0;
  } else {
    contentIndex += 1;
  }

  changeTextContent(contentIndex);
  setEntity(contentIndex);
  makeActive(contentIndex);
})

//Точка и заголовок
for (let i = 0; i <= content.length - 1; i++) {
  content[i].dot.addEventListener('click', () => {
    pressOnElement(i);
  });
  content[i].line.addEventListener('click', () => {
    pressOnElement(i);
  });
}