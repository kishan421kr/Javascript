let obj = [
    {
        "name":"kishan",
        "id":1,
        "img":"./img.jpg",
        "course":"mern",
        "mobno":6265996677,
    },
    {
        "name":"basant",
        "id":2,
        "img":"./img1.jpg",
        "course":"python",
        "mobno":8529637419,
    },
    {
        "name":"basant",
        "id":2,
        "img":"./img1.jpg",
        "course":"python",
        "mobno":8529637419,
    }
]

let selecttable = document.querySelector('#card');

selecttable.innerHTML = obj.map((e) =>`<tr>
    <td>${e.id}</td>
    <td><img width="100" src ="${e.img}"></td>
    <td>${e.name}</td>
    <td>${e.course}</td>
    <td>${e.mobno}</td>
</tr>`
).join(" ");
