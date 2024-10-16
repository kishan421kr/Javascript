let arrstr = ["er" ,"yuthb" , "quee" , "scs" ,"av"];
arrstr.sort();
console.log(arrstr);

let arr = [25,64,624,4,9,58,254];
arr.sort(function(a,b){return a-b});
console.log(arr);

let arr1 = [25,64,624,4,9,58,254];
arr1.sort(function(a,b){return b-a});
console.log(arr1);

let output =arr1.reduce(function(a,b){return a+b });
console.log(output);

let answerstr =arr1.toString();
console.log(answerstr);

let answerjoin = arr1.join(" ");
console.log(answerjoin);