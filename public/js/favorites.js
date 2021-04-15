const fav = document.querySelector('#favbt');
if (fav !== null) {
  fav.addEventListener('click', async (event) => {
    event.preventDefault();
    const buttonColorSelect = event.target.parentElement.colorselect.value;
    const buttonPatternselect = event.target.parentElement.patternselect.value;
    const buttonImgselect = event.target.parentElement.imgselect.value;
    const response = await fetch('/favorites', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ color: buttonColorSelect, pattern: buttonPatternselect, img: buttonImgselect })
    })
    const result = await response.text();
  })
}

const del = document.querySelectorAll('.delete');
if (del.length !== 0) {
  del.forEach(el => {
    el.addEventListener('click', async (event) => {
      event.preventDefault();
      const response = await fetch('/favorites', {
        method: 'DELETE'
      })
      const result = await response.text();

    })
  })
}
