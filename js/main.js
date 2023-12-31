const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// variabile che parte da 0
let i = 0;
//  costante che contiene l'array intero
const allImages = images.length;

// varie costanti che collegano gli elementi del js all'html
const newImage = document.getElementById('image');
const newTitle = document.getElementById('text-1');
const newText = document.getElementById('text-2');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

// per permettere di cambiare titolo immagine e descrizione
const show = (index) => {
    const { image, title, text } = images[index];
    newImage.src = image;
    newTitle.textContent = title;
    newText.textContent = text;
}

// per poter cambiare una ad una avanti e indietro
prev.addEventListener('click', () => {
    i = (i - 1 + allImages) % allImages;
    show(i);
})

next.addEventListener('click', () => {
    i = (i + 1) % allImages;
    show(i);
})

