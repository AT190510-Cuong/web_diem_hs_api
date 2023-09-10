let apiUser = "http://localhost:3000/grades";

//login
const username = document.querySelector(".input-login-username");
const password = document.querySelector(".input-login-password");
const bntLogin = document.querySelector(".login__signInButton");

// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

// login
bntLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || password.value == "") {
    alert("Please enter your username and password");
  } else {
    getUser().then((data) => {
      const user = data.find(
        (user) =>
          user.sv.maSV == username.value && user.sv.TenSV == password.value
      );
      if (user) {
        alert("Login success");
        window.location.href = "next.html";
      } else {
        alert("Login failed");
      }
    });
  }
});
