let nameInput = document.getElementById("name");

let ageInput = document.getElementById("age");

let branchInput = document.getElementById("branch");

let button = document.getElementById("btn");

let result = document.getElementById("result");

button.addEventListener("click", function(){

    let name = nameInput.value;

    let age = ageInput.value;

    let branch = branchInput.value;

    if(name === "" || age === "" || branch === ""){

        result.innerText = "Please fill all fields.";

    }

    else{

        result.innerHTML = `
            <h3>Student Registered Successfully!</h3>

            <p>Name: ${name}</p>

            <p>Age: ${age}</p>

            <p>Branch: ${branch}</p>
        `;

    }

});