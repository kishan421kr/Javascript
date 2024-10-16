function calculate(){
    let num1 =parseFloat(document.querySelector('#num1').value);
    let num2 =parseFloat(document.querySelector('#num2').value);
    let num3 =parseFloat(document.querySelector('#num3').value);

    let total=num1+num2+num3;
    let result=total/3;
    // console.log(result);
    window.alert(result);
    

}