const myName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contactForm = document.getElementById("contact");
const submitBtn = document.getElementById("submit-btn");
const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    myName.value.replace("/s/", "").trim().length !== 0 &&
    emailRegex.test(email.value) &&
    message.value.replace("/s/", "").trim().length !== 0
  ) {
    submitBtn.setAttribute("data-bs-toggle", "modal");
    submitBtn.setAttribute("data-bs-target", "#contactModal");
    submitBtn.click();
  }
  else {
    submitBtn.removeAttribute("data-bs-toggle");
    submitBtn.removeAttribute("data-bs-target");
  }
});
