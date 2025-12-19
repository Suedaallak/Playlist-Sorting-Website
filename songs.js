
const smallPlaylistData = [
    ["Levitating", "Dua Lipa", 3 * 60 + 23, 2.47 * Math.pow(10, 9)],
    ["Love Again", "Dua Lipa", 4 * 60 + 18, 842 * Math.pow(10, 6)],
    ["Blinding Lights", "The Weeknd", 3 * 60 + 20, 5.18 * Math.pow(10, 9)],
    ["Save Your Tears", "The Weeknd", 3 * 60 + 35, 2.56 * Math.pow(10, 9)],
    ["Killing My Dreams", "Elysion", 3 * 60 + 51, 10.8 * Math.pow(10, 6)],
    
    ["Cry for the Moon", "Epica", 6 * 60 + 46, 34.0 * Math.pow(10, 6)],
    ["Chantaje", "Shakira", 3 * 60 + 15, 1.30 * Math.pow(10, 9)],
    ["Bad Romance", "Lady Gaga", 4 * 60 + 54, 1.73 * Math.pow(10, 9)],
    ["Just Dance", "Lady Gaga", 4 * 60 + 1, 1.60 * Math.pow(10, 9)],
    ["Spirit of Forgetfulness", "Blackbriar", 3 * 60 + 50, 1.15 * Math.pow(10, 6)]
];

