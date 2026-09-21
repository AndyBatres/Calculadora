document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.scene h1');
    const subtitle = document.querySelector('.scene p');
    const cupcake = document.querySelector('.cupcake');

    if (!title || !subtitle || !cupcake) {
        return;
    }

    const messages = [
        'PAINIS...',
        'NO MIRAR...',
        'ESTÁ VIVO...'
    ];

    const phrases = [
        'El pastel más peligroso de la cocina.',
        'Algo debajo del glaseado se mueve.',
        'La receta no era humana.'
    ];

    let index = 0;

    setInterval(() => {
        title.textContent = messages[index % messages.length];
        subtitle.textContent = phrases[index % phrases.length];
        cupcake.classList.toggle('rage');
        index += 1;
    }, 1800);
});