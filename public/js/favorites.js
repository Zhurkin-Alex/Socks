const fav = document.querySelector('#favbt');
if (fav !== null) {
  fav.addEventListener('click', async (event) => {
    event.preventDefault();
    const buttonColorSelect = event.target.parentElement.colorselect.value;
    const buttonPatternselect = event.target.parentElement.patternselect.value;
    const buttonImgselect = event.target.parentElement.imgselect.value;

    const errormessage = document.querySelector('.errormessage')
    // console.log(buttonColorSelect, buttonPatternselect, buttonImgselect)
    if (buttonColorSelect != 'none' && buttonPatternselect != 'none' && buttonImgselect != 'none') {
      errormessage.style.display = 'none'
      const response = await fetch('/favorites', {
        method: 'POST',
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ color: buttonColorSelect, pattern: buttonPatternselect, img: buttonImgselect })
      })
      const result = await response.text();
    } else {
      errormessage.style.display = 'flex'
    }

  })
}

const del = document.querySelectorAll('.delfav');
if (del.length !== 0) {
  del.forEach(el => {
    el.addEventListener('click', async (event) => {
      event.preventDefault();
      console.log(123)
      const response = await fetch('/favorites', {
        method: 'DELETE',
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify({ id: el.dataset.id })
      })
      const result = await response.text();
      el.parentElement.remove();

    })
  })
}
