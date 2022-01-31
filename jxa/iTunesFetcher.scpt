if application "Music" is running then
    tell application "Music"
        if player state is playing then
            set currentTrack to current track

            return "playing" & " -AMRPC- " & {get artist of currentTrack} & " -AMRPC- " & {get name of currentTrack} & " -AMRPC- " & {get album of currentTrack} & " -AMRPC- " & {get kind of currentTrack} & " -AMRPC- " & {get duration of currentTrack} & " -AMRPC- " & {player position} & " -AMRPC- " & {get genre of current track} & " -AMRPC- " & {get id of current track}
        else if player state is paused then
            set currentTrack to current track

            return "paused" & " -AMRPC- " & {get artist of currentTrack} & " -AMRPC- " & {get name of currentTrack} & " -AMRPC- " & {get album of currentTrack} & " -AMRPC- " & {get kind of currentTrack} & " -AMRPC- " & {get duration of currentTrack} & " -AMRPC- " & {player position} & " -AMRPC- " & {get genre of current track} & " -AMRPC- " & {get id of current track}
        else
            return "stopped"
        end if
    end tell
else
    return "stopped"
end if