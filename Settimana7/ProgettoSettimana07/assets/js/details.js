productForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let nameInput = document.getElementById("name");
    let descriptionInput = document.getElementById("description");
    let brandInput = document.getElementById("brand");
    let imageInput = document.getElementById("image");
    let priceInput = document.getElementById("price");
    
    let newProduct = {
        name: nameInput.value,
        description: descriptionInput.value,
        brand: brandInput.value,
        imageUrl: imageInput.value,
        price: priceInput.value,
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
  
      if (response.ok) {
          console.log("L'oggetto è stato postato");
      } else {
          throw new Error("Something goes wrong with the process")
      }
  })
  .catch((error) => {
      console.log(error)
  });
  });