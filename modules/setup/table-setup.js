import {config} from "../data/config.js";
import {buildElement} from "../build-utilities/elements-building.js";

export const setupTable = () => {
    setupFullArea();
    setupColumnsBar();
    setupRowsBar();
    setupWorkArea();
}

export const setupFullArea = () => {
    let toAdd = document.querySelector("#spreadsheet");
    config.dimensions.columns = [130,110,130,130,90,130,130,230,130,130,70,110,140,80,50];
    config.dimensions.rows = [30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30];
    let workWidth = config.dimensions.columns.reduce((a, b) => a + b);
    let workHeight = config.dimensions.rows.reduce((a, b) => a + b);
    toAdd.style.width = workWidth + 30 + "px";
    toAdd.style.height = workHeight + 30 + "px";
    toAdd.style.gridTemplateColumns = `30px ${workWidth}px`;
    toAdd.style.gridTemplateRows = `30px ${workHeight}px`;
}

export const setupColumnsBar = () => {
    let targetArea = document.querySelector("#columns-bar");
    targetArea.innerHTML = "";
    targetArea.style.gridTemplateColumns = getTemplateString(config.dimensions.columns);
    for(let i = 0; i < config.dimensions.columns.length; i++) {
        let toAddColumn = buildElement({
            type: "div",
            id: "column-" + ( i + 1),
            text: String.fromCharCode(65 + i)
        });
        targetArea.appendChild(toAddColumn);
    }
}

const getTemplateString = (dimensions) => {
    let result = "";
    dimensions.forEach((item) => {
            result += item + "px ";
    });
    return result.trim();
}

export const setupRowsBar = () => {
    let targetArea = document.querySelector("#rows-bar");
    targetArea.innerHTML = "";
    targetArea.style.gridTemplateRows = getTemplateString(config.dimensions.rows);
    for(let i = 0; i < config.dimensions.rows.length; i++) {
        let toAddRow = buildElement({
            type: "div",
            id: "row-" + (i + 1),
            text: (i + 1) + ""
        })
        targetArea.appendChild(toAddRow);
    }
}

export const setupWorkArea = () => {
    let targetArea = document.querySelector("#workArea");
    targetArea.innerHTML = "";
    targetArea.style.gridTemplateColumns = getTemplateString(config.dimensions.columns);
    targetArea.style.width = `${config.dimensions.columns.reduce((a, b) => a + b)}px`;
    targetArea.style.height = `${config.dimensions.rows.reduce((a, b) => a + b)}px`;
    for(let i = 0; i < config.dimensions.rows.length; i++) {

        for(let j = 0; j < config.dimensions.columns.length; j++) {
            let toAddColumn = buildElement({
                type: "div",
                id: `${i + 1}-${j + 1}`,
                class: "sheet-column"
            })
            toAddColumn.style.width = config.dimensions.columns[j] + "px";
            targetArea.appendChild(toAddColumn);
        }
    }
}

export const mergeCells = () => {
    config.mergeData.forEach((item) => {
        let cellOrigin = document.getElementById(item.origin);
        cellOrigin.style.gridRow = "span " + item.spans[0];
        cellOrigin.style.gridColumn = "span " + item.spans[1];
        cellOrigin.style.width = 100 * item.spans[1] + "px";
        cellOrigin.style.height = 30 * item.spans[0] + "px";
        item.suppress.forEach((cell) => {
            document.getElementById(cell).remove();
        })
    })
}

const getDistance = (start, howMany) => {

}