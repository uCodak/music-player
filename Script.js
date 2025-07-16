const musicContainer = document.querySelector('.music-container');
const musicInfo = document.getElementById('music-info');
const title = document.getElementById('title');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.querySelector('.progress-container');
const audio = document.getElementById('audio');
const pauseBtn = document.getElementById('pause');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const cover = document.getElementById('cover');

//song titles
const songs = ['Bounce', 'stronger', 'come closer'];
//keep track of song index

let songIndex = 2;

//intialize the song
loadSong(songs[songIndex]);

//update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}


//event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});


//play song
function playSong() {
    musicContainer.classList.add('play');
    pauseBtn.classList.remove('hidden');
    playBtn.classList.add('hidden');
    musicInfo.classList.remove('hidden');
    // cover.classList.add('rotate');

    audio.play();
}

// Pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    pauseBtn.classList.add('hidden');
    playBtn.classList.remove('hidden');
    musicInfo.classList.add('hidden');
    audio.pause();
}


// Update progress bar
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.target;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// Previous song
function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
}

// Next song
function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
}
