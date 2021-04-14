const form = document.querySelector('#selectcolors');
if (form !== null) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { action } = event.target;
    const response = await fetch(action, {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ color: form[0].value, picture: form[1].value, pattern: form[2].value })
    })
    const result = await response.text();
    console.log(result);
  })
}
