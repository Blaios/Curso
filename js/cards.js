var url = 'https://web-jedi.herokuapp.com/animales';


const load = (response) => {
    for (let i = 0; i < response.length; i = i+2) {
      $("#cardsHome").append(
        ` <div class="row justify-content-center align-items-center">
        <div class="col mx-5 mb-5 mt-5">
            <div class="card card-flip h-100">
                <div class="card-front text-white">
                    <div class="card-body">
                        <img class="card-img-top rounded-circle image-delante " src=${response[i].link_delante} alt="Card image cap">
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-body">
                        <h3 class="card-title text-home2">Hola! Soy ${response[i].nombre}</h3>
                        <p class="card-text text-home2">Clica sobre mi imagen para saber mas de mi!</p>
                        <a href="ficha.html?id=${response[i].id}">
                            <img class="card-img-top image-detras rounded-circle " src=${response[i].link_detras} alt="Card image cap">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col mx-5 mb-5 mt-5">
            <div class="card card-flip h-100">
                <div class="card-front text-white">
                    <div class="card-body">
                        <img class="card-img-top image-delante rounded-circle " src=${response[i+1].link_delante} alt="Card image cap">
                    </div>
                </div>
                <div class="card-back">
                    <div class="card-body">
                        <h3 class="card-title text-home2">Hola! Soy ${response[i+1].nombre}</h3>
                        <p class="card-text text-home2">Clica sobre mi imagen para saber mas de mi!</p>
                        <a href="ficha.html?id=${response[i+1].id}">
                            <img class="card-img-top image-detras rounded-circle " src=${response[i+1].link_detras} alt="Card image cap">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
      );
    }
  };



$(window).on("load", async () => {
    try {
      animales = (await axios.get(url)).data;
      console.log(animales)
      load(animales);
      console.log(animales);
    } catch (error) {
      console.log(error);
    }
})
