let button = document.getElementById("btn");

let details = document.getElementById("details");

let student = {

    name: "Kusuma",

    age: 21,

    branch: "CSE",

    skills: [

        "HTML",

        "CSS",

        "JavaScript"

    ]

};

button.addEventListener("click", function(){

    details.innerHTML = `

    <h3>Name: ${student.name}</h3>

    <p>Age: ${student.age}</p>

    <p>Branch: ${student.branch}</p>

    <h4>Skills</h4>

    <ul>

        <li>${student.skills[0]}</li>

        <li>${student.skills[1]}</li>

        <li>${student.skills[2]}</li>

    </ul>

    `;

});