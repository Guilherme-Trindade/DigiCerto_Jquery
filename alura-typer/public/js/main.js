var frase = $("#frase");
var numPalavras = frase.text().split(/\S+/).length -1;
var tamanhoFrase = $("#tamanho-frase").text(numPalavras);
var campo = $(".campo-digitacao");
var tempoDigitacao = $("#tempoDigitacao").text();

$(function(){
    contadorPalavras();
    cronometroDigtacao();
    corretorFrase();
    if(tempoDigitacao > 1){
     botaoReiniar();
    };
    mostrarPlacar();
});

function contadorPalavras (){
    campo.on("input", function(){
        var conteudo = campo.val();
    
        var qtdCaracteris = conteudo.length;
        $("#contadorCaracteris").text(qtdCaracteris);
    
        var qtdPalavras = conteudo.split(/\S+/).length -1;
        $("#contadorPalavras").text(qtdPalavras);
    });
};

function corretorFrase(){
    campo.on("input", function(){
       var digitado = campo.val();
       var comparavel = frase.text().substr(0, digitado.length);
       
       if(digitado == comparavel){
            frase.addClass("digitacao__certo");
            frase.removeClass("digitacao__errada");
            campo.addClass("campo-digitacao__certo");
            campo.removeClass("campo-digitacao__errado");
       }else{
            frase.addClass("digitacao__errada");
            frase.removeClass("digitacao__certo");
            campo.addClass("campo-digitacao__errado");
            campo.removeClass("campo-digitacao__certo");
       }    
    });
};


function cronometroDigtacao(){
    var tempoDigitacao = $("#tempoDigitacao").text();

    campo.one("focus", function(){
        var setIdTempo = setInterval(function(){
            tempoDigitacao--;
    
            $("#tempoDigitacao").text(tempoDigitacao);
    
            if(tempoDigitacao < 1){
                campo.attr("disabled", true);
                clearInterval(setIdTempo);
                inserePlacar();
            }
        }, 1000);
    
    });
};


function botaoReiniar(){
    $("#reiniarJogo").on("click", function(){
        campo.attr("disabled", false);
        campo.val("");
        $("#contadorCaracteris").text("0");
        $("#contadorPalavras").text("0");
        $("#tempoDigitacao").text(tempoDigitacao);
        campo.removeClass("campo-digitacao__errado");
        campo.removeClass("campo-digitacao__certo");
        frase.removeClass("digitacao__certo");
        frase.removeClass("digitacao__errada");
        cronometroDigtacao();
    });
};    