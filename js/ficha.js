var url = 'https://web-jedi.herokuapp.com/animales';






const load = (response, id) => {
    $("#fichaAnimal").append(
        `<div class="row justify-content-end align-items-center mt-5">
        <div class="col-md-6 col-sm-12 ">
            <h1 class="text-home text-center mb-5">LA VIDA DE ${response[id].nombre}</h1>
            <p class="justified">${response[id].biografia}
            </p>
            
        </div>
        <div class="col-1"></div>

        <div class="col-md-4 col-sm-12">
            <img class="card-img-top image-detras rounded-circle " src=${response[id].link_delante} alt="La imagen no está disponible">
        </div>
    </div>`
    );
}





$(window).on("load", async () => {
    try {
      animales = (await axios.get(url)).data;
      console.log(animales)
      var url_string = window.location.href
      var url2 = new URL(url_string);
      var id = url2.searchParams.get("id");
      id = id -1
      console.log(id);
      load(animales,id);
    } catch (error) {
      console.log(error);
    }
})