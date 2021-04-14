const form = document.querySelector('#selectcolors');
if (form !== null) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { tagselect } = event.target
    const { colorselect } = event.target
    console.log(tagselect.value, colorselect.value)
    const response = await fetch('/mysocks', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ color: colorselect.value, pattern: tagselect.value })
    })
    const result = await response.text();
    console.log(result);
  })
}
