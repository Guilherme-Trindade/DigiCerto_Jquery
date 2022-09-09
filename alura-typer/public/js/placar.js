function inserePlacar(){
    var corpoTabela = $("#placar").find("tbody");
    var usuario = "Gilbert";
    var numPalavras = $("#contadorPalavras").text();

    var linha = adicionarLinha(usuario, numPalavras);
    linha.find(".apagarBotao").on("click", removeLinha);
    corpoTabela.prepend(linha);
};

function removeLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
};

function adicionarLinha(usuario,numPalavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var colunaRemocao = $("<td>");

    var link = $("<a>").addClass("apagarBotao").attr("href", "#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemocao.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemocao);

    return linha;
};

function mostrarPlacar(){
    $("#mostrarplcar").on("click", function(){
        $("#placar").slideToggle(600);
    });
}