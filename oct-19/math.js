// let a = Math.PI;
// console.log(a);

// let b= Math.SQRT2;
// console.log(b);

// let c = 56.6;

// console.log(Math.round(c));
// console.log(Math.floor(c))
// console.log(Math.ceil(c));
// console.log(Math.trunc(c));
// console.log(Math.abs(c));
// console.log(Math.pow(5,5));
// console.log(Math.random());

let selectbtn =document.querySelector('button');
selectbtn.addEventListener('click',gen);

function gen(){
    let store = '';
let str = '1234567890qwertyuiopasdfghjklzxcvbnm' ;
for(let i =0;i<6;i++){

    
    let random = Math.random();
    let ans = random * str.length;
    let afterfloor = Math.floor(ans);
    let cha = str.charAt(afterfloor);
    store = store + cha;
    
}
// console.log(store);
let selecteddiv = document.querySelector('#divid');
selecteddiv.innerHTML =store;

}

