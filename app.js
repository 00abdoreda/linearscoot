// function redirectToNextPage(){
//   document.getElementsByClassName("btn solid").submit();
//   Window.location.href="profile.html"
// }

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// error

function validateSignInForm() {
  let isValid = true;

  const name1 = document.getElementById("name1").value.trim();
  const password1 = document.getElementById("password1").value.trim();

  // Clear previous error messages
  document.getElementById("name-error1").style.display = "none";
  document.getElementById("password-error1").style.display = "none";

  if (name1.length < 3) {
    document.getElementById("name-error1").style.display = "block";
    isValid = false;
  }

  if (password1.length < 8) {
    document.getElementById("password-error1").style.display = "block";
    isValid = false;
  }

  if (isValid) {
    window.location.href = "profile.html";
  }

  return isValid;
}

function validateSignUpForm() {
  let isValid = true;

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Clear previous error messages
  document.getElementById("name-error").style.display = "none";
  document.getElementById("phone-error").style.display = "none";
  document.getElementById("email-error").style.display = "none";
  document.getElementById("password-error").style.display = "none";

  if (name.length < 3) {
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  }

  if (phone.length !== 11 || isNaN(phone)) {
    document.getElementById("phone-error").style.display = "block";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  }

  if (password.length < 8) {
    document.getElementById("password-error").style.display = "block";
    isValid = false;
  }

  return isValid;
}

//pass visible

document
  .getElementById("toggle-password1")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password1");
    const toggleIcon = this;

    // Toggle the type attribute
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.classList.add("show-password"); // Add a class to change the icon
    } else {
      passwordField.type = "password";
      toggleIcon.classList.remove("show-password");
    }
  });

document
  .getElementById("toggle-password")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const toggleIcon = this;

    // Toggle the type attribute
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.classList.add("show-password"); // Add a class to change the icon
    } else {
      passwordField.type = "password";
      toggleIcon.classList.remove("show-password");
    }
  });

  const video = document.getElementById("video");

  video.addEventListener("ended", function () {
    if (video.currentTime >= video.duration - 0.3) {
      video.currentTime = 0; // Rewind to the beginning just before the black frame
      video.play();
    }
  });
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 2000);

  loader.addEventListener("transitionend", () => {
    loader.remove();
  });
});

