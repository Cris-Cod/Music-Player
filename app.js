let fillbar = document.querySelector(".fill");
let audios = ["./music/Alcolirykoz - El Malo de la Película.mp3",
    "./music/Alcolirykoz - N.A.D.A.mp3",
    "./music/Alcolirykoz - Normal.mp3",
    "./music/Alcolirykoz - Tararea.mp3"
]

let covers = ["./img/cover1.jpg", "./img/cover2.jpg", "./img/cover3.jpg", "./img/cover4.jpg"]
let currentTime = document.querySelector(".time");



let audio = new Audio();
let currentSong = 0;

window.onload = playSong;

function playSong() {
    audio.src = audios[currentSong];
    audio.play();
    nombreSong();
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        let playBtn = document.querySelector(".play-pause");
        playBtn.innerHTML = `<i class="fa fa-pause"></i>`;

    } else {
        audio.pause();
        playBtn = document.querySelector(".play-pause");
        playBtn.innerHTML = `<i class="fa fa-play-circle"></i>`;
    }
}


audio.addEventListener("timeupdate", function() {
    let position = audio.currentTime / audio.duration;
    fillbar.style.width = position * 100 + "%";

    converTime(Math.round(audio.currentTime));

    if (audio.ended) {
        nextAudio();
    }
});


function converTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec;

    totalTime(Math.round(audio.duration));
}

function totalTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    currentTime.textContent += " - " + min + ":" + sec;

}


function nextAudio() {
    currentSong++;
    if (currentSong.length == 0) {
        audios + 1;
    }

    playSong();
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = `<i class="fa fa-pause"></i>`;



    $(".imagen img").attr('src', covers[currentSong]);

}



function prevAudio() {
    currentSong--;
    if (currentSong.length == 0) {
        currentSong - 1;
    }
    playSong();
    let playBtn = document.querySelector(".play-pause");
    playBtn.innerHTML = `<i class="fa fa-pause"></i>`;

    $(".imagen img").attr('src', covers[currentSong]);

}


function decreaseVolume() {
    audio.volume -= 0.25;
}

function increaseVolume() {
    audio.volume += 0.25;
}


let volumeUp = document.querySelector(".volume-up");
volumeUp.addEventListener("click", function() {

    if (audio.volume === 1) {
        audio.volume = 0;
        document.querySelector(".volume-up i").className = "fa fa-volume-mute";
    } else {
        audio.volume = 1;
        document.querySelector(".volume-up i").className = "fa fa-volume-up";
    }
});


function nombreSong() {
    let nameSong = document.querySelector('.title');

    let song = audios[currentSong];
    let song1 = song.slice(8, -4);

    nameSong.innerHTML = `<p>${song1}</p>`;

}