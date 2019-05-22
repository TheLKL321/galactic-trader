function fixInput(amount: number, buyPrice: number, onPlanet: number, onShip: number, money: number, cargoHoldSize: number, cargoLoad: number): number {
    amount = Math.min(amount, Math.floor(money / buyPrice), cargoHoldSize - cargoLoad, onPlanet);
    amount = Math.max(amount, -1 * onShip);
    return amount;
}

export {fixInput}