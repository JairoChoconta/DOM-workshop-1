/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// API:
const baseUrl = "https://platzi-avo.vercel.app";
//const url = "https://platzi-avo.vercel.app/api/avo";

const appNode = document.querySelector("#app");

appNode.addEventListener("click", (event) => {
  if (event.target.nodeName === "H2") {
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
      const imagen = document.createElement("img");
      imagen.src = `${baseUrl}${item.image}`;
      imagen.className = "h-32 w-32 md:h-24 md:2-24 rounded-full mx-auto md:mx-0 md:mr-6";
      // crear titulo
      const title = document.createElement("h2");
      title.textContent = item.name;
      title.className = "text-2xl font-bold text-green-500";
      // crear precio
      const price = document.createElement("div");
      price.className = "font-medium text-center text-xl";
      price.textContent = formatPrice(item.price);
      // Crear contenedor para el título y el precio
      const cardInfo = document.createElement("div");
      cardInfo.className = "text-center md:text-left";
      cardInfo.append(title, price);
      // Meter todo dentro de una card
      const card = document.createElement("div");
      card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
      card.append(imagen, cardInfo);

      // Metemos todo dentro del contenedor principal
      const container = document.createElement("div");
      container.append(card);

      todosLosItems.push(container);
    });

    appNode.append(...todosLosItems);
  });
