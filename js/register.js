

var url = '[https://web-jedi.herokuapp.com/users]';

var user = {
    Username : $("#username").val(),
    Password : $("#password").val(),
    Email: $("#email").val()
}

axios.post(url, user, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(function (response) {
    alert('El usuario ha sido registrado correctamente');
    console.log(response);
  })
  .catch(function (error) {
    alert('oops, parece que algo ha fallado!');
    console.log(error);
  })
;