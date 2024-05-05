
let altura = 0
let largura = 0
let vidas = 1
let tempo = 20

let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil'){
    criaMosquitoTempo = 1000
} else if (nivel === 'chucknorris'){
    criaMosquitoTempo === 100
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth 

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

// Adicionando o cronometro no jogo
let cronometro = setInterval(function(){
    tempo -=1
    //Retirando o tempo negativo
    if(tempo < 0){
        clearInterval(cronometro) // para cronometro
        clearInterval(criaMosca) // parar criação de mosca
        window.location.href = 'vitoria.html'
    }else{
    document.getElementById('cronometro').innerHTML = tempo
    }
},1000)


function posicaoRandomica() { //funcao para adicionar no final do body

    //remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        //Controle de Game Over
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        //controle para remover as vidas -> trocando o elemento html
        } else{
        document.getElementById('v' + vidas).src='imagens/imagens/coracao_vazio.png'

        vidas++ 
        }
    }

let posicaox = Math.floor(Math.random() * largura) - 90//gerar uma lagura aleatoria da tela
var posicaoy = Math.floor(Math.random() * altura) - 90 //gerar uma altura aleatoria da tela

//retirar a posibilidade de posiçoes negativa serem criadas
posicaox = posicaox < 0 ? 0 : posicaox 
posicaoy = posicaoy < 0 ? 0 : posicaoy

console.log(posicaox, posicaoy)

// criar o elemento html
let mosquito = document.createElement('img') //criar um elemento no html
mosquito.src = 'imagens/imagens/mosca.png' //adicionar a imagem do elemento
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //adicionar a class no item para que ele pegue o estilo do css
// Fazendo a imagem aparecer em local aleatorio na tela
mosquito.style.left = posicaox + 'px'
mosquito.style.top = posicaoy + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() { // remover o mosquito quando for clicado
    this.remove() // o this. faz referencia ao proprio elemento HTML que executa a funcao
}

document.body.appendChild(mosquito) //mostrar o elemento no body   

}

//criando o tamanho aleatorio para o mosquito
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3) //gerar o tamanho aleatoriamente
    
    //gerar as classes com base no tamanho randomico acima
    switch(classe){
        case 0:
            return 'mosquito1' //como estamos utilizando o switch dentro de uma function não precisamos utilziar o break
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

// Função para gerar um lado aleatorio no mosquito
function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}