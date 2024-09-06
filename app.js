function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>O campo pesquisar esta vazio. Você precisa digitar o nome do Clube</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let nome = "";
    let apresentacao = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        apresntacao = dado.apresentacao.toLowerCase()

        // se nome includes campoPesquisa
        if (nome.includes(campoPesquisa) || apresentacao.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blanck"> ${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.apresentacao}</p>
                <a href=${dado.link} target="_blanck">Site Oficial</a>
            </div
        `;
        }
    }

    if (!resultados) {
        resultados = "</p>Nada foi encontrado<p/>"
    }

    section.innerHTML = resultados;
}