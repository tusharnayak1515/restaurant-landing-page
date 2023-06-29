const myName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const contactForm = document.getElementById("contact");
const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    myName.value.replace("/s/", "").trim().length !== 0 &&
    emailRegex.test(email.value) &&
    message.value.replace("/s/", "").trim().length !== 0
  ) {
    contactForm.setAttribute("data-bs-toggle", "modal");
    contactForm.setAttribute("data-bs-target", "#contactModal");
  }
  else {
    contactForm.removeAttribute("data-bs-toggle");
    contactForm.removeAttribute("data-bs-target");
  }
});
