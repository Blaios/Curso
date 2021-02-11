var url = 'https://web-jedi.herokuapp.com/users';

var id = 1;


window.addEventListener('load', async()=> {
    const form = document.querySelector('form')
    form.addEventListener('submit', async(e)=>{
        e.preventDefault();
        var form_doc = document.forms[0]
        try {
            var res = (await axios.get(url)).data;
            alert('El usuario ha sido registrado correctamente')
            console.log(response)
            var i = 0;
            console.log(res.length)
            while (i < res.length) {
                console.log(res[i])
                i++;
            }
        }
        catch(error) {
            var i = 0;
            while (i < 4) {
                console.log(res[i])
                i++;
            }
                alert('oops, parece que algo ha fallado!')
                console.log(error)
                console.log(res)
                console.log(res.length)
                console.log(res[i].password)
        }
    });
});