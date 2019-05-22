// Returns an amount that the player can legally buy/sell
function fixInput(amount: number, buyPrice: number, onPlanet: number, onShip: number, money: number, cargoHoldSize: number, cargoLoad: number): number {
    amount = Math.round(amount);
    amount = Math.min(amount, Math.floor(money / buyPrice), cargoHoldSize - cargoLoad, onPlanet);
    amount = Math.max(amount, -1 * onShip);
    return amount;
}

// Returns the distance between a ship and a planet rounded to the nearest integer
function calcDistance(currentX: number, currentY: number, targetX: number, targetY: number) : number {
    return Math.round(Math.sqrt((currentX - targetX) ** 2 + (currentY - targetY) ** 2));
}

export {fixInput, calcDistance}