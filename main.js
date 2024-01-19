const passwordBox = document.querySelector(".password-box");

const copyPassword = document.querySelector(".copy-img");
const passwordGenarate = document.querySelector(".password-genatate");
let lowercase = "abcdefghijklmonqurstuvwxyz";
let uppercase = "ABCDEFGHIJKLMONPQURSTUVWXYZ";
let number = "0123456789";
let symbol = "@#$%^&*()_+-={}[]|:;'<>,.?";
password = "";
let randomanpasswordLangth = 8;
let mixPassword = lowercase + uppercase + number + symbol;

function genaratePassword() {
  password = "";
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  for (let i = 0; i < randomanpasswordLangth; i++) {
    password += mixPassword[Math.floor(Math.random() * mixPassword.length)];
  }

  passwordBox.value = password;
}
// function copy() {
//   passwordBox.select();
//   document.execCommand("copy");
// }

copyPassword.addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy");
});
