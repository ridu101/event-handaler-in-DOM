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