const productos = document.querySelectorAll(".producto");

productos.forEach((producto) => {
  if (producto.classList.contains("expandido")) {
    producto.querySelector("p").style.display = "inline-block";
  } else {
    producto.querySelector("p").style.display = "none";
  }
  producto.addEventListener("click", () => {
    productos.forEach((p) => {
      p.classList.remove("expandido");
      p.querySelector("p").style.display = "none";
      if (p.querySelector(".button-compra")) {
        p.querySelector(".button-compra").remove();
      }
    });
    producto.classList.add("expandido");
    producto.querySelector("p").style.display = "inline-block";
    let button = document.createElement("button");
    button.classList.add("button-compra");
    button.innerText = "Comprar";
    producto.append(button);
  });
});
