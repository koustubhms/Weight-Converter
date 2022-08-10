
let input=document.getElementById("input-wt");
input.addEventListener('input',function(e){
    
    var pounds=e.target.value;
    document.getElementById("gramsOutput").innerHTML=(pounds/0.0022046).toFixed(2);
    document.getElementById("KgOutput").innerHTML=(pounds/2.2046).toFixed(2);
    document.getElementById("ozOutput").innerHTML=(pounds*16).toFixed(2);
});
document.getElementById("swap-btn1").addEventListener('click',(e)=>{
    e.preventDefault;
    let card=document.getElementById('card1');
    card.style.width='80%';
    card.style.height='auto';
    let grams=(input.value*0.0022046).toFixed(2); 
    let dive=document.createElement('div');
    dive.id='cards1';
    dive.innerText=(input.value)+'grams = '+grams+" pounds";
    document.getElementById('cardblk1').appendChild(dive);
    let button=document.createElement('button');
    button.id='resetbtn1';
    button.innerText='delete';
    document.getElementById('cardblk1').appendChild(button);
    button.addEventListener('click',()=>{
        button.remove();
        document.getElementById('cards1').remove();
    
    })
    
    

})
document.getElementById("swap-btn2").addEventListener('click',(e)=>{
    e.preventDefault;
    let card=document.getElementById('card2');
    card.style.width='80%';
    card.style.height='auto';
    let grams2=(input.value*2.2046).toFixed(2); 
    let dive2=document.createElement('div');
    dive2.id='cards2';
    dive2.innerText=input.value+'grams = '+grams2+" Kilogram";
    document.getElementById('cardblk2').appendChild(dive2);
    let button=document.createElement('button');
    button.id='resetbtn2';
    button.innerText='delete';
    document.getElementById('cardblk2').appendChild(button);
    button.addEventListener('click',()=>{
        button.remove();
        document.getElementById('cards2').remove();
    
    
})
})
document.getElementById("swap-btn3").addEventListener('click',(e)=>{
    e.preventDefault;
    let card=document.getElementById('card3');
    card.style.width='80%';
    card.style.height='auto';
    let grams3=(input.value/16).toFixed(2); 
    let dive3=document.createElement('div');
    dive3.id='cards3';
    dive3.innerText=input.value+'grams = '+grams3+" Ounces";
    document.getElementById('cardblk3').appendChild(dive3);
    let button=document.createElement('button');
    button.id='resetbtn3';
    button.innerText='delete';
    document.getElementById('cardblk3').appendChild(button);
    button.addEventListener('click',()=>{
        button.remove();
        document.getElementById('cards3').remove();
    

})
});

function resetFun(){
    
    document.getElementById('myform').reset();
    document.getElementById("gramsOutput").innerText="";
    document.getElementById("KgOutput").innerText="";
    document.getElementById('ozOutput').innerText="";
//     document.getElementById('cards1').innerText="";
//     document.getElementById('cards2').innerText="";
//     document.getElementById('cards3').innerText="";
}