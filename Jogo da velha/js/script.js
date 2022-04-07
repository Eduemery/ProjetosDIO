
var jogador, vencedor = null;
var jogadorselecionado = document.getElementById(elementid =  "jogador-selecionado");
var vencedorselecionado = document.getElementById(elementid =  "vencedor");
var quadrado = document.getElementsByClassName(className = "quadrado");

mudarjogador(valor = "X");

function escolherquadrado(id){
    if(vencedor !== null){
        return;
    }

    var quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== "-"){
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = "#FFFFFF";

    if(jogador === "X"){
        jogador = "O";

    }else{
        jogador = "X";
    }

    mudarjogador(jogador);
    checarvencedor();
}

function mudarjogador(valor){
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;

}

function checarvencedor(){
    var quadrado1 = document.getElementById(elementeid = "1");
    var quadrado2 = document.getElementById(elementeid = "2");
    var quadrado3 = document.getElementById(elementeid = "3");
    var quadrado4 = document.getElementById(elementeid = "4");
    var quadrado5 = document.getElementById(elementeid = "5");
    var quadrado6 = document.getElementById(elementeid = "6");
    var quadrado7 = document.getElementById(elementeid = "7");
    var quadrado8 = document.getElementById(elementeid = "8");
    var quadrado9 = document.getElementById(elementeid = "9");

    if(checarsequencia(quadrado1, quadrado2, quadrado3)){
        mudarcorquadrado(quadrado1, quadrado2, quadrado3);
        mudarvencedor(quadrado1);
        return;
    }
    if(checarsequencia(quadrado4, quadrado5, quadrado6)){
        mudarcorquadrado(quadrado4, quadrado5, quadrado6);
        mudarvencedor(quadrado4);
        return;
    }
    if(checarsequencia(quadrado7, quadrado8, quadrado9)){
        mudarcorquadrado(quadrado7, quadrado8, quadrado9);
        mudarvencedor(quadrado7);
        return;
    }
    if(checarsequencia(quadrado1, quadrado5, quadrado9)){
        mudarcorquadrado(quadrado1, quadrado5, quadrado9);
        mudarvencedor(quadrado1);
        return;
    }
    if(checarsequencia(quadrado3, quadrado5, quadrado7)){
        mudarcorquadrado(quadrado3, quadrado5, quadrado7);
        mudarvencedor(quadrado3);
        return;
    }
    if(checarsequencia(quadrado1, quadrado4, quadrado7)){
        mudarcorquadrado(quadrado1, quadrado4, quadrado7);
        mudarvencedor(quadrado1);
        return;
    }
    if(checarsequencia(quadrado2, quadrado5, quadrado8)){
        mudarcorquadrado(quadrado2, quadrado5, quadrado8);
        mudarvencedor(quadrado2);
        return;
    }
    if(checarsequencia(quadrado3, quadrado6, quadrado9)){
        mudarcorquadrado(quadrado3, quadrado6, quadrado9);
        mudarvencedor(quadrado3);
    }
}

function mudarvencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorselecionado.innerHTML = vencedor;
}

function mudarcorquadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = "#00FF00"
    quadrado2.style.background = "#00FF00"
    quadrado3.style.background = "#00FF00"
}

function checarsequencia(quadrado1,quadrado2,quadrado3){
    var eigual = false;

    if(quadrado1.innerHTML !== "-" && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }
    return eigual;
}

function reiniciar(){
    vencedor = null;
    vencedorselecionado.innerHTML = "";

    for(var i = 1; i <=9; i++){
        var quadrado = document.getElementById(i);
        quadrado.style.background = "#D3D3D3";
        quadrado.style.color = "#D3D3D3";
        quadrado.innerHTML = "-";
    }

    mudarjogador(valor = "X");
}