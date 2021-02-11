var url = 'https://web-jedi.herokuapp.com/users';


window.addEventListener('load', async()=> {
    const form = document.querySelector('form')
    form.addEventListener('submit', async(e)=>{
        e.preventDefault();
        var form_doc = document.forms[0]
        var username = form_doc["username"].value
        var password = form_doc["password"].value
        try {
            var res = (await axios.get(url)).data;
            login(res, username, password)
            window.location.replace("https://blaios.netlify.app/home")

            
        }
        catch(error) {
            alert('oops, parece que algo ha fallado!')
            console.log(error)
            window.location.replace("https://blaios.netlify.app/")
        }
    });
});

function login(response, username, password) {
    for (var i = 0; i < response.length; i++) {
        if (response[i].username === username) {
            if (response[i].password === password) {
                alert('El usuario ha sido registrado correctamente')
                return
            }
            else return error;
        }
    }
    return error;
}