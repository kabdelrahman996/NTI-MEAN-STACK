function displayProduct() {
  var name = document.getElementById("name").value;
  var des = document.getElementById("des").value;
  var price = document.getElementById("price").value;

  var product = `Product name: ${name}, description: ${des}, price: ${price}`;

  name = document.getElementById("name").value = "";
  des = document.getElementById("des").value = "";
  price = document.getElementById("price").value = "";

  console.log(product);
  alert(product);

  document.getElementById("para").innerText = product;
  // document.write(`<p>${product}</p>`);
}
