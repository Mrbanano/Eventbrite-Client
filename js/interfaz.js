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
}
