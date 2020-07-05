whatsapp();

function whatsapp() {

    const width = window.innerWidth;
    const elements = document.querySelectorAll('[rel="whatsapp"]');

    const whatsapp = '5541988518580';
    const mensage = 'Olá Nelson, gostaria de um orçamento.';

    const desktop = `https://web.whatsapp.com/send?phone=${whatsapp}&text=${mensage}`;
    const mobile = `https://wa.me/${whatsapp}?text=${mensage}`;

    const href = width < 991 ? mobile : desktop;

    for (i = 0; i < elements.length; i++) {
        elements[i].setAttribute('href', href)
    }
}

