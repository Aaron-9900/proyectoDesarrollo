async function callElements() {
  let sessionData = await fetch("./src/session.json");
  sessionData = await sessionData.json();
  buildProduct(sessionData.products);
}
function storeId(productId) {
  document.cookie = "id=" + productId;
}
callElements();
