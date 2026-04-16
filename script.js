function adicionarTarefa() {
  const input = document.getElementById("tarefaInput");
  const prioridade = document.getElementById("prioridade").value;
  const lista = document.getElementById("lista");

  if (input.value.trim() === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = input.value;

  li.classList.add(prioridade);

  li.addEventListener("click", function () {
    li.classList.toggle("concluida");
  });

  lista.appendChild(li);

  input.value = "";
}
