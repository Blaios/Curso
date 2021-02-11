var url = 'https://web-jedi.herokuapp.com/users';

var user = {
    username : "",
    email: "",
    password : ""
}


window.addEventListener('load',()=> {
    const form = document.querySelector('form')
    form.addEventListener('submit', async(e)=>{
        e.preventDefault();
        var form_doc = document.forms[0]
        user.username = form_doc["username"].value
        user.password = form_doc["password"].value
        user.email = form_doc["email"].value
        var data = JSON.stringify(user)
        console.log(data)

        await axios.post(url, data)
            .then(function (response) {
                window.location.replace("file:///C:/Users/blaio/Documents/GitHub/Curso/index.html")
                alert('El usuario ha sido registrado correctamente')
                console.log(response)
            })
            .catch(function (error) {
                console.log(data)
                alert('oops, parece que algo ha fallado!')
                console.log(error)
            })
    });
});