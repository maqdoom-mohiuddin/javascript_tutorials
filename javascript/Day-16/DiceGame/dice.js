function Shuffle() {
    const img = document.getElementById('img');
    let rnumber = Math.floor(Math.random() * 6) + 1;
    img.setAttribute("src", `${rnumber}.png`);

    if (rnumber === 1) {
        document.getElementById('demo').innerHTML = 'You Got the 1 point'
    } else if (rnumber === 2) {
        document.getElementById('demo').innerHTML = 'You Got the 2 point'

    } else if (rnumber === 3) {
        document.getElementById('demo').innerHTML = 'You Got the 3 point'

    } else if (rnumber === 4) {
        document.getElementById('demo').innerHTML = 'You Got the 4 point'

    } else if (rnumber === 5) {
        document.getElementById('demo').innerHTML = 'You Got the 5 point'

    } else if (rnumber === 6) {
        document.getElementById('demo').innerHTML = 'You Got the 6 point'

    }
}



function anim() {
    setTimeout(Shuffle, 500);
    const img = document.getElementById('img');
    img.setAttribute
}