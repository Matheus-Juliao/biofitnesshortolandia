let video = document.createElement("video")
video.controls = true;
video.autoplay = true;

let classVideo = document.getElementsByClassName("video-biofitness")[0];
classVideo.appendChild(video)

if(window.innerWidth > 950) { 
    video.src = "video/venha-treinar-na-biofitness.mp4";
} else {
    video.src = "/video/venha-treinar-na-biofitness-mobile.mp4";
}