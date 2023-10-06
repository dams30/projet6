
const boutonseLoger = document.querySelector(".seloger");
boutonseLoger.addEventListener("click", function (event) {

    event.preventDefault()

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const trylog = {
        email: email,
        password: password,

    };
    console.log(trylog);
    const chargeUtile = JSON.stringify(trylog);

    console.log(chargeUtile)
    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: chargeUtile
    });


    const user = await fetch("http://localhost:5678/api/users/login").then(user => user.json());

});