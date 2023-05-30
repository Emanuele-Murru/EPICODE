let cardContainer = document.querySelector("#cards");
// let createCard = cardContainer.createElement("div")

const api = "https://naruto-api.fly.dev/"

fetch(api)

    .then((response) => response.json())

    .then((data) => {
        console.log("Prodotti ottenuti e convertiti in Json dall' API con successo");

        let card = "";
        data.forEach((product) => {
            card += `
            <div class="row-cols-4">
        <div class="card shadow-sm">
        <img src="${product.images[0]}" alt="">
          <div class="card-body">Name:
            <h5 class="card-title"><span><br>
            ${product.name}
            </span></h5>
            <p class="card-text text-truncate my-1">Description:
            <span> <br>
            ${product.about}
            </span>
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group mt-2">
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

        cardsRow.innerHTML = card

    })

    .catch((error) => {
        console.error("Si è verificato un errore durante il recupero dei prodotti:", error);
    })
