const newCards = [
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

console.log(newCards[1].motComorien);

const nbrCarte = document.querySelector(".nbreCarte");
const cards = document.querySelector(".card");
const motComs = document.querySelector(".motComorien");
const motTrad = document.querySelector(".motTrad");
const divMot = document.createElement("div");
const divMotFr = document.createElement("div");
const divI = document.createElement("div");
const listen = document.createElement("i");
listen.className = "fa-solid fa-ear-listen";
listen.setAttribute('id','son');
divMot.className = "motCom";
const faEye = document.querySelector(".fa-eye");
const doubleFace = document.querySelector(".double-face");
const revision = document.querySelector(".revoir");
let correct = document.querySelector(".correct");
let cardCorrect = document.querySelector(".fa-thumbs-up");
let cardRevision = document.querySelector(".fa-book");
let nbreMot = 0;
let faux = [];
let vrai = [];
// correct.style.display = "none";
// revision.style.display = "none";
console.log(revision);




faEye.addEventListener("click", function () {
  doubleFace.classList.toggle("active");
});

 function createCard (){
  
divMot.textContent = newCards[nbreMot].motComorien;
// listen.className = "fa-solid";
motComs.appendChild(divMot);
motComs.appendChild(listen);

// motComs.innerHTML = "<i class=fa-solid fa-ear-listen id=son></i>";
divMotFr.className = "fr";
motTrad.appendChild(divMotFr);
divMotFr.textContent = newCards[nbreMot].motFr;
// console.log(cards);
 }
 createCard()

 function newEtape(){
cardCorrect.addEventListener("click", function(){
  divMot.textContent = "";
  divMotFr.textContent = "";
  nbreMot += 1;
  vrai.push(nbreMot);
  nbrCarte.textContent = `${nbreMot}/${newCards.length}`;
  correct.textContent = `${vrai.length}`;
  createCard()
})
 }
 newEtape()

 function newEtapeRevision(){
  cardRevision.addEventListener("click", function(){
    divMot.textContent = "";
    divMotFr.textContent = "";
    nbreMot += 1;
    // revision.style.display = "flex";
    faux.push(nbreMot);
    console.log(faux.length);
    nbrCarte.textContent = `${nbreMot}/${newCards.length}`;
    revision.textContent = `${faux.length}`;
    createCard()
  })
   }
   newEtapeRevision()