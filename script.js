var players = []; // the controls of the iFrames aren't accessible via DOM

// This pauses the videos 
function preparePlayer(event) {
    setTimeout(function() {
        event.target.pauseVideo(); //pauseVideo() is a YT API function
    }, 16);
    event.target.unMute(); // unMute() is a YT API function
}

// Adds new video to the list
function newVideo(projTitle, src) {
    src = src.substring(32);
    var div = document.createElement('div');
    div.setAttribute('id',src);
    var container = document.querySelector('#video-container');
    container.appendChild(div);

    // turns div into iFrame - YT API
    var frame = new YT.Player(src, {
        videoId: src,
        id: src,
        title: projTitle,
        playerVars: {
            playersinline: 1,
            autoplay: 1,
            mute: 1 // Google restricts autoplay with sounds
        },
        events: {
            onReady: preparePlayer
        }
    });

    players.push(frame);
}

function hoverPlay(index) {
    players[index].playVideo(); // YT API
}

function hoverStop(index) {
    players[index].pauseVideo(); // YT API
}

// adds the hover-in-out play-pause fx
function applyHover() {
    var frames = document.querySelectorAll('iframe');
    for(var i = 0; i < frames.length; i++) {
      frames[i].setAttribute('onmouseover', 'hoverPlay(' + i.toString() + ')');
      frames[i].setAttribute('onmouseout', 'hoverStop(' + i.toString() + ')');
    }
}