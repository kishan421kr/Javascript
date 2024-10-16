function check(){
    let password =document.querySelector('#password').value;


    if(password === "")
    {
        document.querySelector('#error').innerHTML = "Please enter your password";
        let selectpassword = document.querySelector('#password');
        selectpassword.style.borderColor ='red';
        selectpassword.style.outlineColor ='red';
        return false;
    }
    if(!
        (
            password.match(/[1234567890]/) &&
            password.match(/[~!@#$%^&*()_+]/)&&
            password.match(/[qwertyuiopasdfghjklzxcvbnm]/)&&
            password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
        )
    ){
        document.querySelector('#error').innerHTML = "Password contain atleast 1 lower, Upper ,Special and Number";
        let selectpassword = document.querySelector('#password');
        selectpassword.style.borderColor ='red';
        selectpassword.style.outlineColor = 'red';
        return false;
    }
}