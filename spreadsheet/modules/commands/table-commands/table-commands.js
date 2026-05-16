import {config} from "../../data/config.js";
import {mergeCells, unmergeCells} from "./sub-commands/cell-merge.js";

export const tableCommands = {
    addRow: () => config.dimensions.rows++,
    addColumn: () => config.dimensions.columns++,
    addRowAbove: () => alterTableSize(true, true, 1 ),
    addRowBelow: () => alterTableSize(true, false, 1 ),
    addColumnLeft: () => alterTableSize(false, true, 1 ),
    addColumnRight: () => alterTableSize(false, false, 1 ),
    removeRowAbove: () => alterTableSize(true, true, -1),
    removeRowBelow: () => alterTableSize(true, false, -1),
    removeColumnLeft: () => alterTableSize(false, true, -1),
    removeColumnRight: () => alterTableSize(false, false, -1),
    mergeCells: () => mergeCells(),
    unmergeCells: () => unmergeCells(),
}

// parameter "comparison" is a function with two parameters and an operator of either ">" or ">="
const alterTableSize = (isRow, leftOrAbove, change) => {

    if(isAlterable(leftOrAbove, isRow, change)) {
        alterTableDimensions(isRow, change);
        placeContent(leftOrAbove, isRow, change);
        placeStyling(leftOrAbove, isRow, change);
        placeSelection(isRow, change);
    }
}

const isAlterable = (leftOrAbove, isRow, change) => {
    console.log(config.selection);
    if(config.selection.length !== 1) return false;
    if(change > 0) return true;
    let [row, column] = config.selection[0].split("-").map(i => parseInt(i));
    if(isRow && rowContainsContent(row + leftOrAbove ? -1 : 1)) return false;
    if(columnContainsContent(column + leftOrAbove ? -1 : 1)) return false;
    return true;
}

const rowContainsContent = (row) => {
    return config.content.filter(i => i.row === row).length > 0;
}

const columnContainsContent = (column) => {
    return config.content.filter(i => i.column === column).length > 0;
}

const alterTableDimensions = (isRow, change) => {
    isRow ? config.dimensions.rows = config.dimensions.rows + change : config.dimensions.columns = config.dimensions.columns + change;
}

const placeContent = (leftOrAbove, isRow, change) => {
    let comparison = leftOrAbove ? (a, b) => a >= b : (a, b) => a > b;
    let newContent = [];
    config.content.map((item) => {
        if(comparison(isRow ? item.row : item.column, parseInt(config.selection[0].split("-")[isRow ? 0 : 1]))) {
            newContent.push({
                value: item.value,
                id: `${isRow ? item.row + change : item.row}-${isRow ? item.column : item.column + change}`,
                column: isRow ? item.column : item.column + change,
                row: isRow ? item.row + change : item.row,
                style: item.style,
            });
        } else {
            newContent.push(item);
        }
    })
    config.content = [...newContent];
}

const placeStyling = (leftOrAbove, isRow, change) => {
    let comparison = leftOrAbove ? (a, b) => a >= b : (a, b) => a > b;
    let newStyling = {};
    let styledEntries = Object.keys(config.styling);
    styledEntries.map((item) => {
        let [row, column] = item.split("-").map(i => parseInt(i));
        if(comparison(isRow ? row : column, parseInt(config.selection[0].split("-")[isRow ? 0 : 1]))) {

            newStyling[`${isRow ? row + change : row}-${isRow ? column : column + change}`] = config.styling[item];
        } else {
            newStyling[item] = config.styling[item];
        }
    })
    config.styling = {...newStyling};
}

const placeSelection = (isRow, change) => {
    let [row, column] = config.selection[0].split("-").map(i => parseInt(i));
    config.selection[0] = `${isRow ? row + change : row}-${isRow ? column : column + change}`;
}