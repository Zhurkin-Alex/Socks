console.log("hi");
const pictureBody = document.querySelector(".pictureBody");

const registration = document.querySelector(".registration");

registration?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { name, email, password } = e.target;

  console.log(name.value);
  const response = await fetch("/login/registration", {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: password.value,
    }),
  });
  // const responseAuth = await response.json()
  // console.log(response.status);
  if (response.status == 200) {
    window.location.href = "/picture";
  } else if (response.status == 400) {
    console.log(err);
  }
});


