const url = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMjk1NTg4Zjc0MDAwMTQyODc2ZDEiLCJpYXQiOjE2ODM4OTI1NjUsImV4cCI6MTY4NTEwMjE2NX0.4ya10MvjXWPHS6BdOGxSy0St76gpF4Wt0as3ptRhKSY";

let btnNewProduct = document.getElementById("addProduct");
let btnResetForm = document.getElementById("resetForm");

const productForm = document.getElementById("product_form");

// CON QUESTO addEventListener ANDIAMO A POSTARE IL NUOVO PRODOTTO UNA VOLTA RIEMPITO IL FORM E CLICCATO IL SUBMIT.
productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name").value;
  const descriptionInput = document.getElementById("description").value;
  const brandInput = document.getElementById("brand").value;
  const imageInput = document.getElementById("image").value;
  const priceInput = document.getElementById("price").value;

  const newProduct = {
    name: nameInput,
    description: descriptionInput,
    brand: brandInput,
    imageUrl: imageInput,
    price: priceInput,
  };

  fetch(url, {
    method: "POST",

    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`,
    },

    body: JSON.stringify(newProduct),
  })
    .then((response) => {
      console.log(newProduct);
      if (response.ok) {
        console.log("L'oggetto è stato postato");
      } else {
        throw new Error("Something goes wrong with the process");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

// editProduct.addEventListener("click", function (evt) {
//   evt.preventDefault();

//   let nameInput = document.getElementById("name");
//   let descriptionInput = document.getElementById("description");
//   let brandInput = document.getElementById("brand");
//   let imageInput = document.getElementById("image");
//   let priceInput = document.getElementById("price");

//   let newProduct = {
//       name: nameInput.value,
//       description: descriptionInput.value,
//       brand: brandInput.value,
//       imageUrl: imageInput.value,
//       price: priceInput.value,
//     };

//     fetch(url, {
//         method: "PUT",

//         headers: {
//             "Content-type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },

//         body: JSON.stringify(newProduct),
//     })
//     .then((response) => {

//     if (response.ok) {
//         console.log("L'oggetto è stato postato");
//     } else {
//         throw new Error("Something goes wrong with the process")
//     }
// })
// .catch((error) => {
//     console.log(error)
// });
// });

// 1) Dobbiamo creare un form statico nella quale l'utente potrà poi inserire le proprietà del nuovo prodotto;✅
// 2) Dobbiamo creare 2 buttons uno per creare il prodotto e uno per resettare il form;✅
// 3) Quando clicchiamo sul button per creare il prodotto dobbiamo effetuare una post, il payload dovrà includere i dati del prodotto che l'amministratore inserisce negli input nel form e inoltre eseguire l'autorizzazione nell'header utilizzando il token che ho ricevuto all'iscirizione;✅
// 4)
