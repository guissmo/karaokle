let debugTimeAdjust = 0;
let timeAdjust = 1;

const lyrics = `
[00:00.00]...
[00:14.38]Nang ma-inlove ako sa'yo
[00:15.84]Kala ko'y pag-ibig mo ay tunay
[00:17.79]Pero hindi nag-tagal lumabas din ang tunay na kulay
[00:21.24]
[00:21.24]Ang iyong kilay mapag-mataas at laging namimintas
[00:24.33]Pero sarili kong pera ang iyong winawaldas
[00:27.29]Para kang sphinx ugali mo'y napaka-sting
[00:30.71]Kung hiyain mo ko talagang nakaka-shrink
[00:34.29]Girlie biddy bye bye don't tell a lie
[00:37.34]Bakit mo ako laging dini-deny
[00:40.46]
[00:40.46]All the goods I've done wala man lang recognition
[00:43.84]Mahilig kang manguleksyon binalewala aking atttention
[00:46.98]'Yo anyway everyday iba't ibang guys ang iyong ka-text
[00:50.12]And then one time nahuli kita na mayroon kang ka-sex
[00:53.40]
[00:53.40]Mas gugustuhin ko pa na magpa-crucify
[00:56.76]Kesa harap-harapan mo akong stupify
[00:59.93]So don't be mad so don't be sad
[01:03.12]Lahat ng kabulukan mo'y ilalahad
[01:05.46]
[01:05.46]Stupid (love ibinigay mo sa akin)
[01:11.83]Stupid (love pero di mo maamin)
[01:18.43]Stupid (love masakit sa damdamin)
[01:25.21]Stupid love (nang ako'y iyong babuyin)
[01:32.11]
[01:32.11]Kulay ko ay nag-iba simula ng makilala ka
[01:35.46]Every hour every minute nais na Makita ka
[01:38.53]Halos di kumain makausap lang sa phone
[01:41.55]Between you and me until the break of the dawn
[01:44.89]
[01:44.89]No one else come close pangako sa isa't-isa
[01:48.09]Ngunit napatunayan mo na ba na babalikan ka nya
[01:51.52]Pinagtapat sa akin na siya'y mamahalin pa rin
[01:55.01]Anong magagawa ko kundi ikaw ay palayain yo
[01:58.43]
[01:58.43]Halos isumpa sa sakit na naidulot
[02:01.36]Pero bakit ang katulad mo di pa rin malimot
[02:04.68]Nag-mahal ako ng iba ngunit ako'y bigo
[02:07.38]Sa pag-ibig ko sa'yo ako'y bilanggo
[02:10.66]
[02:10.66]Tumingin sa salamin naalala ang nakalipas
[02:14.72]Masakit palang maging (what)
[02:16.45]Panakip butas pero bago ang lahat ipag-tatapat sinta
[02:20.77]Mahal kita sincerely yours Bendeatha
[02:23.32]
[02:23.32]Stupid (love ibinigay mo sa akin)
[02:29.78]Stupid (love pero di mo maamin)
[02:36.48]Stupid (love masakit sa damdamin)
[02:42.68]Stupid love (nang ako'y iyong babuyin)
[02:49.42]
[02:49.42]Saan nga ba hahantong ang tagpong ito
[02:52.83]Minahal kita pero ako'y ginago mo
[02:55.54]And it took so long time bago pa maka-recover
[02:58.99]Sa ginawa mo sa 'kin meron pa akong hang over
[03:02.30]
[03:02.30]Naaalala mo paba nung tayo pa
[03:05.37]Kasa-kasama ka 'san man ako mag-punta
[03:08.50]Pinag-silbihan kita mula ulo hanggang paa
[03:11.62]Pati ang bra't panty mo ako ang nag-lalaba
[03:15.13]
[03:15.13]Kinu-kunsinte ka kung meron nagawang mali (oo na oo na sige na tama ka naman palagi eh)
[03:21.78]Mga inutos mo sa akin di ko sinuway
[03:24.80]Mas sinusunod na nga kita kesa sa akin nanay
[03:28.17]Lahat nalang ng bagay binigay ko sa iyo
[03:31.44]
[03:31.44]Naging sunud-sunuran ako na parang aso
[03:34.66]Pag may kausap kang iba ako'y dini-deny
[03:37.71]Basta gwapo ang guy binibigay mo ang puday
[03:41.10]
[03:41.10]Damn napaka istupido ng puso kong ito
[03:44.11]Ano ba ang dahilan at ako'y ginanito mo
[03:47.67]Inaway mo ako at iyong itinaboy
[03:50.88]At sa ibang boy nakipag-laro ka ng apoy
[03:53.97]
[03:53.97]Ako'y nananaghoy puso ko ay nabiyak
[03:57.32]Wasak na wasak ang Georgie at Nasty Mack
[04:00.39]Inaamin ko noon na minahal nga kita
[04:03.57]Pero ngayon binabawi ko na
[04:06.88]
[04:06.88]Stupid (love ibinigay mo sa akin)
[04:13.42]Stupid (love pero di mo maamin)
[04:19.99]Stupid (love masakit sa damdamin)
[04:26.44]Stupid love (nang ako'y iyong babuyin)
[04:32.81]
[04:32.81]Stupid (love ibinigay mo sa akin)
[04:39.31]Stupid (love pero di mo maamin)
[04:45.81]Stupid (love masakit sa damdamin)
[04:52.29]Stupid love (nang ako'y iyong babuyin)
[04:58.77]
[04:58.77]Stupid (love ibinigay mo sa akin)
[05:05.18]Stupid (love pero di mo maamin)
[05:11.23]Stupid (love masakit sa damdamin)`;

const stops = [
    {
        time: 44.5 + timeAdjust,
        words: 5,
        answer: "des décibels dans ton check-up",
    },
    {
        time: 60.25 + timeAdjust,
        words: 7,
        answer: "le tourbillon d'un vent de folie"
    },
    {
        time: 98.10 - 0.5 + timeAdjust,
        words: 7,
        answer: "du funk au plus haut t'emmène"
    },
    {
        time: 157.10 - 0.5 + timeAdjust,
        words: 15,
        answer: "au fond de ton ennui les notes d'une mélodie Une musique sans accords majeurs"
    },
    {
        time: 193.05 - 0.5 + timeAdjust,
        answer: "la guitare qui choque Il y a le batteur qui s'éclate et toi qui tiens le choc"
    }
];