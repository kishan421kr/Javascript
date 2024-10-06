// setTimeout (run, 3000);

// function run(){
//     console.log("called");
// }

// setTimeout(()=>{
//     console.log("second time called");
// },5000)

function kuchbhi(){
    setTimeout(show,3000);
    console.log("settimeout1 function called")
    
    function show(){
        console.log("kuchbhi function called")
        let selectwebsite = document.querySelector('#website');
        selectwebsite.style.display = 'block';

        let selctimg = document.querySelector('#img');
        selctimg.style.display = 'none';

        setTimeout(showpop,7000);
        console.log("settimeout2 function called")
    }

    
    
    function showpop(){
        console.log("pop function called")
        let selectpopup = document.querySelector('#popup');
        selectpopup.style.display = 'block';

        }
}
// function pop(){
//     console.log("pop function called")
//     setTimeout(showpop,2000);

//     function showpop(){
//         let selectpopup = document.querySelector('#popup');
//         selectpopup.style.display = 'block';

//     }
// }
function hide(){
    console.log("hide function called");
    let selectpopup =document.querySelector('#popup');
    selectpopup.style.display ='none';
}