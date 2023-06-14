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
    body
  } from './elementos.js';

var controle = 0;

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
        controle++;
    } else
        if (controle == 1) {
            paragrafo.forEach(item => {
                item.style.color = 'black';
            })
            body.style.backgroundColor = 'white';
            nomeJogo.style.color = 'black';
            buttonMode.innerText = 'Modo Escuro'
            buttonMode.innerHTML = 'Modo Escuro <i class="fa-solid fa-moon"></i>'
            imagem.style.boxShadow = '10px 12px 6px 6px gray';
            controle--;
        }


})
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
            if (input.value == corpo.jogos[i].nome || input.value == corpo.jogos[i].nomeMin) {
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




