const copyButton = document.getElementById("copyButton");
const generateButton = document.getElementById("generateButton");
const show = document.querySelector(".show");
const passwordInput = document.getElementById("password");

generateButton.onclick = function generatePassword() {
  const character =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_0123456789";
  const passwordLength = 10;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let generatedPassword = Math.floor(Math.random() * character.length);
    password += character.substring(generatedPassword, generatedPassword + 1);
  }
  passwordInput.value = password;
};

copyButton.onclick = function copyPassword() {
  const passwordValue = passwordInput.value;
  if (passwordValue.trim() === "") {
    alert("Password is Empty!");
  } else {
    navigator.clipboard.writeText(passwordValue).then(function () {
      show.innerHTML = "New Password:<br>" + passwordValue;
      show.classList.add("active");
      setTimeout(() => {
        show.classList.remove("active");
      }, 3000);
      passwordInput.value = "";
    });
  }
};
