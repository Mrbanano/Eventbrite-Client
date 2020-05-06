class Ui {
  constructor() {
    this.init();
    this.list = document.getElementById("resultado-eventos");
  }
  //method init
  init() {
    this.insertCategories();
  }
  //inyect categories
  insertCategories() {
    const listCategories = eventBrite.getCategories().then((categories) => {
      const categorie = categories.categories.categories;
      const selectCategories = document.getElementById("listado-categorias");

      categorie.forEach((ctg) => {
        const option = document.createElement("option");
        option.value = ctg.id;
        option.appendChild(document.createTextNode(ctg.name));
        selectCategories.appendChild(option);
      });
    });
  }
  showMessage(message, classes) {
    const div = document.createElement("div");
    div.classList = classes;
    div.appendChild(document.createTextNode(message));
    const divSearch = document.querySelector("#buscador");
    divSearch.appendChild(div);
    setTimeout(() => {
      this.clearMessage();
    }, 3000);
  }
  clearMessage() {
    const alert = document.querySelector(".alert");
    alert ? alert.remove() : "";
  }
}
