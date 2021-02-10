var url = 'https://web-jedi.herokuapp.com/users';

var user = {
    username : "",
    email: "",
    password : ""
    
}


window.addEventListener('load',()=> {
    const form = document.querySelector('form');
    form.addEventListener('submit', async(e)=>{
        e.preventDefault();
        let myform = document.forms[0]
        user.username = myform["username"].value
        user.password = myform["password"].value
        user.email = myform["email"].value
        var data = JSON.stringify(user)
        console.log(data)

        await axios.post(url, data)
            .then(function (response) {
                window.location.replace("/index.html");
                alert('El usuario ha sido registrado correctamente');
                console.log(response);
            })
            .catch(function (error) {
                console.log(data)
                alert('oops, parece que algo ha fallado!');
                console.log(error);
            })
    });
});