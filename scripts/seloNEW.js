(function() {
    var items = document.querySelectorAll('#post-list li');
    var agora = new Date();
    var umaSemana = 7 * 24 * 60 * 60 * 1000;

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var data = new Date(item.getAttribute('data-date'));
        if (agora - data < umaSemana) {
        var img = document.createElement('img');
        img.src = '/imagens/recursos/new.gif';
        img.alt = 'Novo';
        img.style.verticalAlign = 'middle';
        item.insertBefore(img, item.firstChild);
        }
    }
})();