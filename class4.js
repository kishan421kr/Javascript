// function check(){
//     let res = window.confirm("Do you really wants to log out");
//     // console.log(res);
//     if(res){
//         window.location.href = "login.html"
//         // window.open("login.html")
//     }
//     else{
//         window.alert("Thanks For Coming")
//     }
// }
// check();

// Even odd programe

function numbercheck (){
    let num = parseInt(window.prompt("Enter the number"));

    if(num % 2 == 0){
        window.alert("number is even")
    }
    else{
        window.alert("number is odd")
    }
}
numbercheck ();