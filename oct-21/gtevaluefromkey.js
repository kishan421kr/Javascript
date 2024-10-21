
let document1 ={
    "querySelector":function(arg){
        console.log("hello")
    },
    "getElementById":function(){

    }
}
document1.querySelector('#id');

let obj = [
    {
        "name":"kishan",
        "course":"mern",
        "mobno":6265996677,
    },
    {
        "name":"basant",
        "course":"python",
        "mobno":8529637419,
    }
]
console.log(obj[0].mobno);
console.log(obj[1].name);
