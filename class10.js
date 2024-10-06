function data(){
    let name = document.querySelector('#name').value;
    let password = document.querySelector('#password').value;
    let course = document.querySelector('#course').value;
    let email = document.querySelector('#email').value;
    let number =document.querySelector('#number').value;
    let Gender = document.querySelector('#gender').value;
    let cpassword = document.querySelector('#cpassword').value;

    console.log(name,password,course,email,number,Gender);


    if(name === ""){
        document.querySelector('#errorname').innerHTML ="please enter your name";
        let selectname =document.querySelector('#name');
        selectname.style.borderColor ='red';
        selectname.style.outlineColor ='red';
        return false;
    }
    else if(email === ""){
        document.querySelector('#erroremail').innerHTML = "please enter vailid mail";
        let selectemail = document.querySelector('#email');
        selectemail.style.borderColor = 'red';
        selectemail.style.outlineColor = 'red';
        return false;
    }
    else if (password === ""){
        document.querySelector('#errorpassword').innerHTML = "Please enter your password";
        let selectpassword = document.querySelector('#password');
        selectpassword.style.borderColor ='red';
        selectpassword.style.outlineColor ='red';
        return false;
    }
    else if(!
        (
            password.match(/[1234567890]/) &&
            password.match(/[~!@#$%^&*()_+]/)&&
            password.match(/[qwertyuiopasdfghjklzxcvbnm]/)&&
            password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)
        )
    ){
        document.querySelector('#errorpassword').innerHTML = "Password contain atleast 1 lower, Upper ,Special and Number";
        let selectpassword = document.querySelector('#password');
        selectpassword.style.borderColor ='red';
        selectpassword.style.outlineColor = 'red';
        return false;
    }
    else if(!(password === cpassword)){
        
    }
    
}
function s(a){
    console.log(a);
    let selectinput = document.querySelector(`'#${a}'`);
    console.log(selectinput);
    
    // let selecterrorname = document.querySelector('#errorname');
    // let selecterroremail = document.querySelector('#errormail');
    // selecterrorname.innerHTML ="";
    // selecterroremail.innerHTML = "";
    selectinput.style.borderColor ="black";
    selectinput.style.outlineColor = "black";
}