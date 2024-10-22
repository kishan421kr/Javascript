let arrofobj = [
    {
        "id":1,
        "imageurl":"./iron mask.jpg",
        "name":"shoes",
        "pname":"nike",
        "pprice":9999
    },
    {
        "id":2,
        "imageurl":"./iron mask.jpg",
        "name":"shoes",
        "pname":"nike",
        "pprice":9999
    },
    {
        "id":3,
        "imageurl":"./iron mask.jpg",
        "name":"shoes",
        "pname":"nike",
        "pprice":9999
    },
    {
        "id":4,
        "imageurl":"./iron mask.jpg",
        "name":"shoes",
        "pname":"nike",
        "pprice":9999
    },
    {
        "id":5,
        "imageurl":"./iron mask.jpg",
        "name":"shoes",
        "pname":"nike",
        "pprice":9999
    },
    {
        "id":6,
        "imageurl":"./iron mask.jpg",
        "name":"shoes",
        "pname":"nike",
        "pprice":9999
    },
    {
        "id":7,
        "imageurl":"./iron mask.jpg",
        "name":"shoes",
        "pname":"nike",
        "pprice":9999
    },
    {
        "id":8,
        "imageurl":"./iron mask.jpg",
        "name":"shoes",
        "pname":"nike",
        "pprice":9999
    },

];
let selectdiv =document.querySelector('#img');
selectdiv.innerHTML = arrofobj.map((card)=>`
<div style="margin:20px; box-shadow:0px 0px 10px 2px black">
    <img width="200px" height ="200px" src="${card.imageurl}"></img>
    <div>${card.name}</div>
    <div>${card.pname}</div>
    <div>${card.pprice}</div>
    <div>add to cart</div>
    <div>byu now</div>
</div> `).join(" ")