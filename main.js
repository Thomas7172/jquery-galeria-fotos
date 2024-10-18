$(document).ready(function() {

    $('header button').click(function() {
    $('form').slideDown();


    })

$('#botão-cancelar').click(function() {
    $('form').slideUp();
})

$('form').on('submit', function(e) {
    e.preventDefault();
    const enderecoDanovaImagem = $('#endereço-imagem-nova').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoDanovaImagem}"  />`).appendTo(novoItem);
    $(`
        <div class="overlay-imagem-link">
        <a href="${enderecoDanovaImagem}" target"=_blank" title="ver imagem em tamanho real">
            ver imagem em tamanho real
            </a>
        </di>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereço-imagem-nova').val('')

})

})