var url = 'https://web-jedi.herokuapp.com/users';

var user = {
    username : "",
    email: "",
    password : ""
}



window.addEventListener('load', async()=> {
    try {
        var users = (await axios.get(url)).data;    
    }
    catch(error) {
        alert('oops, parece que algo ha fallado!')
        console.log(error)
    }
    
    const form = document.querySelector('form')
    form.addEventListener('submit', async(e)=>{
        e.preventDefault();
        var form_doc = document.forms[0]
        user.username = form_doc["username"].value
        user.password = form_doc["password"].value
        user.email = form_doc["email"].value
        for (var i = 0; i < users.length; i++) {
            if (users[i].username === user.username) {
                alert("Error! El usuario ya existe! Vuelve a intentarlo por favor")
                window.location.replace("https://blaios.netlify.app/register")
                return;
            }
        }
        try {
            await axios.post(url, user);
            window.location.replace("https://blaios.netlify.app/home")
            alert('El usuario ha sido registrado correctamente')
            console.log(response)
        }
        catch(error) {
            console.log(data)
            alert('oops, parece que algo ha fallado!')
            console.log(error)
        }
    });
});


