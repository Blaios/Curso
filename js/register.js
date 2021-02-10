

var url = 'https://web-jedi.herokuapp.com/users';


var user = {
    Username : "",
    Password : "",
    Email: ""
}



window.addEventListener('load', ()=> {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let myform = document.forms[0]
        user.Username = myform["username"].value
        user.Password = myform["password"].value
        user.Email = myform["email"].value
        var data = JSON.stringify(user)
        console.log(data)

        $('#sub').on("click", async () => {
            await axios.post(url, data)
            .then(function (response) {
                alert('El usuario ha sido registrado correctamente');
                console.log(response);
            })
            .catch(function (error) {
                alert('oops, parece que algo ha fallado!');
                console.log(error);
            })
        });
    });
});