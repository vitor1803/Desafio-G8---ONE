let lista_amigos = [];
const amigos = document.getElementById('amigos');

function alterar() {
    let amigo_novo = document.getElementById('amigo_novo').value;
    if (amigo_novo == "") {
        alert("The Name is empty");
    } else {
        lista_amigos.push(amigo_novo);
        let amigos = document.getElementById('amigos')
        amigos.innerHTML = lista_amigos.join("<br>")
    }
}
function sortear() {
    let indice = Math.floor(Math.random() * lista_amigos.length);
    alert(lista_amigos[indice]);
}