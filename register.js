let user = {
    Username : "",
    Email: "",
    Password : ""
}

window.addEventListener('load', ()=> {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let myform = document.forms[0]
        user.Username = myform["username"].value
        user.Email = myform["email"].value
        user.Password = myform["password"].value
        let data = JSON.stringify(user)
        console.log(data)
        axios.post('https://web-jedi.herokuapp.com/register', data)
            .then(function (response) {
                if (response.data == "Register") {
                    window.location.replace("/index.html");
                    alert("User registered successfully")
                }
                else {
                    alert("Username already exists")
                }
            })
            .catch(function (error) {
                console.log (error)
            });
    });
});