// console.log("basket");

const addSocks = document.querySelectorAll(".socks-id-add");
addSocks.forEach((el) => {
  el?.addEventListener("click", async (e) => {
    // e.preventDefault()
    const id = el.getAttribute("data-id");
    // console.log(id);

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
    // console.log("rezult", rezult);
    const socksCount = document.querySelectorAll(".socks-count");

    socksCount.forEach((item) => {
      const idElem = item.getAttribute("data-id");
      // console.log('idElem',idElem);
      if (idElem == rezult._id) {
        return (item.innerHTML = `
        <div data-id =${rezult._id} class="socks-count">           
        ${rezult.count}          
      </div>
        `);
      }
    });
    // console.log('socksCount',socksCount);
    // console.log("rezult.count", rezult.count);

    // console.log('socksCount',socksCount);
  });
});

const delSoks = document.querySelectorAll(".socks-btn_id-del");
delSoks.forEach((el) => {
  el?.addEventListener("click", async (e) => {
    // console.log("del-Btn");
    const id = el.getAttribute("data-id");
    const response = await fetch(`/basket/min/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const rezult = await response.json();
    // console.log("rezult", rezult);
    const socksCount = document.querySelectorAll(".socks-count");
    if(rezult){
      socksCount.forEach((item) => {
        const idElem = item.getAttribute("data-id");
        // console.log('idElem',idElem);
        if (idElem == rezult._id) {
          return (item.innerHTML = `
          <div data-id =${rezult._id} class="socks-count">           
          ${rezult.count}          
        </div>
          `);
        }
      });  
    }else{
      socksCount.forEach((item) => {
        const idElem = item.getAttribute("data-id");
        // console.log('idElem',idElem);
        if (idElem == rezult._id) {
          return (item.innerHTML = `
          <div data-id =${rezult._id} class="socks-count">           
          0         
        </div>
          `);
        }
      });
    }
    




  });
});


const socksDelete = document.querySelectorAll('.socks-delit_card')

socksDelete.forEach(el=>{

  el?.addEventListener('click', async(e)=>{

    const id = el.getAttribute("data-id");
    const response = await fetch(`/basket/del/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const rezult = await response.json()
    console.log('rezultdel',rezult);
    if(rezult.socks == false){
      console.log('falseDel');
      const cardSocks = document.querySelectorAll('.socks-box_btn')
      cardSocks.forEach(el=>{
        const cardDelId = el.getAttribute('data-id')
        if(id === cardDelId ){
          el.remove()
        }
      })
      
    }
  })
})


const btnBuy = document.querySelector('.btn-socks_btn')

btnBuy?.addEventListener('click', async (e)=>{
  
  const response = await fetch(`/basket/buy`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    
  });
  const result= await response.json()
  console.log(result);
  if(result.sucsess ===true){
    const divText = document.querySelector('.basket-text')
    divText.innerText = `
    Спасибо за заказ, в ближайшее время с вами свяжется наш менеджер
    `
  }
})
