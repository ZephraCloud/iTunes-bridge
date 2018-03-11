const iTunes = require('./itunes-bridge');
var currentPlayerState = iTunes.getPlayerState();

switch(currentPlayerState){
    case "playing": {
        var currentTrack = iTunes.getCurrentTrack();
        var exampleMsg = "iTunes is currently playing " + currentTrack.name + " by " + currentTrack.artist + ' from the album "' + currentTrack.album + '". This song is ' + currentTrack.duration + 's long and will finish in ' + currentTrack.remainingTime+'s';
        var exampleMsg2 = "You have " + iTunes.getPlaylistCount() + " playlists in your library and " + iTunes.getTrackCount() + " tracks!";
        console.log(exampleMsg);
        console.log(exampleMsg2);
        break;
    }
    case "paused": {
        var exampleMsg = 'iTunes is currently paused';
        console.log(exampleMsg);
        break;
    }
    case "stopped":
    case "not running": {
        var exampleMsg = "iTunes is not playing at the moment.";
        console.log(exampleMsg);
        break;
    }
};