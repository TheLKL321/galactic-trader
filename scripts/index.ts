if (localStorage.getItem("highscores") === null) {
    let dummyData = [{ nick: "~ciebie", score: 1337}, { nick: "asdf", score: 2580}, { nick: "lulz", score: 42},
        { nick: "lolz", score: 30035}, { nick: "md", score: 0}];
    localStorage.setItem("highscores", JSON.stringify(dummyData));
}

let highscoreTableBody = (<HTMLTableElement> document.querySelector("table")).createTBody();
let highscores : { nick: string, score: number }[] = JSON.parse(localStorage.getItem("highscores"));
highscores.sort( (a, b) => { return b.score - a.score });
for (let record of highscores) {
    let row = highscoreTableBody.insertRow();
    row.insertCell().textContent = record.nick;
    row.insertCell().textContent = String(record.score);
}

function beginGame() {
    sessionStorage.setItem("nickname", (<HTMLInputElement> document.getElementById("nicknameInput")).value);
}
