let title = "Ça fait rire les oiseaux";
let artiste = "La Compagnie Créole";
let debugTimeAdjust = 0;
let timeAdjust = 3.5;

const lyrics = `
[00:00.00]...
[00:15.08]Ça fait rire les oiseaux, ça fait chanter les abeilles
[00:19.22]Ça chasse les nuages et fait briller le soleil
[00:23.08]Ça fait rire les oiseaux et danser les écureuils
[00:26.93]Ça rajoute des couleurs aux couleurs de l'arc-en-ciel
[00:30.75]Ça fait rire les oiseaux, oh, oh, oh, rire les oiseaux
[00:37.77]Ça fait rire les oiseaux, oh, oh, oh, rire les oiseaux
[00:46.24]Une chanson d'amour, c'est comme un looping en avion
[00:49.88]Ça fait battre le coeur des filles et des garçons
[00:53.95]Une chanson d'amour, c'est d'l'oxygène dans la maison 
[00:57.59]Tes pieds touchent plus par terre, t'es en lévitation
[01:01.00]Si y a d'la pluie dans ta vie, si le soir te fait peur
[01:05.23]La musique est là pour ça
[01:09.23]Y a toujours une mélodie pour des jours meilleurs
[01:13.09]Allez, tape dans tes mains, ça porte bonheur
[01:16.88]C'est magique, un refrain qu'on reprend tous en choeur
[01:20.55]Et ça fait rire les oiseaux, ça fait chanter les abeilles
[01:24.53]Ça chasse les nuages et fait briller le soleil
[01:28.31]Ça fait rire les oiseaux et danser les écureuils
[01:31.98]Ça rajoute des couleurs aux couleurs de l'arc-en-ciel
[01:36.04]Ça fait rire les oiseaux oh, oh, oh, rire les oiseaux
[01:43.08]T'es revenu chez toi la tête pleine de souvenirs
[01:47.67]Des soirs au clair de lune, des moments de plaisir
[01:51.30]T'es revenu chez toi et tu veux déjà repartir
[01:55.28]Retrouver l'aventure qui n'aurait pas dû finir
[01:58.50]Si y a du gris dans tes nuits, ou des larmes dans ton coeur
[02:02.81]La musique est là pour ça
[02:06.29]Y a toujours une mélodie pour des jours meilleurs
[02:10.49]Allez, tape dans tes mains, ça porte bonheur
[02:14.20]C'est magique, un refrain qu'on reprend tous en choeur
[02:18.01]Et ça fait rire les oiseaux, ça fait chanter les abeilles
[02:22.00]Ça chasse les nuages et fait briller le soleil
[02:25.84]Ça fait rire les oiseaux et danser les écureuils
[02:29.51]Ça rajoute des couleurs aux couleurs de l'arc-en-ciel
[02:33.51]Ça fait rire les oiseaux oh, oh, oh, rire les oiseaux
[02:41.17]Ça fait rire les oiseaux, ça fait chanter les abeilles
[02:44.95]Ça chasse les nuages et fait briller le soleil
[02:48.86]Ça fait rire les oiseaux et danser les écureuils
[02:52.74]Ça rajoute des couleurs aux couleurs de l'arc-en-ciel
[02:56.35]Ça fait rire les oiseaux, oh, oh, oh, rire les oiseaux
[03:03.82]
[03:03.82]Ça fait rire les oiseaux, ça fait chanter les abeilles
[03:08.19]Ça chasse les nuages et fait briller le soleil
[03:11.68]Ça fait rire les oiseaux et danser les écureuils
[03:15.78]Ça rajoute des couleurs aux couleurs de l'arc-en-ciel
[03:19.43]Ça fait rire les oiseaux, oh, oh, oh, rire les oiseaux
[03:27.26]Ça fait rire les oiseaux, oh, oh, oh, rire les oiseaux`;

const stops = [
    {
        time: 23.08 - 1.3,
        words: 2,
        answer: "le soleil",
        update: [2, 'Ça chasse les nuages et fait briller'],
        teaser: 'fait briller'
    },
    {
        time: 30.75 - 1.8,
        words: 4,
        answer: "couleurs de l'arc-en-ciel",
        update: [4, 'Ça rajoute des couleurs aux'],
        teaser: 'couleurs aux'
    },
    {
        time: 49.88 - 2.1,
        words: 6,
        answer: "est comme un looping en avion",
        update: [7, "Une chanson d'amour, c'"],
        teaser: "amour c'"
    },
    {
        time: 80.55 - 2.3,
        words: 7,
        answer: "refrain qu'on reprend tous en choeur",
        update: [15, "C'est magique, un"],
        teaser: 'magique, un'
    },
    {
        time: 60+55.28 - 0.8,
        words: 10,
        answer: "repartir Retrouver l'aventure qui n'aurait pas dû  finir",
        update: [23, "T'es revenu chez toi et tu veux déjà"],
        teaser: ''
    }
];