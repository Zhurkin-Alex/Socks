const form = document.querySelector('#selectcolors');
if (form !== null) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { colorselect, patternselect, imgselect } = event.target;
    console.log(colorselect.value)
    const response = await fetch('/mySoks', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ color: colorselect.value, pattern: patternselect.value, img: imgselect.value })
    })
    const result = await response.text();
    // console.log(result);
  })
}

const tomatoselect = document.querySelector('#tomatoselect');
const colorselect = document.querySelector('#colorselect')
// console.log(tomatoselect)
// console.log(colorselect)
colorselect.addEventListener('change', (e) => {
  console.log(e.target)
})
