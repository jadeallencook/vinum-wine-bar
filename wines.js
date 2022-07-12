(async () => {
  const url = "https://jadeallencook.github.io/Vinum-Wine-Bar/assets/menu.json";
  const response = await fetch(url).then((data) => data.json());
  const app = document.getElementById("app");
  let index = 0;
  let category = null;
  const flights = [];
  response.Wine.map((wine) => {
    if (wine.category !== category) {
      index++;
      category = wine.category;
      flights.push({
        flight: category,
        price: wine.flight,
        wines: [],
      });
    }
    flights[index - 1].wines.push(wine);
  });

  for (let flight of flights) {
    let wines = "";
    for (let {
      glass,
      bottle,
      togo,
      name,
      grape,
      region,
      year,
      description,
    } of flight.wines) {
      wines += `
			  <div>
				  <p>
					  ${
              glass
                ? `<span>${glass} <img src="https://jadeallencook.github.io/Vinum-Wine-Bar/assets/glass.png" /></span>`
                : ""
            }
					  ${
              bottle
                ? `<span>${bottle} <img src="https://jadeallencook.github.io/Vinum-Wine-Bar/assets/bottle.png" /></span>`
                : ""
            }
					  ${
              togo
                ? `<span>${togo} <img src="https://jadeallencook.github.io/Vinum-Wine-Bar/assets/togo.png" /></span>`
                : ""
            }
				  </p>
				  <h4>${name}</h4>
				  <p>
				  <span>${grape} </span>
				  ${region ? `<span> - ${region}</span>` : ""}
				  ${year ? `<span> - ${year}</span>` : ""}
				  </p>
				  <p>${description}</p>
			  </div>
		  `;
    }
    const template = `
		  <div class="wine">
			  <h3 class="${flight.wines[0].new_page ? "new-page" : null}">
				  ${flight.flight} ${flight.price ? `<span> - ${flight.price}</span>` : ""}
			  </h3>
			  ${wines}
		  </div>
		`;
    app.innerHTML += template;
  }
})();
