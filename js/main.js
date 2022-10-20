const lista = document.querySelector("ul");
const btnAdiciona = document.querySelector("#btnAdiciona");
const item = JSON.parse(localStorage.getItem("item")) || [];
const botaoConfirma = document.getElementById("confirma");
const botaoCancela = document.getElementById("cancela");
const secEdicao = document.querySelector("#sec-editar");

item.forEach((element) => {
  criaElemento(element);
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
  const li = document.createElement("li");
  li.classList.add("custom-checkbox");
  // tem que adicional a label no lugar do p
  // vai interferir na funcao de atualizar
  const nome = document.createElement("p");
  nome.innerText = elemento.nome;

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");

  li.appendChild(input);
  li.appendChild(nome);

  li.appendChild(botaoEditar(elemento.id));
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
  secEdicao.classList.add("invisivel");
}

function botaoEditar(id) {
  const btnEditar = document.createElement("button");
  btnEditar.innerText = "Editar";

  btnEditar.addEventListener("click", function () {
    secEdicao.classList.remove("invisivel");

    atualizar(this.parentNode, id);
  });

  return btnEditar;
}

function atualizar(elemento, id) {
  let inputNovo = secEdicao.querySelector("input");
  inputNovo.focus();
  inputNovo.value = elemento.querySelector("p").textContent;
  inputNovo.id = id;

  montaElemento(elemento, id);
}

var e_AUX;
var i_AUX;
function montaElemento(elemento, id) {
  e_AUX = elemento;
  i_AUX = id;
}

botaoConfirma.addEventListener("click", () => {
  e_AUX.querySelector("p").textContent = secEdicao.querySelector("input").value;

  let index = item.findIndex((element) => element.id === i_AUX);

  item[index].nome = secEdicao.querySelector("input").value;

  localStorage.setItem("item", JSON.stringify(item));
  console.log(item);

  secEdicao.classList.add("invisivel");
});

botaoCancela.addEventListener("click", () => {
  console.log("Cancela");

  secEdicao.classList.add("invisivel");
});