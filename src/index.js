/// Import here all of your customComponents
import "./components/sectionExampleComponent/sectionExampleComponent.js";
import "./components/sectionComponent/sectionComponent.js"


// general code from the app that doesn't belong to any compoenent
const bgButton = document.getElementById('background-button');
bgButton.addEventListener('click', ()=> changeBg())

function changeBg(){
    console.log('change bg')
    const section = document.querySelector('section-example-component')
    var randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    section.setAttribute('background', randomColor)
}