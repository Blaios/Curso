var url = 'https://web-jedi.herokuapp.com/users';


window.addEventListener('load', async()=> {
    const form = document.querySelector('form')
    form.addEventListener('submit', async(e)=>{
        e.preventDefault();
        var form_doc = document.forms[0]
        var username = form_doc["username"].value
        var password = form_doc["password"].value
        try {
            res = await axios.get(url);
            login(res, username, password);
        }
        catch(error) {
            console.log(data)
            alert('oops, parece que algo ha fallado!')
            console.log(error)
        }
    });
});

function login(response, username, password) {
    result = $("#username", response);
    console.log(result);
    result2 = $("#password", response);
    console.log(result2);
    if (result && result2) {
        alert('El usuario ha sido registrado correctamente')
        console.log(response)
        window.location.replace("https://blaios.netlify.app/home")
    }
    else {
        alert('oops, parece que algo ha fallado!')
        console.log(error)
        window.location.replace("https://blaios.netlify.app")
    }
   
}