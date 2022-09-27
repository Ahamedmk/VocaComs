
const newCards = [
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
  },
  {
    motComorien: "Hula",
    motFr: "Manger",
  }
];

console.log(newCards[1].motComorien);
const body = document.querySelector("body");
const final = document.querySelector(".final");
const restart = document.querySelector(".restart");
const complet = document.querySelector(".complet");
const nbrCarte = document.querySelector(".nbreCarte");
const cards = document.querySelector(".card");
const motComs = document.querySelector(".motComorien");
const motTrad = document.querySelector(".motTrad");
const divMot = document.createElement("div");
const divMotFr = document.createElement("div");
const divI = document.createElement("div");
const listen = document.createElement("i");
const image = document.querySelector("img");
listen.className = "fa-solid fa-ear-listen";
listen.setAttribute('id','son');
divMot.className = "motCom";
const faEye = document.querySelector(".fa-eye");
const faEyeNone = document.querySelector("#oeil");
const doubleFace = document.querySelector(".double-face");
const revision = document.querySelector(".revoir");
const result = document.querySelector(".result");
let correct = document.querySelector(".correct");
let cardCorrect = document.querySelector(".fa-thumbs-up");
let cardRevision = document.querySelector(".fa-book");
let recap = document.querySelector(".recap");
let conseil = document.querySelector(".conseil");
const comentaire = document.querySelector(".comentaire");
console.log(listen);
let nbreMot = 0;
// let wordMotComorien = newCards[nbreMot].motComorien;

let faux = [];
let vrai = [];


//---les audios---------------------
const son = document.createElement("audio");
son.src = "audio/apvasa.mp3";
doubleFace.appendChild(son);

let son1 = document.createElement("audio");
son1.src = "audio/darassa.mp3";
doubleFace.appendChild(son1);

let son2 = document.createElement("audio");
son2.src = "audio/djibou.mp3";
doubleFace.appendChild(son2);

let son3 = document.createElement("audio");
son3.src = "audio/fasiri.mp3";
const soni = son3.id;
doubleFace.appendChild(son3);

let son4 = document.createElement("audio");
son4.src = "audio/hula.mp3";
doubleFace.appendChild(son4);

const translate = [son, son1, son2, son3, son4];
console.log(translate[2]);

//--------------jouer le son-------------------------- 
function playSound(){
  doubleFace.addEventListener("click", function (){
    translate[nbreMot].play();
  })
}
playSound()

//---------------retourner la carte recto/verso-------------------------
faEye.addEventListener("click", function () {
  doubleFace.classList.toggle("active");
  faEyeNone.style.display= "flex";
  faEyeNone.style.color= "red";
  faEye.style.display= "none";  
   })

   faEyeNone.addEventListener("click", function () {
    doubleFace.classList.toggle("active");
    faEyeNone.style.display= "none";
    faEye.style.display= "flex";  
     })

//---------------------créer la carte -----------------------------
// const wordMotFr = newCards[nbreMot].motFr;
 function createCard (){ 
divMot.textContent = newCards[nbreMot].motComorien;
divMotFr.textContent = newCards[nbreMot].motFr;
motComs.appendChild(divMot);
motComs.appendChild(listen);
divMotFr.className = "fr";
motTrad.appendChild(divMotFr);

 }
 createCard()

 //------------------réponse ok-----------------------
 function newEtape(){
cardCorrect.addEventListener("click", function(){
  divMot.textContent = "";
  divMotFr.textContent = "";
  nbreMot += 1;
  vrai.push(nbreMot);
  nbrCarte.textContent = `${nbreMot}/${newCards.length}`;
  correct.textContent = `${vrai.length}`;
  
  setTimeout(() => recapitul(),2000);
  // recapitul()
  createCard()
})
 }
 newEtape()

 //----------------------------carte à revoir-------------------
 function newEtapeRevision(){
  cardRevision.addEventListener("click", function(){
    // cardRevision.className = "fa-shake";
    divMot.textContent = "";
    divMotFr.textContent = "";
    nbreMot += 1;
    faux.push(nbreMot);
    console.log(faux.length);
    nbrCarte.textContent = `${nbreMot}/${newCards.length}`;
    revision.textContent = `${faux.length}`;
    // cards.style.display = "none";
    setTimeout(() => recapitul(),2000);
    // recapitul()
    createCard()
  })
   }
   newEtapeRevision()

    function recapitul(){
      if (nbreMot === newCards.length){
        // cards.innerHTML = "";
        final.style.display = "flex";
        complet.style.display = "none";
  
        recap.innerHTML = `  <u>Résultat</u> 
        
        <br>vous avez obtenu:<br>
        
         <div><span>${vrai.length}</span> bonne(s) réponse(s) et <br>
        
         <span>${faux.length}</span> mauvaise(s) réponse(s)</div>`

         if(vrai.length >= (80*(newCards.length))/100){
          conseil.innerHTML = ` Félicitation!!
          <br>
          Continuez!! votre apprentissage,
          <br>
          vous etes sur la bonne voix!!`
         }else if(vrai.length >= (50*(newCards.length))/100){
          conseil.innerHTML = ` Très bien !!
          <br>
          Ne lachez pas prise!!,
          <br>
          vous etes en nette progression`
         }else{
          conseil.innerHTML = `N'abandonnez pas!!
          <br>
          Et recommencez!! encore et encore,
          <br>
          car c'est en forgeant qu'on devient forgeron 😉`
          
         }
         
      }
     }
     recapitul()

     restart.addEventListener("click", function(){
      location.reload();
     })

   console.log(final);