const productTemplate = product => `
<div class="col-md-4">
  <div class="product-container">
    <img class="img-fluid" src="${product.imgUrl}" />
    <div class="product-info">
      Precio: ${product.price} <br />
      Reviews (5):
      <i class="fas fa-star review-star"></i
      ><i class="fas fa-star review-star"></i
      ><i class="fas fa-star review-star"></i
      ><i class="fas fa-star review-star"></i>
      <a href="./producto.html" class="btn btn-primary comprar-btn"
      onclick="storeId(${product.id})"
        >Comprar ya</a
      >
    </div>
  </div>
</div>`;

function buildProduct(products) {
  let prd = document.getElementById("productRoot");
  products.forEach(element => {
    prd.insertAdjacentHTML("beforeend", productTemplate(element));
  });
}
