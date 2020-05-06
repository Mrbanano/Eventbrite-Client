const eventBrite = new EventBrite();
const ui = new Ui();

document.getElementById("buscarBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const text = document.getElementById("evento").value;
  const categories = document.getElementById("listado-categorias");
  const categoriasSelect = categories.options[categories.selectedIndex].value;
  // search no empty
  if (text !== "") {
    console.log("buscando");
  } else {
    //mesage error
    ui.showMessage(
      "Debes escribir que quieres buscar",
      "alert alert-danger  text-center mt-4"
    );
  }
});
