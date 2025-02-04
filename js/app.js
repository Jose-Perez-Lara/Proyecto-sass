const productos = document.querySelectorAll(".producto");

productos.forEach((producto) => {
  producto.addEventListener("click", () => {
    productos.forEach((p) => {
      p.classList.remove("expandido");
      if (p.querySelector(".button-compra")) {
        p.querySelector(".button-compra").remove();
      }
    });
    producto.classList.add("expandido");
    let button = document.createElement("button");
    button.classList.add("button-compra");
    button.innerText = "Comprar";
    producto.append(button);
  });
});
