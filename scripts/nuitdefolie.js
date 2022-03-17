let title = "Nuit de Folie";
let artiste = "Début de Soiree";
let debugTimeAdjust = 0;
let timeAdjust = 1;

const lyrics = `
[00:00.00]...
[00:17.08]Y a pas de saison pour que vive la musique au fond
[00:21.27]Pas de saison pour que vive le son
[00:24.64]En marchant tu donnes une cadence à tes pas
[00:28.35]Tu sens la musique au bout de tes doigts
[00:31.73]Tu dis que la vie qu'on t'a donnée est faite pour ça
[00:35.95]Tant de choses grâce au son tu connaîtras
[00:39.56]Ton cœur est un saphir de pick-up
[00:43.75]On a trouvé des décibels dans ton check-up
[00:47.35]Et tu chantes, chantes, chantes ce refrain qui te plaît
[00:51.55]Et tu tapes, tapes, tapes, c'est ta façon d'aimer
[00:55.43]Ce rythme qui t'entraîne jusqu'au bout de la nuit
[00:59.32]Réveille en toi le tourbillon d'un vent de folie
[01:03.36]Et tu chantes, chantes, chantes ce refrain qui te plaît
[01:07.32]Et tu tapes, tapes, tapes, c'est ta façon d'aimer
[01:11.34]Ce rythme qui t'entraîne jusqu'au bout de la nuit
[01:15.05]Réveille en toi le tourbillon d'un vent de folie
[01:33.49]Tu danses le monde, musique américaine
[01:36.97]La cadence du funk au plus haut t'emmène
[01:41.02]Le tempo en délire, si ce soir il fait chaud
[01:44.73]C'est qu'on monte nos mains vers le point le plus haut
[01:49.35]Et tu chantes, chantes, chantes ce refrain qui te plaît
[01:52.59]Et tu tapes, tapes, tapes, c'est ta façon d'aimer
[01:56.46]Ce rythme qui t'entraîne jusqu'au bout de la nuit
[02:00.41]Réveille en toi le tourbillon d'un vent de folie
[02:04.57]Et tu chantes, chantes, chantes ce refrain qui te plaît
[02:08.27]Et tu tapes, tapes, tapes, c'est ta façon d'aimer
[02:12.18]Ce rythme qui t'entraîne jusqu'au bout de la nuit
[02:16.12]Réveille en toi le tourbillon d'un vent de folie
[02:36.50]Toi qui dessines au fond de ton ennui les notes d'une mélodie
[02:39.89]Une musique sans accords majeurs
[02:42.23]C'est une piste sans danseurs
[02:44.19]Mais si tu ranges dans ces moments-là
[02:46.07]Dans un placard tes idées noires
[02:47.85]Les notes pourront se danser
[02:49.81]Et nous reviendrons les chanter
[02:51.87]Quand le sucre est tombé, choqué, le café renversé
[02:53.81]Je sentais bien que la journée était mal commencée
[02:55.97]Plus tard la caisse était cassée avant que craquent les chromes
[02:57.97]Mettant la gomme j'avais détalé
[03:00.06]La musique était mon sourire, les vieux succès mes souvenirs
[03:01.92]On sort tous son dernier soupir
[03:03.04]Lorsqu'on va mourir
[03:04.13]Mais un souffle j'avais gardé car on ne peut pas trépasser
[03:05.93]chacun le sait, sans voir un disc jockey
[03:07.87]Et tu chantes, danses jusqu'au bout de la nuit
[03:09.94]Tes flash en musique funky
[03:11.86]Y a la basse qui frappe et la guitare qui choque
[03:13.71]Il y a le batteur qui s'éclate et toi qui tiens le choc
[03:15.77]Et tu chantes, chantes, chantes ce refrain qui te plaît
[03:19.39]Et tu tapes, tapes, tapes, c'est ta façon d'aimer
[03:22.99]Ce rythme qui t'entraîne jusqu'au bout de la nuit
[03:27.18]Réveille en toi le tourbillon d'un vent de folie
[03:31.13]Et tu chantes, chantes, chantes ce refrain qui te plaît
[03:34.38]Et tu tapes, tapes, tapes, c'est ta façon d'aimer
[03:38.66]Ce rythme qui t'entraîne jusqu'au bout de la nuit
[03:42.45]Réveille en toi le tourbillon d'un vent de folie
[03:46.79]Et tu chantes, chantes, chantes ce refrain qui te plaît
[03:50.69]Et tu tapes, tapes, tapes, c'est ta façon d'aimer
[03:54.02]Ce rythme qui t'entraîne jusqu'au bout de la nuit
[03:58.12]Réveille en toi le tourbillon d'un vent de folie
[04:02.06]Et tu chantes, chantes, chantes ce refrain qui te plaît
[04:05.84]Et tu tapes, tapes, tapes, c'est ta façon d'aimer`;

const stops = [
    {
        time: 44.5 + timeAdjust,
        words: 5,
        answer: "des décibels dans ton check-up",
        update: [8, 'On a trouvé']
    },
    {
        time: 60.25 + timeAdjust,
        words: 7,
        answer: "le tourbillon d'un vent de folie",
        update: [12, 'Réveille en toi']
    },
    {
        time: 98.10 - 0.5 + timeAdjust,
        words: 7,
        answer: "du funk au plus haut t'emmène",
        update: [18, 'La cadence']
    },
    {
        time: 157.10 - 0.5 + timeAdjust,
        words: 15,
        answer: "au fond de ton ennui les notes d'une mélodie Une musique sans accords majeurs",
        update: [29, 'Toi qui dessines']
    },
    {
        time: 193.05 - 0.5 + timeAdjust,
        words: 18,
        answer: "la guitare qui choque Il y a le batteur qui s'éclate et toi qui tiens le choc",
        update: [47, 'Y a la basse qui frappe et']
    }
];