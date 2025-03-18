// Built a dynamic music player with playlist functionality, allowing users to play, pause, skip, and auto-play songs with real-time UI updates.


var arr = [
    { songName: "Co2", url: "Assets/Songs/Prateek Kuhad-Co2.mp3", img: "Assets/Imgs/PrateekKuhad-Co2.webp" },
    { songName: "Art Deco", url: "Assets/Songs/Lana Del Rey-Art Deco.mp3", img: "Assets/Imgs/LanaDelRey-ArtDeco.webp" },
    { songName: "Good For You x One Of The Girls", url: "Assets/Songs/Dreamsoda-Good For You x One Of The Girls.mp3", img: "Assets/Imgs/Dreamsoda-GoodForYouxOneOfTheGirls.webp" },
    { songName: "Music to Watch Boys To x I Wanna Be Yours", url: "Assets/Songs/Treyvik-Music to Watch Boys To x I Wanna Be Yours.mp3", img: "Assets/Imgs/Treyvik-MusicToWatchBoysToxIWannaBeYours.webp" }
];

var allSongs = document.querySelector("#all-songs");
var poster = document.querySelector("#left");

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var audio = new Audio();
var selectedSong = 0;
var durations = [];

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function loadDurations() {
    let promises = arr.map((song, index) => {
        return new Promise((resolve) => {
            let tempAudio = new Audio(song.url);
            tempAudio.addEventListener("loadedmetadata", function () {
                durations[index] = formatTime(tempAudio.duration);
                resolve();
            });
        });
    });

    Promise.all(promises).then(() => {
        mainFunction();
    });
}

function mainFunction() {
    var clutter = "";
    arr.forEach(function (elem, index) {
        clutter += `<div class="song-card" id=${index}>
            <div class="part1">
                <img src=${elem.img} alt="">
                <h2>${elem.songName}</h2>
            </div>
            <h6>${durations[index] || "Loading..."}</h6>
        </div>`;
    });

    allSongs.innerHTML = clutter;
    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

// When a song card is clicked
allSongs.addEventListener("click", function (dets) {
    selectedSong = dets.target.closest(".song-card").id;
    mainFunction();
    audio.play();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
});

var flag = 0;

// Play/Pause Button
play.addEventListener("click", function () {
    if (flag === 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        audio.play();
        flag = 1;
    } else {
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        audio.pause();
        flag = 0;
    }
});

// Next Song Button
forward.addEventListener("click", function () {
    selectedSong = (selectedSong + 1) % arr.length;
    mainFunction();
    audio.play();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
});

// Previous Song Button
backward.addEventListener("click", function () {
    selectedSong = (selectedSong - 1 + arr.length) % arr.length;
    mainFunction();
    audio.play();
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1;
});

// **Auto Play Next Song When Current Song Ends**
audio.addEventListener("ended", function () {
    selectedSong = (selectedSong + 1) % arr.length; // Move to next song
    mainFunction();
    audio.play();
});

loadDurations();
