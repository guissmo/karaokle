let debugTimeAdjust = 0;
let timeAdjust = 1+5+0.4;

const lyrics = `
[00:00.00]...
[00:04.85]Chez moi les forêts se balancent
[00:06.29]Et les toits grattent le ciel
[00:10.38]Les eaux des torrents sont violence
[00:11.78]Et les neiges sont éternelles
[00:15.74]Chez moi les loups sont à nos portes
[00:17.35]Et tous les enfants les comprennent
[00:21.17]On entend les cris de New York
[00:22.80]Et les bateaux sur la Seine
[00:26.58]Va pour tes forêts tes loups tes gratte-ciel
[00:29.60]Va pour tes torrents tes neiges éternelles
[00:32.00]J'habite où tes yeux brillent
[00:33.62]Où ton sang coule où des bras me serrent
[00:36.50]J'irai où tu iras, mon pays sera toi
[00:42.71]J'irai où tu iras qu'importe la place
[00:45.47]Qu'importe l'endroit
[00:48.57]Je veux des cocotiers des plages
[00:50.17]Et des palmiers sous le vent
[00:54.08]Le feu du soleil au visage
[00:55.62]Et le bleu des océans
[00:59.71]Je veux des chameaux des mirages
[01:01.17]Et des déserts envoûtants
[01:05.07]Des caravanes et des voyages comme sur les dépliants
[01:10.41]Va pour tes cocotiers tes rivages
[01:12.46]Va pour tes lagons tout bleu balançant
[01:16.12]J'habite où l'amour est un village
[01:18.00]Là où l'on m'attend
[01:20.29]J'irai où tu iras, mon pays sera toi
[01:26.57]J'irai où tu iras qu'importe la place
[01:29.12]Qu'importe l'endroit
[01:32.41]Prends tes clic et tes clac et tes rêves et ta vie
[01:35.46]Tes mots, tes tabernacles et ta langue d'ici
[01:38.20]L'escampette et la poudre et la fille de l'air
[01:41.01]Montre-moi tes édens, montre-moi tes enfers
[01:43.66]Tes nord et puis tes sud et tes zestes d'ouest
[01:52.69]Alright, prends tes clic et tes clac et tes rêves et ta vie
[02:00.57]Tes mots, tes tabernacles et ta langue d'ici
[02:03.11]L'escampette et la poudre et la fille de l'air
[02:05.91]Montre-moi tes édens, montre-moi tes enfers
[02:08.76]Chez moi les forêts se balancent
[02:10.17]Et les toits grattent le ciel
[02:13.98]Les eaux des torrents sont violence
[02:15.49]Et les neiges sont éternelles
[02:19.40]Chez moi les loups sont à nos portes
[02:21.18]Et tous les enfants les comprennent
[02:24.99]On entend les cris de New York
[02:26.52]Et les bateaux sur la Seine
[02:30.39]Qu'importe j'irai où bon te semble
[02:33.27]J'aime tes envies j'aime ta lumière (ta lumière)
[02:35.84]Tous les paysages te ressemblent
[02:38.04]Quand tu les éclaires (quand tu les éclaires)
[02:40.76]J'irai où tu iras, mon pays sera toi
[02:46.35]J'irai où tu iras qu'importe la place
[02:49.08]Qu'importe l'endroit
[02:51.62]J'irai où tu iras, mon pays sera toi
[02:55.76]Qu'importe la place
[02:57.27]Qu'importe l'endroit
[02:59.68]J'irai où tu iras, mon pays sera toi
[03:04.05]Qu'importe la place
[03:05.36]Qu'importe l'endroit
[03:07.98]Mon pays sera toi, j'irai où tu iras
[03:12.29]Qu'importe la place
[03:13.76]Qu'importe l'endroit
[03:16.29]Mon pays sera toi, j'irai où tu iras
[03:20.59]Qu'importe la place
[03:21.98]Qu'importe l'endroit`;

const stops = [
    {
        time: 12.28,
        words: 2,
        answer: "sont éternelles",
        update: [4, 'Et les neiges']
    },
    {
        time: 35.63 - 1.2,
        words: 4,
        answer: "des bras me serrent",
        update: [12, 'Où ton sang coule où']
    },
    {
        time: 49.75,
        words: 7,
        answer: "plages Et des palmiers sous le vent",
        update: [16, 'Je veux des cocotiers des ']
    },
    {
        time: 72.10 - 0.2,
        words: 8,
        answer: "rivages Va pour tes lagons tout bleu balançant",
        update: [23, 'Va pour tes cocotiers tes']
    },
    {
        time: 102+1,
        words: 12,
        answer: "enfers Tes nord et puis tes sud et tes zestes d'ouest",
        update: [33, 'Montre-moi tes édens, montre-moi tes']
    }
];