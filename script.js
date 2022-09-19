const alimentation = [
  {
    motComorien: "Hula",
    motFr: "Manger",
  },
  {
    motComorien: "Apvasa",
    motFr: "Maintenant",
  },
  {
    motComorien: "Darasa",
    motFr: "leçon(s)",
  },
  {
    motComorien: "Djibu",
    motFr: "répond",
  },
  {
    motComorien: "Fasiri",
    motFr: "traduire",
  }
];

console.log(alimentation.length);
const faEye = document.querySelector(".fa-eye-slash");
const doubleFace = document.querySelector(".double-face");


faEye.addEventListener("click", function () {
  doubleFace.classList.toggle("active");
});

// function createCard (){

// }