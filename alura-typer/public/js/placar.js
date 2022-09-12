function inserePlacar(){
    var corpoTabela = $("#placar").find("tbody");
    var usuario = "Seu-Nome";
    var numPalavras = $("#contadorPalavras").text();

    var linha = adicionarLinha(usuario, numPalavras);
    linha.find(".apagarBotao").on("click", removeLinha);
    corpoTabela.prepend(linha);
};

function removeLinha(event){
    event.preventDefault();
    console.log("Teste")
   var linha = $(this).parent().parent();

   linha.fadeOut(600);
   setTimeout(function(){
        linha.remove();
   }, 600);
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
        $("#placar").stop().slideToggle(600);
    });
};

function sicronizarDados(){
    $("#sicronizarPlacar").on("click", function(){
        var placar = [];
        var linhas = $("tbody>tr");
        linhas.each(function(){
            var usuario = $(this).find("td:nth-child(1)").text();
            var palavras = $(this).find("td:nth-child(2)").text();
            var score = {
                usuario: usuario,
                pontos: palavras
            };
            placar.push(score);
            var dados = {
                placar: placar
            };
            $.post("http://localhost:3000/placar", dados, function(){
                console.log("Placar sincronizado com sucesso");
            });
        });
    });
}

function atualzarPlacar(){
        $.get("http://localhost:3000/placar", function(data){
            $(data).each(function(){
                var linha = adicionarLinha(this.usuario, this.pontos);
                linha.find(".apagarBotao").on("click", removeLinha);''
                $("tbody").append(linha);
            });
        });
}