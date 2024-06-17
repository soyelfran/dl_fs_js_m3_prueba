// https://superheroapi.com/api/4905856019427443

// /id
//     /powerstats
//     /biography
//     /appearance
//     /work
//     /connections
//     /image
// /search/"name"

//ajax para consulta
$(document).ready(function () {
  $("#btn-buscar").submit(function () {
    event.preventDefault();,
    alert("entro al clic del btn");
    $.ajax({
      url: "https://superheroapi.com/api/4905856019427443/123",
      type: "GET",
      success: function (response) {
        console.log("objeto response:  ", response);
        //$("#valoruf").text(response.uf.valor);
        const data = response.results;
        console.log("arreglo de datos: ", data);
        let datoabuscar = $("intpu").val();
        console.log("busqueda", datoabuscar);

        let busqueda = data.filter((elem) => elem.name == datoabuscar);
        console.log(busqueda);
      },
      dataType: "json",
      error: function (error) {
        console.log("objeto error: ", error.status);
      },
    });
  });
});
