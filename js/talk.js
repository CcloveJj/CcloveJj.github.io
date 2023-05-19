new TypeIt("#ccjj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("CC ♥ JJ")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第二个520...")
    .pause(3000)
    .go();

new TypeIt('#talkToJJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();