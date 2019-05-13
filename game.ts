(<HTMLElement> document.querySelector("#gameStateBar > .text-left")).innerText = sessionStorage.getItem("nickname");
startCountdown(300);
let money = 1984;
let moneyText = (<HTMLElement> document.querySelector("#gameStateBar > .text-right"));
moneyText.innerText = String(money);

function startCountdown(seconds){
    let counter = seconds;
    let timerText = (<HTMLElement> document.querySelector("#gameStateBar > .text-middle"));

    const interval = setInterval(() => {
        timerText.innerText = counter;
        counter--;

        if (counter < 0) {
            clearInterval(interval);
        }
    }, 1000);
}