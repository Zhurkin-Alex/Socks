
const form = document.querySelector('#selectcolors');
if (form !== null) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { colorselect, patternselect, imgselect } = event.target;

    // console.log(colorselect.value)

    const response = await fetch('/mySoks', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ color: colorselect.value, pattern: patternselect.value, img: imgselect.value })
    })
    const result = await response.text();
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

// Изменение цвета в Селекте
  colorselect?.addEventListener('change', () => {
  const optionsFrom = colorselect.options.selectedIndex;
  const selectedValue = colorselect.options[optionsFrom].value
  colorselect.style.background = selectedValue
})

// Вывод демо-картинки при выборе в списке
imgselect?.addEventListener('change', () => {
  demoimg.src = `/js/img/Big${imgselect.options[imgselect.options.selectedIndex].value}.png`
  demoimg.style.display = 'flex'
})

// Вывод демо-картинки при нажатии на боковой панели
imagesblock?.addEventListener('click', (e) => {
  if (e.target.name != undefined) {
    demoimg.src = `/js/img/Big${e.target.name}`
    demoimg.style.display = 'flex'
    // imgselect.value = e.target.name
    console.log(e.target.name)
    // console.log(imgselect)
    // console.dir(imgselect)
    console.log(imgselect.selectedIndex)
    console.log(imgselect.value)
  }
})

// Изменение селекта при нажатии на изображение

// console.log(tomatoselect)
// console.log(colorselect)
// colorselect.addEventListener('change', (e) => {
//   console.log(e.target)
// })

