const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMjk1NTg4Zjc0MDAwMTQyODc2ZDEiLCJpYXQiOjE2ODM4OTI1NjUsImV4cCI6MTY4NTEwMjE2NX0.4ya10MvjXWPHS6BdOGxSy0St76gpF4Wt0as3ptRhKSY";

// verifica ID
const parametri = new URLSearchParams(location.search);
const productId = parametri.get("id");

if (productId) {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,

      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((prodotti) => {
      console.log("Oggetti ottenuti con successo:", prodotti);

      let card = `
            <div class="col-12">
            <div class="card mb-4 row">
            <div class="col-4">
            <img src="${prodotti.imageUrl}" alt="" srcset="" class="my-3 immaginiCard">
            </div>
            <div class="col-8">
              <div class="card-body">
              <h5 class="card-title"> Name:
              <span class="text-secondary d-block">${prodotti.name}</span></h5> 
              <p class="card-text"> Brand: 
              <span class="text-secondary d-block">
               ${prodotti.brand}
              </span>
              </p>
              <p class="card-text"> Description:
              <span class="text-secondary  d-block">
                  ${prodotti.description}
                  </span>
                  </p>
              <p class="card-text"> Price:
              <span class="text-secondary d-block">
              ${prodotti.price} €
              </span>
              </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">   
                 </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            `;

        cardsRow.innerHTML = card;
    })

    .catch((error) => {
      console.error(
        "Si è verificato un errore durante il recupero dei dati del prodotto:",
        error
      );
    });
}