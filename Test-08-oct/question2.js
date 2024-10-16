function tax(){
    let selectsalary = document.querySelector('#salary').value;
    if(selectsalary < 300000){

        window.alert('Do not want to pay tax');
    }
    else if(selectsalary >=300000 && selectsalary < 750000 )
        {
        let tax = (selectsalary/100)*10;
        window.alert("Tax is" + tax)
        
    }
    else (selectsalary >= 750000)
    {
        let tax = (selectsalary/100)*20;
        window.alert("Tax is")
        window.alert(tax);
    }
}