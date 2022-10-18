const lista = document.querySelector("ul");
const btnTema = document.querySelector("#btnTema");
const btnAdiciona = document.querySelector("#btnAdiciona");
const item = JSON.parse(localStorage.getItem("item")) || [];

item.forEach((element) => {
  criaElemento(element);
});

btnTema.addEventListener("click", () => {
  console.log("Tem que fazer a troca de tema");
});

btnAdiciona.addEventListener("click", (event) => {
  event.preventDefault();
  const nome = document.querySelector("#novaTarefa");

  const tarefa = {
    nome: nome.value,
  };

  tarefa.id = item[item.length - 1] ? item[item.length - 1].id + 1 : 0;

  criaElemento(tarefa);

  item.push(tarefa);
  localStorage.setItem("item", JSON.stringify(item));

  nome.value = "";
});

function criaElemento(elemento) {
  console.log(elemento.nome);

  const li = document.createElement("li");
  const nome = document.createElement("p");
  nome.innerText = elemento.nome;

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  li.appendChild(input);
  li.appendChild(nome);

  li.appendChild(botaoDeleta(elemento.id));

  lista.appendChild(li);
}

function botaoDeleta(id) {
  const buttonDelete = document.createElement("button");
  buttonDelete.innerText = "X";

  buttonDelete.addEventListener("click", function () {
    deletaTarefa(this.parentNode, id);
  });

  return buttonDelete;
}

function deletaTarefa(element, id) {
  element.remove();
  item.splice(
    item.findIndex((element) => element.id === id),
    1
  );

  localStorage.setItem("item", JSON.stringify(item));
}
