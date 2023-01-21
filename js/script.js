let song = document.querySelector('#song');
let play = document.getElementById('playc');
let playc = document.getElementById('play');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let songName = document.getElementById('songName');
let Artist = document.getElementById('Artist');


let songList = ['Ranjithame', 'Thee Thalapathy', 'Soul Of Varisu', 'Jimikki Ponnu', 'Vaa Thalaivaa', 'Celebration Of Varisu'];
let artistList = ['Vijay and M.M. Manasi','Silambarasan TR','K. S. Chithra','Anirudh Ravichander','Shankar Mahadevan','Thaman S']
let i =0;
let n = songList.length;
song.setAttribute('src','music/'+songList[i]+'.mp3');
songName.innerHTML = songList[i];
Artist.innerHTML = artistList[i];



playc.addEventListener('click',playPause);
next.addEventListener('click',songNext);
prev.addEventListener('click',songPrev);


function songNext(){
    i++;
    i = i%n;
    songChange();
    song.play();
    if(play.classList.contains('fa-play')){
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
}

function songPrev(){
    i--;
    if(i<0)
    {
        i = n-1;
    }
    songChange();
    song.play();
    
    if(play.classList.contains('fa-play')){
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
}


function songChange(){
    song.setAttribute('src','music/'+songList[i]+'.mp3');
    songName.innerHTML = songList[i];
    Artist.innerHTML = artistList[i];
}


function playPause(){
    if(play.classList.contains('fa-play')){
        song.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    }
    else{
        song.pause();
        play.classList.remove('fa-pause');
        play.classList.add('fa-play');
    }
}
