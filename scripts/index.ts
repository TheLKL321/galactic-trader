function beginGame() {
    sessionStorage.setItem("nickname", (<HTMLInputElement> document.getElementById("nicknameInput")).value);
}