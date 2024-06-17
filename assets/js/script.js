// https://superheroapi.com/api/4905856019427443
$(document).ready(function () {
  // Función para mostrar la tarjeta del superhéroe con los datos de la respuesta de la API
  function displayTarjeta(respuestaAPI) {
    const card = $("#tarjeta_body");
    card.empty(); // Limpiar el contenido existente
    card.html(`
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${respuestaAPI.image.url}" class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body" id="tarjeta_body">
            <h5 class="card-title">SuperHero encontrado</h5>
            <h6>Nombre: ${respuestaAPI.name}</h6>
            <p class="card-text">
              <span id="sh_conexiones">conexiones:</span>
              <span id="sh_conexiones_texto">
                ${respuestaAPI.connections.relatives}
              </span>
            </p>
            <p>
              <span id="sh_publicadopor" class="text-body-secondary">
                publicado por: ${respuestaAPI.biography.publisher}
              </span>
            </p>
            <hr />
            <p>Ocupación: ${respuestaAPI.work.occupation}</p>
            <hr />
            <p>primera aparición: ${respuestaAPI.biography["first - appearance"]}</p>
            <hr />
            <p>altura: ${respuestaAPI.appearance.height}</p>
            <hr />
            <p>peso: ${respuestaAPI.appearance.weight} </p>
            <hr />
            <p>alianzas: ${respuestaAPI.connections["group-affiliation"]}</p>
            <hr />
            <p class="card-text">
              <small class="text-body-secondary"> Last updated 3 mins ago </small>
            </p>
          </div>
        </div>
      </div>
    `);
  }

  // Función para validar que el input sea un número entre 1 y 731
  function isValidInput(input) {
    const number = parseInt(input, 10);
    return !isNaN(number) && number >= 1 && number <= 731;
  }

  // Evento de envío del formulario
  $("#idformulario").submit(function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    alert("entro al clic del btn");

    const valor_formulario = $("#in_buscar").val();

    // Validar el valor del formulario
    if (!isValidInput(valor_formulario)) {
      alert("Por favor, ingrese un número válido entre 1 y 731.");
      return;
    }

    // Realizar la solicitud AJAX
    $.ajax({
      url: `https://superheroapi.com/api.php/4905856019427443/${valor_formulario}`,
      type: "GET",
      success: function (response) {
        displayTarjeta(response); // Mostrar la tarjeta con los datos recibidos
        // dibujarGrafico(response.powerstats, response.name);
      },
      dataType: "json",
      error: function (error) {
        console.log("objeto error: ", error.status); // Mostrar error en consola
      },
    });
  });
});

// meter html en constructor para div id tarjeta_body

//ajax para consulta
