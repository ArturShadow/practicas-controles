let video = document.getElementById("videoPlayer");
let source = document.getElementById("sourceTag");
let btnPlay = document.getElementById("")
let count = 0;
let videos = ["Nuevo Trailer De Spider-Man Across The Spider-verse_ Doblado en Japones.mp4", "LiSA「REALiZE.mp4","video_2023-05-25_17-43-14.mp4"];

function playPause() {
    if (source.src == "") {
        source.src = "assets/" + videos[0];
        reload();
    }
    if (video.paused)
        video.play();
    else
        video.pause();
}
function reload() {
    video.load();
}
function makeLarge() {
    video.width = 1000;
}
function makeSmall() {
    video.width = 250;
}
function makeNormal() {
    video.width = 600;
}

function next() {
    source.src = "assets/" + videos[count];
    reload();
    count++;
    if (count >= videos.length) count = 0;
}