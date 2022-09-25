const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {
deleteSpeed: 20
})
 .changeDelay(90)
.typeString('Apprenez notre belle langue :<br>')
.pauseFor(400)
.typeString('<strong>celle de nos ancêtres...</strong>')
.pauseFor(1000)
.deleteChars(16)
.typeString('<strong> nos parents...</strong>')
.pauseFor(1000)
.deleteChars(15)
.typeString('<span style="color: green"> Very PIYA!!!</span>')
.start()

const button = document.querySelector(".button")

button.addEventListener("click", function(){
    location.assign("page quizz/index.html")
})