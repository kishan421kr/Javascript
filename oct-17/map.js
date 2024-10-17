// let arr =[25,2,6,4,9,1,5155,55];

// let newarr = arr.map((items)=>{return items*2});
// console.log(newarr);

// let ansarr = arr.map((items)=>{return items+10});
// console.log(ansarr);


function run(){
let arr =[ './www.editiciansubham (252).jpg','./www.editiciansubham (257).jpg','./www.editiciansubham (258).jpg','./www.editiciansubham (261).jpg'];

let output =document.querySelector('#answer');
output.innerHTML =arr.map((imgurl)=>`<img style="width:600px;height:400px;" src="${imgurl}" alt="not found">`).join(" ")

}