const largePlaylistData = [
    ["Until Eternity", "Blackbriar", 4 * 60 + 38, 6.43 * Math.pow(10, 6)],
    ["Whenever, Wherever", "Shakira", 3 * 60 + 16, 807 * Math.pow(10, 6)],
    ["Bad Romance", "Lady Gaga", 4 * 60 + 54, 1.73 * Math.pow(10, 9)],
    ["Poker Face", "Lady Gaga", 3 * 60 + 57, 1.96 * Math.pow(10, 9)],
    ["7 rings", "Ariana Grande", 2 * 60 + 58, 2.69 * Math.pow(10, 9)],

    ["Into You", "Ariana Grande", 4 * 60 + 4, 1.81 * Math.pow(10, 9)],
    ["Killing My Dreams", "Elysion", 3 * 60 + 51, 10.8 * Math.pow(10, 6)],
    ["Dreamer", "Elysion", 4 * 60 + 13, 3.41 * Math.pow(10, 6)],
    ["Cry for the Moon", "Epica", 6 * 60 + 46, 34.0 * Math.pow(10, 6)],
    ["Arcana", "Epica", 5 * 60 + 2, 3.32 * Math.pow(10, 6)],

    ["Spirit of Forgetfulness", "Blackbriar", 3 * 60 + 50, 1.15 * Math.pow(10, 6)],
    ["Arms of the Ocean", "Blackbriar", 3 * 60 + 42, 5.53 * Math.pow(10, 6)],
    ["Born from Hope", "Elvellon", 4 * 60 + 29, 242 * Math.pow(10, 3)],
    ["Comfortably Numb", "Pink Floyd", 6 * 60 + 22, 796 * Math.pow(10, 6)],
    ["When A Blind Man Cries", "Deep Purple", 3 * 60 + 32, 58.7 * Math.pow(10, 6)],

    ["Perfect Strangers", "Deep Purple", 5 * 60 + 28, 156 * Math.pow(10, 6)],
    ["A Vagabond's Heart", "Elvellon", 5 * 60 + 20, 224 * Math.pow(10, 3)],
    ["Most Children Do", "The Fallen Angels", 3 * 60 + 16, 53.5 * Math.pow(10, 3)],
    ["Look To The Sun", "The Fallen Angels", 3 * 60 + 52, 6561],
    ["One", "Metallica", 7 * 60 + 26, 774 * Math.pow(10, 6)],

    ["Enter Sandman", "Metallica", 5 * 60 + 31, 1.93 * Math.pow(10, 9)],
    ["Christ", "Ashbury Heights", 3 * 60 + 19, 7.77 * Math.pow(10, 6)],
    ["Heart of Lilith", "Inkubus Sukkubus", 3 * 60 + 20, 1.105 * Math.pow(10, 6)],
    ["Blinding Lights", "The Weeknd", 3 * 60 + 20, 5.18 * Math.pow(10, 9)],
    ["Starboy", "The Weeknd", 3 * 60 + 50, 4.26 * Math.pow(10, 9)],

    ["HUMBLE.", "Kendrick Lamar", 2 * 60 + 57, 2.805 * Math.pow(10, 9)],
    ["Swimming Pools", "Kendrick Lamar", 4 * 60 + 7, 1.05 * Math.pow(10, 9)],
    ["Beautiful Strangers", "Tomorrow X Together", 2 * 60 + 18, 93.7 * Math.pow(10, 6)],
    ["LO$ER=LO♡ER", "Tomorrow X Together", 3 * 60 + 19, 263 * Math.pow(10, 6)],
    ["Aquamarine", "Addison Rae", 2 * 60 + 42, 86.9 * Math.pow(10, 6)],
    
    ["Espresso", "Sabrina Carpenter", 2 * 60 + 55, 2.69 * Math.pow(10, 9)],
    ["Ghost of Perdition", "Opeth", 10 * 60 + 29, 22.7 * Math.pow(10, 6)],
    ["Windowpane", "Opeth", 7 * 60 + 44, 35.0 * Math.pow(10, 6)],
    ["From the Start", "Laufey", 2 * 60 + 49, 944 * Math.pow(10, 6)],
    ["Still Into You", "Paramore", 3 * 60 + 36, 1.095 * Math.pow(10, 9)],

    ["You Give Love a Bad Name", "Bon Jovi", 3 * 60 + 42, 1.46 * Math.pow(10, 9)],
    ["Always", "Bon Jovi", 5 * 60 + 53, 715 * Math.pow(10, 6)],
    ["Silenzio", "Emma Shapplin", 3 * 60 + 26, 484160],
    ["Take A SLice", "Glass Animals", 3 * 60 + 49, 250 * Math.pow(10, 6)],
    ["Untouchable Part 1", "Anathema", 6 * 60 + 14, 9.54 * Math.pow(10, 6)],
    
    ["Angelica", "Anathema", 5 * 60, 5.37 * Math.pow(10, 6)],
    ["Ouverture de la Soiree", "Lacroix Despheres", 4 * 60 + 11, 697164],
    ["Angels", "Within Temptation", 4 * 60, 51.9 * Math.pow(10, 6)],
    ["La Tortura", "Shakira", 3 * 60 + 36, 695 * Math.pow(10, 6)],
    ["Judas", "Lady Gaga", 4 * 60 + 9, 1.02 * Math.pow(10, 9)],
    
    ["Side To Side", "Ariana Grande", 3 * 60 + 46, 1.75 * Math.pow(10, 9)],
    ["Cross the Divide", "Epica", 4 * 60 + 18, 2.68 * Math.pow(10, 6)],
    ["Until Dawn", "Elvellon", 6 * 60 + 9, 204384],
    ["Never Enough", "Epica", 4 * 60 + 47, 14.2 * Math.pow(10, 6)],
    ["Time", "Pink Floyd", 6 * 60 + 53, 478 * Math.pow(10, 6)],

    ["Dreamcatcher", "Elvellon", 4 * 60 + 26, 284361],
    ["Oraculum", "Elvellon", 4 * 60 + 29, 270893],
    ["Silent Garden", "The Fallen Angels", 1 * 60 + 58, 37808],
    ["I'll Drive You From My Mind", "The Fallen Angels", 4 * 60 + 25, 7548],
    ["Made of Lies", "Elysion", 3 * 60 + 19, 11.1 * Math.pow(10, 6)],

    ["Never Forever", "Elysion", 3 * 60 + 20, 11.9 * Math.pow(10, 6)],
    ["Trip the Darkness", "Lacuna Coil", 3 * 60 + 39, 19.9 * Math.pow(10, 6)],
    ["Sugar Rush Ride", "Tomorrow X Together", 3 * 60 + 6, 233 * Math.pow(10, 6)],
    ["Never Dawn", "Lacuna Coil", 4 * 60 + 49, 4.93 * Math.pow(10, 6)],
    ["Burden", "Opeth", 7 * 60 + 41, 19.0 * Math.pow(10, 6)],

    ["Afterlife", "Evanescence", 4 * 60 + 9, 61.6 * Math.pow(10, 6)],
    ["Lithium", "Evanescence", 3 * 60 + 44, 128 * Math.pow(10, 6)],
    ["My Immortal", "Evanescence", 4 * 60 + 22, 664 * Math.pow(10, 6)]
];

let customPlaylist = [];