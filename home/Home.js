let playBtn = document.getElementById("Deep-Breathing-play-audio")
let isPlaying = false

let currentSongIndex = 0
let songs = [
    "10_Minute_Guided_Breathing_Meditation(128k).mp3"
]
let x = new Audio(songs[currentSongIndex])

function play() {
    if (isPlaying){
        x.pause()
        playBtn.src="Images/bx-play.svg"
    }else {
        x.play()
        playBtn.src="Images/bx-pause.svg"
    }

    isPlaying = !isPlaying
}

let mutee = document.getElementById("mute")

function mute() {




if (isPlaying){
    mutee.src="bx-microphone.svg"
    x.muted = false
}else {
    x.muted = !x.muted
    mutee.src="bxs-microphone-off.svg"
}

isPlaying = !isPlaying



}

let hearrt = document.getElementById("heart")

function heart() {
    hearrt.src="bxs-heart.svg"

    if (isPlaying){
        
        hearrt.src="bx-heart.svg"
    }else {
        
        hearrt.src="bxs-heart.svg"
    }

    isPlaying = !isPlaying
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length
    x.src= songs[currentSongIndex]

    if (isPlaying) {
        x.play();
    }

    updateTitle();
}

function updateTitle(){

let title = document.getElementById("title")
title.innerText = songs[currentSongIndex]
}

let progress = document.getElementById("progress")
let totalTimeElement = document.getElementById("totalTime")
let currentTimeElement = document.getElementById("currentTime")

x.addEventListener('timeupdate',updateProgress)

function updateProgress() {
    let currentTime = x.currentTime
    let duration = x.duration

    if (!isNaN(duration)){
    let progressPercentage = (currentTime/duration) * 100
    progress.style.width = progressPercentage + '%'

    currentTimeElement.innerText = formatTime(currentTime)
}
}

function formatTime(time) {
    let minutes = Math.floor(time / 60)
    let seconds = Math.floor(time % 60)
    return  padZero(minutes) + ':' + padZero(seconds)

}

function padZero(number) {
    return (number < 10 ? '0' : '') + number
}

x.addEventListener('loadedmetadata', function () {
    if(!isNaN(x.duration)){
    totalTimeElement.innerText = formatTime(x.duration)
    }
})

x.addEventListener('loadedmetadata', function () {
    if(!isNaN(x.duration) && x.readyState >= 2) {
    totalTimeElement.innerText = formatTime(x.duration)
    }
})


document.addEventListener('DOMContentLoaded', function () {

    for (let index = 0; index < songs.length; index++){
        
        let songName = songs[index]

        let titleElement = document.getElementById("title" +(index + 1))

        let textNode = document.createTextNode(songName)

        if(index > 0){
            titleElement.append(document.createElement('b'))
        }

        titleElement.appendChild(textNode)

        titleElement.addEventListener("click",function () {
            play(index)
        })
    }
})

function transitionPage(event) {
    event.preventDefault();
    const nextPageUrl = event.target.getAttribute("href");

    document.body.style.opacity = 0;

    setTimeout(() => {
        window.location.href = nextPageUrl;
    }, 300); // Adjust the duration to match your CSS transition time
}

