console.log('External File')

// button event handler 

 function makeYellow(){
    document.body.style.backgroundColor='yellow';

 }
 function makeBlue(){
    document.body.style.backgroundColor= 'blue';
 }

 function makeRed(){
    document.body.style.backgroundColor= 'red';
 }

//  using id

const makeGreen= document.getElementById('btn-green');
makeGreen.onclick= function makeGreen(){
    document.body.style.backgroundColor='green';
}

// using function calling

const makePurple= document.getElementById('btn-purple');

function makeBtnPurple(){
   document.body.style.backgroundColor='purple';
}

makePurple.onclick= makeBtnPurple;

// eventListener with function name

document.getElementById('btn-make-pink').addEventListener('click', function makePink(){
   document.body.style.backgroundColor='pink';
})

// eventListener Without function name
document.getElementById('btn-make-gold').addEventListener('dblclick', function (){
   document.body.style.backgroundColor='goldenrod';
})