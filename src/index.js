/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// API:
const baseUrl = "https://platzi-avo.vercel.app";
//const url = "https://platzi-avo.vercel.app/api/avo";

const appNode = document.querySelector("#app");

appNode.addEventListener("click", (event) => {
    if(event.target.nodeName === 'H2') {
    window.alert("Hola!");
    }
});

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return newPrice;
};
// Int
// 1 - formato a fechas
// 2 - formato a moneadas

// Web API:
// 1. Tenemos que conectarnos al server
window
  .fetch(`${baseUrl}/api/avo`)
  // 2. Procesar la respuesta y convertirla en JSON
  .then((response) => response.json())
  // 3. JSON -> Data -> Renderizar info en Browser
  .then((responseJson) => {
    //console.log(data)
    const todosLosItems = [];
    responseJson.data.forEach((item) => {
      //console.log(item.name);
      // crear imagen
      const image = document.createElement("img");
      image.src = `${baseUrl}${item.image}`;
      // crear titulo
      const title = document.createElement("h2");
      title.textContent = item.name;
      title.className = "text-2xl text-red-600";
      // crear precio
      const price = document.createElement("div");
      price.className = "text-gray-600";
      price.textContent = formatPrice(item.price);
      const container = document.createElement("div");
      container.append(image, title, price);

      todosLosItems.push(container);
    });

    appNode.append(...todosLosItems);
  });
