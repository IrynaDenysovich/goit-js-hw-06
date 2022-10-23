let loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", formSubmit);
function formSubmit(event) {
  event.preventDefault();
  let { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Заполните все поля!");
    return;
  }
  let formInfo = { email: email.value, password: password.value };
  console.log(formInfo);
  event.currentTarget.reset();
}
