const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    console.log(cards);
    }
    return cards;
}

writeCards(names, "surprise");

function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count);
        count = count -1;
    }
}
countDown();