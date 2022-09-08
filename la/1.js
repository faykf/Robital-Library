let names = ['Eslam','Anwe','Fayk','Mohamad','Dyab','Hasan'];
let ages = ['18 years old','46 years old','89 years old','130 years old','170 years old','220 years old'];
let imgs = ['1.jpg','2.png','3.png','4.jpg']
let tem;
let container = document.createElement('div');
document.body.appendChild(container)
container.style.textAlign ='center';

function silz(names,ages){
    let card = document.createElement('div')
    let title = document.createElement('h2');
    let age = document.createElement('p');
    let img = document.createElement('img');
    
    let head = document.createTextNode(names);
    let ageNane = document.createTextNode(ages);
    img.src = imgs[i]
    
    title.appendChild(head);
    age.appendChild(ageNane);

    card.appendChild(title);
    card.appendChild(age);
    card.appendChild(img);

    container.appendChild(card);


    card.style.width ='200px';
    card.style.background ='#555';
    card.style.padding ='10px';
    img.style.width ='100%';
    card.style.margin ='2px';
    card.style.color ='#fff';
    card.style.display ='inline-block';
    
}

for(let i = 0; i < 9; i++){
    tem = i;
    silz(names[i],ages[i]);
}
