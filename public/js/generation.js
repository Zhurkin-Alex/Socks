const errormessage = document.querySelector('.errormessage')
const form = document.querySelector('#selectcolors');
if (form !== null) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { colorselect, patternselect, imgselect } = event.target;
    if (colorselect.value != 'none' &&  patternselect.value != 'none' && imgselect.value != 'none') {
      errormessage.style.display = 'none'
      const response = await fetch('/mySoks', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ color: colorselect.value, pattern: patternselect.value, img: imgselect.value })
    })
    const result = await response.text();
  } else {
    errormessage.style.display = 'flex'
  }
  })
}
// Боковая картинка (большая)
const demoimg = document.querySelector('#demoimg')
// Список выбора картинки
const imgselect = document.querySelector('#imgselect')
// Список выбора цвета
const colorselect = document.querySelector('#colorselect')
// Блок с картинками (левый)
const imagesblock = document.querySelector('#imgsblock')
// Блок с цветами (левый)
const colorsblock = document.querySelector('#blockwithcolors')
// Левая часть носка
const leftpart = document.querySelector('.leftpart')
// Правая часть носка
const rightpart = document.querySelector('.rightpart')
// Рамка с носком
const sockboard = document.querySelector('.socktemplate')

// Изменение цвета в Селекте
  colorselect?.addEventListener('change', () => {
  const optionsFrom = colorselect.options.selectedIndex;
  const selectedValue = colorselect.options[optionsFrom].value
  colorselect.style.background = selectedValue
  sockboard.style.display = 'flex'
  leftpart.style.background = selectedValue
  rightpart.style.background = selectedValue

})

// Вывод демо-картинки при выборе в списке
imgselect?.addEventListener('change', () => {
  demoimg.src = `/js/img/Big${imgselect.options[imgselect.options.selectedIndex].value}.png`
  demoimg.style.display = 'flex'
})

// Вывод демо-картинки при нажатии на боковой панели
imagesblock?.addEventListener('click', (e) => {
  if (e.target.name != undefined) {
    demoimg.src = `/js/img/Big${e.target.name}.png`
    demoimg.style.display = 'flex'
    imgselect.value = e.target.name
    leftpart.style.background.image = `url('/js/img/${e.target.name}small.png')`
  }
})

// Изменение селекта цвета при нажатии на изображение

colorsblock.addEventListener('click', (e) => {
if( e.target.id != undefined) {
  colorselect.value = e.target.id
  colorselect.style.background = colorselect.value
  sockboard.style.display = 'flex'
  leftpart.style.background = colorselect.value
  rightpart.style.background = colorselect.value
} else {
  sockboard.style.display = 'none'
  leftpart.style.display = 'none'
  rightpart.style.display = 'none'
}
})
