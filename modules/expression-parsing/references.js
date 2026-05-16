export const getLetterCombination = (id) => {
    let [row, column] = id.split("-").map(i => parseInt(i));
    let firstLetter = Math.floor(column / 25);
    let secondLetter = column % 25;
    return column > 25 ? `${String.fromCharCode(64 + firstLetter)}${String.fromCharCode(64 + secondLetter)}${row}`
        : `${String.fromCharCode(64 + column)}${row}`;
}

export const getId = (letterCombination) => {
    let splitPoint = letterCombination.search(/[0-9]+/);
    let column = 0;
    for(let i = 0; i < splitPoint; i++) column += (letterCombination.charCodeAt(i) - 64) * Math.pow(25, splitPoint - 1 - i);
    return `${letterCombination.substring(splitPoint)}-${column}`;
}