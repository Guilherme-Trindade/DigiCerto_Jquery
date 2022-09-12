$("#alterarFrase").on("click", fraseAleatoria);

function fraseAleatoria(){
    $("#carregar").toggle();
    $.get("http://localhost:3000/frases", function(data){
        var numFrase = Math.floor(Math.random() * data.length);
        $("#frase").text(data[numFrase].texto);
        var numPalavras = $("#frase").text().split(/\S+/).length -1;
        $("#tempoDigitacao").text(data[numFrase].tempo);
        $("#tamanho-frase").text(numPalavras);
        atualizaTempoInicial(data[numFrase].tempo);
    }).fail(function(){
        alert("Não conseguimos entrar em contato com o servidor, por favor tente novamente");
    }).always(function(){
        $("#carregar").toggle();
    });
};