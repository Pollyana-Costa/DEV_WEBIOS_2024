// Função para fazer o request na API
function getImage(e) {
    // Busca a url da API no HTML
    let url_api = document.getElementById('url_api').innerText;
    // console.log(url_api);
    // Função fetch para buscar dados na API
    fetch(url_api, {
    method: 'GET',  //opcional, usado em casos de querer atualizar o banco de dados, utilizando "PUT"
    })
        .then((response) => {
            
            console.log(response);
            return response.json(); // Receber o JSON
            
        })
        .then((data) => {
            // console.log(data);
            document.getElementById('json_aqui').innerText =
                JSON.stringify(data);
            // console.log(data.message)
            let imagem = `
    <img class="rounded img-fluid" src="${data.message}" />
    `;
            // Insere a imagem no elemento HTML com id imagem_aqui
            document.querySelector('#imagem_aqui').innerHTML = imagem;
        });
}              

// fetch = função para consumir API 
// strinfy >> Pega um JSON e transforma em um objeto
// JSON >> Transforma um objeto em formato JSON

// fetch(url).then(receber o JSON).then(tratar o JSON e mostrar as informações em tela para o usuario.).catch(catch é para tratar erros retornados pela API)
// a informação acima é explicando o exercicio que foi feito.