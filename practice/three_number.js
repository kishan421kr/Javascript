function cal(){
    let number1 = document.querySelector('#number1').value;
    let number2 = parseFloat(document.querySelector('#number2').value);
    let number3 = parseFloat(document.querySelector('#number3').value);

    console.log(number1,number2,number3);

    if(number1 === ""){
        document.querySelector('#error1').innerHTML ="please enter your name";
        let selectname =document.querySelector('#number1');
        selectname.style.borderColor ='red';
        selectname.style.outlineColor ='red';
        console.log("code executed");
        return false;
    }
    else if(!(number1.match(/[1234567890]/))){
        document.querySelector('#error1').innerHTML = "Please Enter Number";
        let selectpassword = document.querySelector('#number1');
        selectpassword.style.borderColor ='red';
        selectpassword.style.outlineColor = 'red';
        return false;
    }
}