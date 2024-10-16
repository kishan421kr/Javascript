// let str ='we are developers'
// let str1 = "we are developers"
// let str2 = `we are developers`;

// count=0;
// for(let i =0 ; i < str.length ; i++){
//     console.log(i);
//     console.log(str[i]);
//     count++;
// }
// console.log("length is " + count);
// form value ko submit karta hai to rokne ke liye return use karte hai

function inputcheck(){
    let str = document.querySelector.apply('#str').value;
    let count =0;
    for(let i=0; i < str.length ; i++){
        if(str[i] === " "){
            count++;
        }
    }
    document.querySelector('#answer').innerHTML = count;
    return false;
}