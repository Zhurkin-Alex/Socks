console.log("basket");

const addSocks = document.querySelectorAll(".socks-id-add");
addSocks.forEach((el) => {
  el?.addEventListener("click", async (e) => {
    // e.preventDefault()
    const id = el.getAttribute("data-id");
    console.log(id);

    const response = await fetch(`/basket/add/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const rezult = await response.json();
    console.log(rezult);
    const socksCount = document.querySelectorAll(".socks-count");
    // socksCount.forEach((el) => {
      
      
    // });
    if (id == el.dataset.id) {
      socksCount.innerHTML = `
      ${rezult.count}
      `;
    }
    // console.log('socksCount',socksCount);
  });
});

const delSoks = document.querySelectorAll(".socks-btn_id-del");
delSoks.forEach((el) => {
  el.addEventListener("click", (e) => {
    console.log("del-Btn");
  });
});
