// console.log("Hello, World!");

function startButton() {
  const formulario = document.querySelector(".formulario");
  const formularioMascara = document.querySelector(".mascara-form");
  formulario.style.left = "50%";
  formulario.style.transform = "translateX(-50%)";
  formularioMascara.style.zIndex = "0";
}

function stopButton() {
  const formulario = document.querySelector(".formulario");
  const formularioMascara = document.querySelector(".mascara-form");
  formulario.style.left = "-350px";
  formulario.style.transform = "none";
  formularioMascara.style.zIndex = "-2";
}
