/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// API:
const url = "https://platzi-avo.vercel.app/api/avo";

// Web API:
// 1. Tenemos que conectarnos al server
window
    .fetch(url)
    // 2. Procesar la respuesta y convertirla en JSON
    .then(response => response.json())
    // 3. JSON -> Data -> Renderizar info en Browser
    .then(responseJson => {
        //console.log(data)
        const todosLosItems = [];
        responseJson.data.forEach(item => {
            console.log(item.name);
            // crear imagen
            const imagen = document.createElement('img');
            // crear titulo
            const title = document.createElement('h2');
            // crear precio
            const price = document.createElement('div');
            
            const container = document.createElement('div');
            container.append(imagen, title, price);

            todosLosItems.push(container);
        });

        document.body.append(...todosLosItems);
    });
        
