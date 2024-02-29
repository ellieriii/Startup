function login() {
    const user = document.querySelector("#username");
    localStorage.setItem("userName", user.value);
    window.location.href = "instructions.html";
  }
