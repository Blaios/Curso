

var url = 'https://web-jedi.herokuapp.com/users';

var user = {
    username : "",
    password : "",
    email: ""
}


$(window).on("load",  async () => {

    user.username = $('#username')[0]
    user.password = $('#password')[0]
    user.email = $('#email')[0]
    var data = JSON.stringify(user)
    console.log(data)

    $('#sub').on("click", async () => {
        try {
            await axios.post(url, data);
            window.location.replace("/index.html")
            alert('El usuario ha sido registrado correctamente')
            console.log(response)
            console.log(data)

        } catch (error) {
            alert('oops, parece que algo ha fallado!')
            console.log(error)
        }
    });

});