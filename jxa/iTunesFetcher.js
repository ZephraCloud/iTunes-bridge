// const a = Application.currentApplication();
// let iTunes;
// a.includeStandardAdditions = true;

// try {
//   a.doShellScript("open -Ra Music");
//   iTunes = Application("Music");
// } catch {
//   iTunes = Application("iTunes");
// }

ObjC.import("Foundation");
const argv = $.NSProcessInfo.processInfo.arguments.js;

async function getCurrentTrack() {
  const currentTrack = iTunes.currentTrack;
  try {
    const remainingTime = parseInt(
      currentTrack.duration() - iTunes.playerPosition()
    );
    const json = {
      name: currentTrack.name(),
      artist: currentTrack.artist(),
      album: currentTrack.album(),
      mediaKind: currentTrack.mediaKind(),
      duration: parseInt(currentTrack.duration()),
      elapsedTime: parseInt(iTunes.playerPosition()),
      remainingTime: remainingTime,
      genre: currentTrack.genre(),
      releaseYear: currentTrack.year(),
      id: currentTrack.id(),
      playerState: iTunes.playerState(),
    };
    return json;
  } catch (e) {
    return { playerState: "stopped" };
  }

  // const currentTrack = await child.execSync("osascript iTunesFetcher.scpt");

  // if (!currentTrack || currentTrack === "stopped")
  //   return {playerState: "stopped"};
  // else {
  //   return {playerState: "hi"};
  // }
}

function getSoundVolume() {
  return iTunes.soundVolume();
}

// (async () => {
//   const { exec } = require("child_process");

//   function run(cmd) {
//     return new Promise((resolve, reject) => {
//       const currentTrack = exec("osascript iTunesFetcher.scpt");

//       if (!currentTrack || currentTrack === "stopped")
//         return {playerState: "stopped"};
//       else {
//         return {playerState: "hi"};
//       }
//     });
//   }
// })();

function run(argv) {
  switch (argv[0]) {
    case "getCurrentTrack": {
      return JSON.stringify(getCurrentTrack());
      break;
    }
    case "getPlayerState": {
      try {
        return JSON.stringify(iTunes.playerState());
      } catch (e) {
        return "stopped";
      }
      break;
    }
    case "getSoundVolume": {
      return getSoundVolume();
      break;
    }
  }
}
