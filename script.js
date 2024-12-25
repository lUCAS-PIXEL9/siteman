// Função para atualizar o número de visitas
function atualizarContador() {
    // Recupera o número de visitas do localStorage
    let visitas = localStorage.getItem("contadorVisitas");

    // Se não existir, inicializamos com 0
    if (!visitas) {
        visitas = 0;
    }

    // Incrementa o contador de visitas
    visitas++;

    // Salva o número atualizado de visitas no localStorage
    localStorage.setItem("contadorVisitas", visitas);

    // Exibe o número de visitas na página
    document.getElementById("contador-visitas").textContent = visitas;
}

// Chama a função para atualizar o contador assim que a página carregar
window.onload = atualizarContador;
