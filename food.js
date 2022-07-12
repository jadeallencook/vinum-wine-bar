(async () => {
  const url = "./assets/menu.json";
  const response = await fetch(url).then((data) => data.json());
  const app = document.getElementById("app");

  for (let item of response.Food) {
    const { new_page, category, description, name, price } = item;
    const template = `
      <div class="food">
        <div class="${new_page ? "new-page" : ""}">
          ${!name && !price && category ? `<h2>${category}</h2>` : ""}
          ${
            !name && !price && category && description
              ? `<p class="sub-title">${description}</p>`
              : ""
          }
          ${
            name && price && category && description
              ? `<h4>${name} ${price}</h4>`
              : ""
          }
          ${
            name && price && category && description
              ? `<p>${description}</p>`
              : ""
          }
          ${
            name && price && category && !description
              ? `<h4 class="single-line">${name} ${price}</h4>`
              : ""
          }
          ${
            !name && !price && !category && description
              ? `<p class="description">${description}</p>`
              : ""
          }
        </div>
      </div>
    `;
    app.innerHTML += template;
  }
})();
