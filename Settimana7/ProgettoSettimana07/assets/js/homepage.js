const url = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMjk1NTg4Zjc0MDAwMTQyODc2ZDEiLCJpYXQiOjE2ODM4OTI1NjUsImV4cCI6MTY4NTEwMjE2NX0.4ya10MvjXWPHS6BdOGxSy0St76gpF4Wt0as3ptRhKSY";

// ANDIAMO A RENDERIZZARE TUTTE CARDS CON IL GET 

window.onload = () =>  {
  fetch(url, {
    method: "GET",

    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())

    .then((data) => {
      console.log("Prodotti ottenuti e convertiti in Json dall' API con successo");

      let card = "";
      data.forEach((product) => {
        card += `
              <div class="col-md-4 col-sm-12 col-lg-3 mb-4">
              <div class="card mb-4 shadow-sm">
              <img src="${product.imageUrl}" alt="">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">
                  ${product.brand}
                  </p>
                  <p class="card-text text-truncate">
                  ${product.description}
                  </p>
                  <p class="card-text">
                  ${product.price} €
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <a class="btn btn-primary rounded" role="button" href="details.html?id=${product._id}">Details</a>
                    <a class="btn btn-info ms-4 rounded" href="back-office.html?id=${product._id}">Edit</a>
                   </div>
                  </div>
                </div>
              </div>
            </div>
              `;
        console.log("Prodotti stampati a schermo");
      });
      cardsRow.innerHTML = card;
    })

    .catch((error) => {
      console.error(
        "Si è verificato un errore durante il recupero dei prodotti:",error);
    });
};
