// localStorage.setItem("name","dhruv")
// localStorage.setItem("bewkoof","basant")
// localStorage.storage("ghada","kishan")

// let name = localStorage.getItem("name")
// console.log(name);

// localStorage.removeItem("age")

function run(){

let input1= document.querySelector("#input1").value;
// console.log(input1);
let input2=document.querySelector("#input2").value;
let input3 = document.querySelector("#input3").value;
let obj ={
    name :"input1",
    age:"input2",
    contact:"input3"

}
localStorage.setItem("data",obj);


// localStorage.setItem("name",input1);
// localStorage.setItem("age",input2);
// localStorage.setItem("contact",input3);
// return false;

}

// object: it is a datatype

// let obj={
//     name:"kishan",
//     age:52,
//     contact:13225
// }
// console.log(obj)
// console.log(obj.age)


// for (k in obj){
//     console.log(k);
//     console.log(obj[k]);
// }
// (.)=>access member operator