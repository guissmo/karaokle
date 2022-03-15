let title = "La ballade des gens heureux";
let artiste = "Gerard Lenorman";
let debugTimeAdjust = 0;
let timeAdjust = 1;

const lyrics = `
[00:00.00]...
[00:06.98]Notre vieille Terre est une étoile
[00:10.20]Où toi aussi tu brilles un peu
[00:14.16]Je viens te chanter la ballade
[00:17.63]La ballade des gens heureux
[00:21.79]Je viens te chanter la ballade
[00:25.34]La ballade des gens heureux
[00:29.97]Tu n'as pas de titre ni de grade
[00:33.49]Mais tu dis "tu" quand tu parles à dieu
[00:37.57]Je viens te chanter la ballade
[00:41.25]La ballade des gens heureux
[00:45.29]Je viens te chanter la ballade
[00:48.87]La ballade des gens heureux
[00:53.28]Journaliste pour ta première page
[00:57.10]Tu peux écrire tout ce que tu veux
[01:00.77]Je t'offre un titre formidable
[01:04.41]La ballade des gens heureux
[01:08.57]Je t'offre un titre formidable
[01:12.05]La ballade des gens heureux
[01:16.57]Toi qui as planté un arbre
[01:20.23]Dans ton petit jardin de banlieue
[01:23.97]Je viens te chanter la ballade
[01:27.53]La ballade des gens heureux
[01:31.80]Je viens te chanter la ballade
[01:35.17]La ballade des gens heureux
[01:39.59]Il s'endort et tu le regardes
[01:43.31]C'est ton enfant il te ressemble un peu
[01:47.11]Je viens lui chanter la ballade
[01:50.52]La ballade des gens heureux
[01:54.99]Je viens te chanter la ballade
[01:58.72]La ballade des gens heureux
[02:03.03]Toi la star du haut de ta vague
[02:06.59]Descends vers nous, tu nous verras mieux
[02:10.61]Je viens te chanter la ballade
[02:13.89]La ballade des gens heureux
[02:18.16]Je viens te chanter la ballade
[02:21.50]La ballade des gens heureux
[02:26.16]Roi de la drague et de la rigolade
[02:29.48]Rouleur, flambeur ou gentil petit vieux
[02:33.40]Je viens te chanter la ballade
[02:36.71]La ballade des gens heureux
[02:40.77]Je viens te chanter la ballade
[02:44.33]La ballade des gens heureux
[02:48.46]Comme un chœur dans une cathédrale
[02:52.14]Comme un oiseau qui fait ce qu'il peut
[02:55.95]Tu viens de chanter la ballade
[02:59.43]La ballade des gens heureux
[03:03.51]Tu viens de chanter la ballade
[03:07.02]La ballade des gens heureux`;

const stops = [
    {
        time: 17.63 - 2.3+1,
        words: 2,
        answer: "la ballade",
        update: [3, "Je viens te chanter "],
        teaser: 'te chanter'
    },
    {
        time: 37.57 - 2.8+1,
        words: 4,
        answer: "tu parles à dieu",
        update: [8, 'Mais tu dis "tu" quand'],
        teaser: 'quand'
    },
    {
        time: 80.23 - 0.1,
        words: 6,
        answer: "dans ton petit jardin de banlieue",
        update: [20, "Toi qui as planté un arbre"],
        teaser: "un arbre"
    },
    {
        time: 60+47.11-0.9,
        words: 8,
        answer: "un peu Je viens lui chanter la ballade",
        update: [26, "C'est ton enfant il te ressemble"],
        teaser: 'ressemble'
    },
    {
        time: 60*2+52.14-1.7,
        words: 10,
        answer: "cathédrale Comme un oiseau qui fait ce qu'il peut",
        update: [43, "Comme un chœur dans une"],
        teaser: ''
    }
];