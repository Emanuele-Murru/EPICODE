window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((res) => {
      return res.json();
    })
    .then((books) => {
      console.log(books);

      let containerCard = document.getElementById("containerCards");
      let card = "";

      for (let i = 0; i < books.length; i++) {
        card += ` <div class="col-md-4 col-lg-3 mb-4"> <div class="card h-100">
            <img src="${books[i].img}" class="card-img-top  h-50" alt="${books[i].title}">
            <div class="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 class="card-title">${books[i].title}</h5>
                <p class="card-text">$${books[i].price}</p>
              </div>
              <div>
                <button class="btn btn-danger w-100 mb-2 scarta_btn onclick ="ciao(event)">Scarta</button>
                <button class="btn btn-primary w-100 aggiungi_btn">Compra ora</button>
              </div>
            </div>
          </div>
          </div>`;
      }

      containerCard.innerHTML = card;
    })

    .catch((errore) => {
      console.log("Qualcosa è andato storto!", errore);
    });

    function ciao (event) {
      event.target.closest('.col-md-4').remove()
    }
};
