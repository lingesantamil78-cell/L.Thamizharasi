// Typewriter Effect

const text = "B.Sc CS Student | Aspiring Software Developer | Future Zoho Engineer";

let i = 0;

function typeWriter() {

  if (i < text.length) {

    document.getElementById("tagline").innerHTML += text.charAt(i);

    i++;

    setTimeout(typeWriter, 80);

  }

}

typeWriter();

// Hello Button

function sayHello() {

  alert("Hello! Thanks for visiting my portfolio 😊");

}

// Dark/Light Mode

const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  modeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

});