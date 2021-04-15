const fav = document.querySelector('#favbt');
if (fav !== null) {
  fav.addEventListener('click', async (event) => {
    event.preventDefault();
    const buttonColorSelect = event.target.parentElement.colorselect.value;
    const buttonPatternselect = event.target.parentElement.patternselect.value;
    const buttonImgselect = event.target.parentElement.imgselect.value;
    console.log(buttonColorSelect, buttonPatternselect, buttonImgselect)
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
