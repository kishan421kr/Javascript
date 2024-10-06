function tax(){
let num = parseFloat(window.prompt("Enter your salary"));
let total = 0;
// let tax = 0;
console.log(num);

if(num <= 350000 ){
    window.alert("You don't havae to pay tax");
}
else if(num >= 350000 && num <= 800000 )
{   
    window.alert((num/100)*10);
}
else if(num >=8000000){
    window.alert((num/100)*17);
}
else{
    window.alert("Invailid input")
}
}
tax();