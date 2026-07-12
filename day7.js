let button = document.getElementById("btn");

let title = document.getElementById("title");

let details = document.getElementById("details");

button.addEventListener("click", function(){

    details.innerHTML = `
        <p><strong>Branch:</strong> CSE</p>
        <p><strong>Skills:</strong> HTML, CSS, JavaScript</p>
    `;

    title.style.color = "blue";

    title.style.fontSize = "40px";

    document.body.style.backgroundColor = "lightgreen";

});