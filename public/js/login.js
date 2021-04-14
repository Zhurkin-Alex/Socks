const login = document.querySelector('.login-form')
const errLogin = document.querySelector('.login-email-err')
const errPassword = document.querySelector('.login-password-err')
console.log(login);
login?.addEventListener('submit', async(e)=>{
  e.preventDefault()
  const email = e.target.email.value
  const password = e.target.password.value
  console.log('login',email)
  const response = await fetch('/login/login', {
    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
  const json = await response.json()
  
  if(json.status ===true){
    window.location.href = "/home";
  }
  else if (json.status === false){
    errLogin.innerHTML = `
    Непраильный email
    `
    // alert('Неправильное имя пользователя')
  }
  else if(json.success === false){
    errPassword.innerHTML = `
    Неправильный password
    `
    // alert ('Неправильный пароль')
  }
})

