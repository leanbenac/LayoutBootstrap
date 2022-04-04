const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 100,
});

typewriter
.typeString("La capital del Sol")
.pauseFor(200)
.start();
