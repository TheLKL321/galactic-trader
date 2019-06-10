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

document.querySelector("#newMapPopupButtonWrapper > a").addEventListener("click", () => {
    let file = (<HTMLInputElement> document.querySelector("#newMapPopupInput input")).files[0];
    console.log(file);
    let fr = new FileReader();
    fr.onload = (event) => {
        let data = (<FileReader> event.target).result.toString();
        console.log(data);
        data = JSON.parse(data);
        console.log(data);
        data = JSON.stringify(data);
        console.log(data);
        fetch("/uploadMap", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: data
        });
    };
    fr.readAsText(file);
});

function beginGame() {
    sessionStorage.setItem("nickname", (<HTMLInputElement> document.getElementById("nicknameInput")).value);
}
