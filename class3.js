function number (){
    let num1 = parseFloat(window.prompt("Enter First number"));
    window.alert(num1);
    let num2 = parseFloat(window.prompt("Enter First number"));
    window.alert(num2);
    let num3 = parseFloat(window.prompt("Enter First number"));
    window.alert(num3);

    if(num1 >num2){
        window.alert("Number 1 is greater");
    }
    else if (num2 >num3){
        window.alert("Number 2 is greater");
    }
    else{
        window.alert("Number 3 is greater");
    }
}
number();