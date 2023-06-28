import {
    buttonPesquisar,
    buttonMode,
    paragrafo,
    buttonProximo,
    buttonAnterior,
    input,
    nomeJogo,
    imagem,
    genero,
    classificacao,
    desenvolvedora,
    descricao,
    body,
    footer,
} from './elementos.js';

var controle = 0;
var valor = 0;



async function getJson(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (erro) {
        console.log('Erro ao carregar json!');
        throw (erro);
    }
}


async function getData() {
    let url = './jogos.json';
    try {
        const json = await getJson(url);
        console.log(json);

        imagem.src = json.jogos[0].imagem;
        genero.innerHTML += json.jogos[0].gênero;
        classificacao.innerHTML += json.jogos[0].classificação;
        desenvolvedora.innerHTML += json.jogos[0].desenvolvedora;
        descricao.innerHTML += json.jogos[0].descricao;
        input.value = json.jogos[0].nome;
        var valor = 0;
        buttonProximo.addEventListener('click', function () {
            if (valor == 9) {
                valor = -1;
            }
            valor++;

            genero.innerHTML = '<b>Gênero: </b>';
            classificacao.innerHTML = "<b>Classificação:</b>";
            desenvolvedora.innerHTML = "<b>Desenvolvedora: </b> ";
            descricao.innerHTML = "<b>Descrição: </b>";
            imagem.src = json.jogos[valor].imagem;
            genero.innerHTML += json.jogos[valor].gênero;
            classificacao.innerHTML += json.jogos[valor].classificação;
            desenvolvedora.innerHTML += json.jogos[valor].desenvolvedora;
            descricao.innerHTML += json.jogos[valor].descricao;
            input.value = json.jogos[valor].nome;
        })
        buttonAnterior.addEventListener('click', function () {
            if (valor <= 0) {
                valor = 10;
            }
            valor--;
            genero.innerHTML = '<b>Gênero: </b>';
            classificacao.innerHTML = "<b>Classificação:</b>";
            desenvolvedora.innerHTML = "<b>Desenvolvedora: </b> ";
            descricao.innerHTML = "<b>Descrição: </b>";

            imagem.src = json.jogos[valor].imagem;
            genero.innerHTML += json.jogos[valor].gênero;
            classificacao.innerHTML += json.jogos[valor].classificação;
            desenvolvedora.innerHTML += json.jogos[valor].desenvolvedora;
            descricao.innerHTML += json.jogos[valor].descricao;
            input.value = json.jogos[valor].nome;

        })
    } catch (erro) {
        console.log('Erro ao carregar json!');
        throw (erro);
    }
}
getData();



buttonMode.addEventListener('click', function () {
    if (controle == 0) {
        paragrafo.forEach(item => {
            item.style.color = 'white';
        })
        body.style.backgroundColor = 'black';
        nomeJogo.style.color = 'white';
        buttonMode.innerText = 'Modo Claro';
        buttonMode.innerHTML = 'Modo Claro <i class="fa-regular fa-sun"></i>';
        imagem.style.boxShadow = 'none';
        footer.style.backgroundColor = '#00439c';
        footer.style.color = 'white';
        controle++;
    } else
        if (controle == 1) {
            paragrafo.forEach(item => {
                item.style.color = 'black';
            })
            body.style.backgroundColor = 'white';
            nomeJogo.style.color = 'white';
            buttonMode.innerText = 'Modo Escuro'
            buttonMode.innerHTML = 'Modo Escuro <i class="fa-solid fa-moon"></i>'
            imagem.style.boxShadow = '10px 12px 6px 6px gray';
            footer.style.backgroundColor = '#00439c';
            footer.style.color = 'white';
            controle--;
        }


})
input.addEventListener('click', function () {
    input.value = "";
})
buttonPesquisar.addEventListener('click', function () {
    async function getJson(url) {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (erro) {
            console.log('Erro ao carregar json!');
            throw (erro);
        }
    }


    async function getData() {
        let url = './jogos.json';
        try {
            const json = await getJson(url);
            console.log(json);
            genero.innerHTML = '<b>Gênero: </b>';
            classificacao.innerHTML = "<b>Classificação:</b>";
            desenvolvedora.innerHTML = "<b>Desenvolvedora: </b> ";
            descricao.innerHTML = "<b>Descrição: </b>";
            buttonAnterior.style.transitionDuration = '1s';
            buttonProximo.style.transitionDuration = '1s';
            if (input.value == '') {
                return;
            }
            for (var i = 0; i < json.jogos.length; i++) {
                if (input.value == json.jogos[i].nome || input.value == json.jogos[i].nomeMin) {
                    var valor = i;
                }
            }
            imagem.src = json.jogos[valor].imagem;
            genero.innerHTML += json.jogos[valor].gênero;
            classificacao.innerHTML += json.jogos[valor].classificação;
            desenvolvedora.innerHTML += json.jogos[valor].desenvolvedora;
            descricao.innerHTML += json.jogos[valor].descricao;

        } catch (erro) {
            console.log('Erro ao buscar json!');
            throw (erro);
        }
    }
    getData();
})







