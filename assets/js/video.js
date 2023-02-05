let video = document.getElementById("video");
let vid = document.getElementById("myVideo"); 
let vidd = document.getElementById('video-three')
let viddd = document.getElementById('video-two')
let vi = document.getElementById('video-five')
let circlePlayButton = document.getElementById("circle-play-b");
let circlePlayButtonC = document.getElementById("circle-play-c");
let circlePlayButtonD = document.getElementById("circle-play-d");
let circlePlayButtoE = document.getElementById("circle-play-e");
let circlePlayButtonF = document.getElementById("circle-play-f");
let play = document.getElementsByClassName('play-gif')


video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});


vid.addEventListener("playing", function () {
	circlePlayButtoE.style.opacity = 0;
});
vid.addEventListener("pause", function () {
	circlePlayButtoE.style.opacity = 1;
});

vidd.addEventListener("playing", function () {
	circlePlayButtonD.style.opacity = 0;
});
vidd.addEventListener("pause", function () {
	circlePlayButtonD.style.opacity = 1;
});

viddd.addEventListener("playing", function () {
	circlePlayButtonC.style.opacity = 0;
});
viddd.addEventListener("pause", function () {
	circlePlayButtonC.style.opacity = 1;
});

vi.addEventListener("playing", function () {
	circlePlayButtonF.style.opacity = 0;
});
vi.addEventListener("pause", function () {
	circlePlayButtonF.style.opacity = 1;
});