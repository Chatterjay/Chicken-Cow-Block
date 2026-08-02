StartupEvents.registry('sound_event', event => {
    event.create('ccb:music.my_music');
});

StartupEvents.registry("item", event => {
    event.create('ccb:my_music')
        .jukeboxPlayable('ccb:music.my_music', true);
});