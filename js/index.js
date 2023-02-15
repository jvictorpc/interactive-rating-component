const submit = document.querySelector('.rating__btn');
const estruturaCard = document.querySelector('.rating');



submit.addEventListener('click', (event) => {
    event.preventDefault();
    let radiochecked = document.querySelector('form input[type=radio]:checked');
    if (radiochecked) {
        montaElemento(radiochecked.value);
    }
});

const montaElemento = (ratingValue) => {

    const img = document.createElement('img');
    img.src = './images/illustration-thank-you.svg';
    img.alt = 'thank you image';

    const imgContainer = document.createElement('figure');
    imgContainer.classList.add('confirm-img');
    imgContainer.insertAdjacentElement('beforeend', img);
    
    const ratingConfirmation = document.createElement('p');
    ratingConfirmation.classList.add('rating-confirmation');
    ratingConfirmation.textContent = `You selected ${ratingValue} out of 5`;

    const title = `<h1 class="confirm-title">Thank you! </h1>`;
    const thanksParagraph = `<p class ="thankyou-text">We apreciate you taking time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>`

    esvaziaCard();

    estruturaCard.insertAdjacentElement('beforeend', imgContainer);
    estruturaCard.insertAdjacentElement('beforeend', ratingConfirmation);
    estruturaCard.insertAdjacentHTML('beforeend', title);
    estruturaCard.insertAdjacentHTML('beforeend', thanksParagraph);
    estruturaCard.classList.add('confirm');
    console.log(estruturaCard);

};

const esvaziaCard = () => {
    while(estruturaCard.firstChild){
        estruturaCard.removeChild(estruturaCard.firstChild);
    }
}