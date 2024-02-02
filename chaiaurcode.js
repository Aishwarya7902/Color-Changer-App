const buttons=document.querySelectorAll('.button'); //it will return  a nodeList not HTML collection
const body=document.querySelector('body');

buttons.forEach(function(button){
    //add event listener to each button

    button.addEventListener('click' , function(e){ //here e is an event
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
    })
})



