let title = "Wannabe";
let artiste = "Spice Girls";
let debugTimeAdjust = 0;
let timeAdjust = 48-3.48;

const lyrics = `
[00:00.00]...
[00:03.48]Ha ha ha ha ha
[00:04.60]Yo, I'll tell you what I want, what I really, really want
[00:06.85]So tell me what you want, what you really, really want
[00:09.16]I'll tell you what I want, what I really, really want
[00:11.47]So tell me what you want, what you really, really want
[00:13.59]I wanna, (ha) I wanna, (ha) I wanna, (ha) I wanna, (ha)
[00:16.03]I wanna really, really, really wanna zigazig ah
[00:18.10]If you want my future, forget my past
[00:22.79]If you wanna get with me, better make it fast
[00:26.95]Now don't go wasting my precious time
[00:31.26]Get your act together we could be just fine
[00:35.06]I'll tell you what I want, what I really, really want
[00:37.67]So tell me what you want, what you really, really want
[00:39.78]I wanna, (ha) I wanna, (ha) I wanna, (ha) I wanna, (ha)
[00:42.06]I wanna really, really, really wanna zigazig ah
[00:44.40]If you wanna be my lover, you gotta get with my friends
[00:48.35](Gotta get with my friends)
[00:49.09]Make it last forever, friendship never ends
[00:52.99]If you wanna be my lover, you have got to give
[00:57.02]Taking is too easy, but that's the way it is
[01:01.86]Oh, what do you think about that
[01:03.63]Now you know how I feel
[01:05.61]Say, you can handle my love, are you for real
[01:10.43](Are you for real)
[01:11.08]I won't be hasty, I'll give you a try
[01:14.79]If you really bug me then I'll say goodbye
[01:18.43]Yo I'll tell you what I want, what I really, really want
[01:21.39]So tell me what you want, what you really, really want
[01:23.65]I wanna, (ha) I wanna, (ha) I wanna, (ha) I wanna, (ha)
[01:25.83]I wanna really, really, really wanna zigazig ah
[01:28.08]If you wanna be my lover, you gotta get with my friends
[01:32.04](Gotta get with my friends)
[01:32.52]Make it last forever, friendship never ends
[01:36.61]If you wanna be my lover, you have got to give
[01:40.65](You've got to give)
[01:41.43]Taking is too easy, but that's the way it is
[01:45.32]So, here's a story from A to Z
[01:47.41]You wanna get with me, you gotta listen carefully
[01:49.59]We got Em in the place who likes it in your face
[01:51.86]You got G like MC who likes it on a
[01:54.04]Easy V doesn't come for free, she's a real lady
[01:56.57]And as for me, ha you'll see
[01:58.24]Slam your body down and wind it all around
[02:00.39]Slam your body down and wind it all around
[02:03.38]If you wanna be my lover, you gotta get with my friends
[02:06.08](Gotta get with my friends)
[02:07.04]Make it last forever, friendship never ends
[02:10.34]If you wanna be my lover, you have got to give
[02:14.86](You've got to give)
[02:16.20]Taking is too easy, but that's the way it is
[02:20.31]If you wanna be my lover
[02:22.04]You gotta, you gotta, you gotta, you gotta, you gotta
[02:24.91]Slam, slam, slam, slam (make it last forever)
[02:26.44]Slam your body down and wind it all around
[02:29.02]Slam your body down and wind it all around
[02:30.82]Ha, ha, ha, ha, ha
[02:33.62]Slam your body down and wind it all around
[02:35.48]Slam your body down and zigazig ah
[02:46.32]If you wanna be my lover`;

const stops = [
    {
        time: 31.26 - 1.6,
        words: 2,
        answer: "precious time",
        update: [10, "Now don't go wasting my "],
        teaser: 'wasting my'
    },
    {
        time: 48.35 - 1.5,
        words: 4,
        answer: "get with my friends",
        update: [16, 'If you wanna be my lover, you gotta'],
        teaser: 'you gotta'
    },
    {
        time: 61.86 - 2.4,
        words: 6,
        answer: "that's the way it is",
        update: [20, "Taking is too easy, but "],
        teaser: "easy, but"
    },
    {
        time: 60+14.79+0.6,
        words: 8,
        answer: "really bug me then I'll say goodbye",
        update: [26, "If you"],
        teaser: 'magique, un'
    },
    {
        time: 60+54.14,
        words: 10,
        answer: "doesn't come for free, she's a real lady",
        update: [41, "Easy V "],
        teaser: ''
    }
];