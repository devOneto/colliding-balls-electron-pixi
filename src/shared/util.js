
export function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

export function rndInt(a, b) {
    return Math.floor(Math.random() * b) + a;
} 