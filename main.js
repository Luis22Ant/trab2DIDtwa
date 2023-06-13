

const buttonPesquisar = document.getElementById('buttonPesquisar');
const buttonProximo = document.getElementById('buttonProximo');
const buttonAnterior = document.getElementById('buttonAnterior');
const input = document.getElementById('textoJogo');
const imagem = document.getElementById('gameImagem');
const genero = document.querySelector('#informacoes .generoJogo');
const classificacao = document.querySelector('#informacoes .classificacao');
const desenvolvedora = document.querySelector('#informacoes .desenvolvedora');
const descricao = document.querySelector('#informacoes .descricao');
input.addEventListener('click', function () {
    input.value = "";
})
buttonPesquisar.addEventListener('click', function () {
    fetch('./jogos.json').then(resposta => {
        return resposta.json()
    }).then(corpo => {
        console.log(corpo)

        genero.innerHTML = '<b>Gênero: </b>';
        classificacao.innerHTML = "<b>Classificação:</b>";
        desenvolvedora.innerHTML = "<b>Desenvolvedora: </b> ";
        descricao.innerHTML = "<b>Descrição: </b>";
        buttonAnterior.style.transitionDuration = '1s';
        buttonProximo.style.transitionDuration = '1s';
        if (input.value == '') {
            buttonAnterior.style.visibility = 'hidden';
            buttonAnterior.style.transitionDuration = '0s';
            buttonProximo.style.visibility = 'hidden';
            buttonProximo.style.transitionDuration = '0s';
            classificacao.style.display = 'none';
            genero.style.display = 'none';
            desenvolvedora.style.display = 'none';
            descricao.style.display = 'none';
            imagem.style.display = 'none';
            return;
        }
        for (var i = 0; i < corpo.jogos.length; i++) {
            if (input.value == corpo.jogos[i].nome) {
                var valor = i;
            }
        }
        imagem.src = corpo.jogos[valor].imagem;
        genero.innerHTML += corpo.jogos[valor].gênero;
        classificacao.innerHTML += corpo.jogos[valor].classificação;
        desenvolvedora.innerHTML += corpo.jogos[valor].desenvolvedora;
        descricao.innerHTML += corpo.jogos[valor].descricao;
        classificacao.style.display = 'block';
        genero.style.display = 'block';
        desenvolvedora.style.display = 'block';
        descricao.style.display = 'block';
        imagem.style.display = 'block';
        buttonAnterior.style.visibility = 'visible';
        buttonProximo.style.visibility = 'visible';

        buttonProximo.addEventListener('click', function () {
            if (valor == 9) {
                valor = -1;
            }
            valor++;
            genero.innerHTML = '<b>Gênero: </b>';
            classificacao.innerHTML = "<b>Classificação:</b>";
            desenvolvedora.innerHTML = "<b>Desenvolvedora: </b> ";
            descricao.innerHTML = "<b>Descrição: </b>";

            imagem.src = corpo.jogos[valor].imagem;
            genero.innerHTML += corpo.jogos[valor].gênero;
            classificacao.innerHTML += corpo.jogos[valor].classificação;
            desenvolvedora.innerHTML += corpo.jogos[valor].desenvolvedora;
            descricao.innerHTML += corpo.jogos[valor].descricao;
            input.value = corpo.jogos[valor].nome;
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

            imagem.src = corpo.jogos[valor].imagem;
            genero.innerHTML += corpo.jogos[valor].gênero;
            classificacao.innerHTML += corpo.jogos[valor].classificação;
            desenvolvedora.innerHTML += corpo.jogos[valor].desenvolvedora;
            descricao.innerHTML += corpo.jogos[valor].descricao;
            input.value = corpo.jogos[valor].nome;

        })
    })
})




