// Funções para criar e renderizar itens do cardápio a partir de dados JSON
function createItemCardapio(title, description, photo) {
    const divItem = document.createElement('div');
    divItem.className = 'item-cardapio';

    const h3 = document.createElement('h3');
    h3.textContent = title || 'Sem título';

    const p = document.createElement('p');
    p.className = 'descricao';
    p.textContent = description || '';

    const img = document.createElement('img');
    img.className = 'img-item';
    img.src = photo || '';
    img.alt = title || 'Item do cardápio';

    divItem.appendChild(h3);
    divItem.appendChild(p);
    if (photo) divItem.appendChild(img);

    return divItem;
}

/**
 * Renderiza um array de itens no container `.itens-cardapio`.
 * Aceita objetos com chaves variadas (tenta 'titulo'/'title', 'descricao'/'description', 'foto'/'image').
 */
function renderCardapio(items) {
    if (!items) return;
    const container = document.querySelector('.itens-cardapio') || createCardapioContainer();
    container.innerHTML = '';

    // Se o recurso vier como objeto com uma propriedade de lista, tenta detectar
    if (!Array.isArray(items)) {
        if (Array.isArray(items.items)) items = items.items;
        else if (Array.isArray(items.data)) items = items.data;
        else items = [items];
    }

    items.forEach(it => {
        const title = it.titulo || it.title || it.nome || it.name;
        const desc = it.descricao || it.description || it.desc || it.texto;
        const photo = it.foto || it.image || it.img || it.url || it.photo;
        const el = createItemCardapio(title, desc, photo);
        container.appendChild(el);
    });
}

function createCardapioContainer() {
    // Se não existir `.itens-cardapio`, cria dentro de uma seção `.sobre-nos` nova
    let section = document.querySelector('.sobre-nos');
    if (!section) {
        section = document.createElement('div');
        section.className = 'sobre-nos';
        document.body.insertBefore(section, document.querySelector('footer'));
    }
    const wrapper = document.createElement('div');
    wrapper.className = 'itens-cardapio';
    section.appendChild(wrapper);
    return wrapper;
}

// Expor para o escopo global para que outros scripts possam chamar
window.renderCardapio = renderCardapio;