const url = "https://striveschool-api.herokuapp.com/api/product/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMjk1NTg4Zjc0MDAwMTQyODc2ZDEiLCJpYXQiOjE2ODM4OTI1NjUsImV4cCI6MTY4NTEwMjE2NX0.4ya10MvjXWPHS6BdOGxSy0St76gpF4Wt0as3ptRhKSY";

const parameters = new URLSearchParams(location.search);
const productId = parameters.get("id");

const editButton = document.getElementById("edit_product");
const deleteButton = document.getElementById("delete_product");
const addNewProduct = document.getElementById("add_product");

// QUESTO NASCONDERA' I BUTTONS IN DIVERSE SITUAZIONI
if (!productId) {
  editButton.style.display = "none";
  deleteButton.style.display = "none";
} else if (productId) {
  addNewProduct.style.display = "none";

  fetch('https://striveschool-api.herokuapp.com/api/product/' + productId, {

    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Product not found!");
      }
    })
    .then((product) => {
      console.log(product);
      document.getElementById("name").value = product.name;
      document.getElementById("description").value = product.description;
      document.getElementById("brand").value = product.brand;
      document.getElementById("image").value = product.imageUrl;
      document.getElementById("price").value = product.price;
    })
    .catch((error) => {
      console.log(error);
    })
}

// BUTTON PER RESETTARE I FORM CON RICHIESTA DI CONFERMA
const btnResetForm = document.getElementById("resetForm");

btnResetForm.addEventListener("click", function (e) {
  e.preventDefault();
  let confirmReset = confirm("Are you sure you want reset the form?");

  if (confirmReset) {
    productForm.reset();
  }
});

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
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(newProduct),
  })
    .then((response) => {
      console.log(newProduct);
      alert("Product saved");
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

editProduct = document.getElementById("edit_product");

editProduct.addEventListener("click", function (evt) {
  evt.preventDefault();

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

  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "PUT",

    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(newProduct),
  })
    .then((response) => {
      if (response.ok) {
        console.log("L'oggetto è stato modificato");
      } else {
        throw new Error("Something goes wrong with the process");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

// BUTTON PER ELIMINARE I FORM CON RICHIESTA DI CONFERMA
const deleteProduct = document.getElementById("delete_product");

deleteProduct.addEventListener("click", function (e) {
  e.preventDefault();
  let confirmDelete = confirm("Are you sure you want delete the product?");

  if (confirmDelete) {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
      method: "DELETE",

      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("L'oggetto è stato eliminato"),
            location.assign("./homepage.html");
        } else {
          throw new Error("Something goes wrong with the process");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
