
function  getRndInteger (min, max)  {
    return(Math.floor(Math.random() * (max-min) + min))
}
// let min = 1;
// let max = 6;

//    console.log (Math.floor(Math.random() * (max-min) + min)) 

// How TO Add ElEMENT in js
function addLanguage(lang){
const li = document.createElement('li')
li.appendChild(document.createTextNode(lang))
document.querySelector('.language').appendChild(li)
}
addLanguage('Mojo')


function nextLang(mylang){
const li = document.createElement('li')
li.appendChild(document.createTextNode(mylang))
document.querySelector('.language').appendChild(li)
}
nextLang('Java')

function nextlang1(mylang1){
const li = document.createElement('li')
li.appendChild(document.createTextNode(mylang1))
document.querySelector('.language').appendChild(li)
}
nextlang1('php')

// How TO REPLACE ElEMENT in js
const FirstList = document.querySelector('li:first-child')
FirstList.innerHTML = 'Mojo'


const secondList = document.querySelector('li:nth-child(2)')
secondList.innerHTML = 'Python'

// How TO REMOVE ElEMENT in js
const FirstList1 = document.querySelector('li:first-child')
FirstList1.remove()

const secondList1 = document.querySelector('li:nth-child(2)')
secondList1.remove()