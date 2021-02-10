let user = {
    Username : "",
    Password : "",
    Email: ""
}

axios.get('https://web-jedi.herokuapp.com/users')
    .then( response => {
        console.log(response.data)
    })
    .catch (error => {
        console.log(error)
    })