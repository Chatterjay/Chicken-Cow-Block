ServerEvents.registry('jukebox_song', event => {
    event.create('ccb:my_music')
        .song('ccb:music.my_music', 252);
});