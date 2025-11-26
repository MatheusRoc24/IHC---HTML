function criaritemCardapio(titulo, descricao, foto) {
    const divItemCardapio = document.createElement('div');
    divItemCardapio.className = 'item-cardapio';
   
    const h3Titulo = document.createElement('h3');
    h3titulo.textContent = titulo;

    const pDescricao = document.createElement('p');
    pDescricao.textContent = descricao;
    pDescricao.className = 'descricao';

    const imgItem = document.createElement('img');
    img.src = foto

    const divC = documento.getElementById('cardapio');

    divItemCardapio.appendChild(h3Titulo)
    divItemCardapio.appendChild(pDescricao)
    divItemCardapio.appendChild(img);

    divC.appendChild(divItemCardapio);
}

//executando a função

criaritemCardapio( 'Um clássico irresistível com camadas de chocolate', 'Delicioso bolo de chocolate feito com ingredientes selecionados para garantir sabor e maciez.', 'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2020/05/bolo_chocolate_leite.jpg');
criaritemCardapio( 'Torta de Limão', 'Refrescante torta de limão com base crocante e cobertura de merengue.', 'https://www.receiteria.com.br/wp-content/uploads/2018/11/torta-de-limao.jpg');
criaritemCardapio( 'Cheesecake de Morango', 'Clássico cheesecake com cobertura de morangos frescos.', 'https://www.receiteria.com.br/wp-content/uploads/2018/09/cheesecake-de-morango.jpg');
criaritemCardapio( 'Pudim de Leite Condensado', 'Pudim cremoso feito com leite condensado e calda de caramelo.', 'https://www.receiteria.com.br/wp-content/uploads/2018/09/pudim-de-leite-condensado.jpg');
criaritemCardapio( 'Brigadeiro Gourmet', 'Delicioso brigadeiro gourmet feito com chocolate belga.', 'https://www.receiteria.com.br/wp-content/uploads/2018/09/brigadeiro-gourmet.jpg');
criaritemCardapio( 'Cupcake Red Velvet', 'Cupcake macio e colorido com cobertura de cream cheese.', 'https://www.receiteria.com.br/wp-content/uploads/2018/09/cupcake-red-velvet.jpg');
criaritemCardapio( 'Macarons Franceses', 'Delicados macarons franceses em diversos sabores.', 'https://www.receiteria.com.br/wp-content/uploads/2018/09/macarons-franceses.jpg');
criaritemCardapio( 'Tiramisu', 'Sobremesa italiana clássica com camadas de biscoito embebido em café e creme de mascarpone.', 'https://www.receiteria.com.br/wp-content/uploads/2018/09/tiramisu.jpg');
criaritemCardapio( 'Mousse de Maracujá', 'Mousse leve e refrescante com sabor tropical de maracujá.', 'https://www.receiteria.com.br/wp-content/uploads/2018/09/mousse-de-maracuja.jpg');
criaritemCardapio( 'Churros com Doce de Leite', 'Churros crocantes recheados com doce de leite cremoso.', 'https://www.receiteria.com.br/wp-content/uploads/2018/09/churros-com-doce-de-leite.jpg');