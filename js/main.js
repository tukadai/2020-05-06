'use strict';

{
    //const add=document.getElementById('add');
    const name=document.getElementById('name');
    const start=document.getElementById('start');
    const ul=document.querySelector('ul');
    const game=document.getElementById('game');
    //const input=document.getElementById('input');
    const output=document.getElementById('output');

    const del=document.createElement('button');
    
    var members=[];

    document.querySelector('form').addEventListener('submit',e=>{
        e.preventDefault();

        members.push(name.value);
        console.log(members);
        
        // const del=document.createElement('button');
        //del.textContent='delete';

        const li=document.createElement('li');
        li.textContent=name.value;
        //li.appendChild(del);
        ul.appendChild(li);
    });

    

    del.addEventListener('click',()=>{
        console.log('OK');
        // del.parentNode.removeChild();
    });

    start.addEventListener('click',()=>{
        //input.classList.add('disable');
        output.classList.remove('disable');
        shuffle(members);
        console.log(members);

        
        for(let i=0;i<=Math.ceil(members.length/2);i+=2){
            const li=document.createElement('li');
            li.textContent=`${members[i]} - ${members[i+1]}`;
            game.appendChild(li);
            console.log(members[i]);

        }
    });

    function shuffle(arr){
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
          }
        return arr;
    }
}