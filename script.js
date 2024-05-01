const input = document.querySelector("#input-email");
document.getElementById("submit-button").addEventListener("click", function () {
  const invalidEmail = document.getElementById("input-email").value;
  const error = document.getElementById("error");
  // const errorImg = document.getElementById("error-img");
  if (!invalidEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    error.style.display = "block";
    input.style.border = "2px solid red";
    // errorImg.style.display = "block";
    input.placeholder = "email@example/com";
  }
});
