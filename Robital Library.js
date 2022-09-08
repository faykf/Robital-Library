
let pens = document.getElementById('pens');
let ast = document.getElementById('ast');
let color = document.getElementById('color');
let services1 = document.getElementById('services-1');
let services2 = document.getElementById('services-2');
let services3 = document.getElementById('services-3');
let home = document.getElementById('home');
let hhome = document.getElementById('hhome');
let comm = document.getElementById('comm');
let phone = document.getElementById('phone');

hhome.onclick = function(){
    comm.style.display ='none';
    home.style.display ='block';
    services1.style.display ='none';
    services2.style.display ='none';
    services3.style.display ='none';
    scroll({
        left:0,
        top:0,
        behavior:"smooth"   
    })
}

home.onclick = function(){
    comm.style.display ='none';
    home.style.display ='block';
    services1.style.display ='none';
    services2.style.display ='none';
    services3.style.display ='none';
    scroll({
        left:0,
        top:0,
        behavior:"smooth"   
    })
}
pens.onclick = function(){
    comm.style.display ='none';
    home.style.display ='none';
    services1.style.display ='block';
    services2.style.display ='none';
    services3.style.display ='none';
    scroll({
        left:0,
        top:0,
        behavior:"smooth"   
    })
}
colors.onclick = function(){
    comm.style.display ='none';
    home.style.display ='none';
    services1.style.display ='none';
    services2.style.display ='block';
    services3.style.display ='none';
    scroll({
        left:0,
        top:0,
        behavior:"smooth"   
    })
}
ast.onclick = function(){
    comm.style.display ='none';
    home.style.display ='none';
    services1.style.display ='none';
    services2.style.display ='none';
    services3.style.display ='block';
    scroll({
        left:0,
        top:0,
        behavior:"smooth"   
    })
}
phone.onclick = function(){
    comm.style.display ='block';
    home.style.display ='none';
    services1.style.display ='none';
    services2.style.display ='none';
    services3.style.display ='none';
    comm.style.display ='flex';
    comm.style.alignItems ='center';
    scroll({
        left:0,
        top:0,
        behavior:"smooth"   
    })
}

scroll({
    left:0,
    top:0,
    behavior:"smooth"   
})