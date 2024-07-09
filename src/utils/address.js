export function formatAddress(address) {
    let firstPart = "";
    let secondPart = "";

    for (let i = 0; i < 4; i++) {
        firstPart += address[i]
    }

    for (let i = 0; i < 5; i++) {
        secondPart += address[i];
    }

    return firstPart + "..." + secondPart
}