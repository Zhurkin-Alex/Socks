const form = document.querySelector('#selectcolors');
if (form !== null) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { colorselect, patternselect, imgselect } = event.target;
    console.log(colorselect.value)
    const response = await fetch('/mysocks', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ color: colorselect.value, pattern: patternselect.value, img: imgselect.value })
    })
    const result = await response.text();
    console.log(result);
  })
}
