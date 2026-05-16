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
    let workWidth = 100 * config.dimensions.columns;
    let workHeight = 30 * config.dimensions.rows;
    toAdd.style.width = workWidth + 30 + "px";
    toAdd.style.height = workHeight + 30 + "px";
    toAdd.style.gridTemplateColumns = `30px ${workWidth}px`;
    toAdd.style.gridTemplateRows = `30px ${workHeight}px`;
}

export const setupColumnsBar = () => {
    let targetArea = document.querySelector("#columns-bar");
    targetArea.innerHTML = "";
    targetArea.style.gridTemplateColumns = `repeat(${config.dimensions.columns}, 100px)`;
    for(let i = 0; i < config.dimensions.columns; i++) {
        let toAddColumn = buildElement({
            type: "div",
            id: "column-" + ( i + 1),
            text: String.fromCharCode(65 + i)
        });
        targetArea.appendChild(toAddColumn);
    }
}

export const setupRowsBar = () => {
    let targetArea = document.querySelector("#rows-bar");
    targetArea.innerHTML = "";
    targetArea.style.gridTemplateRows = `repeat(${config.dimensions.rows}, 30px)`;
    for(let i = 0; i < config.dimensions.rows; i++) {
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
    targetArea.style.gridTemplateColumns = `repeat(${config.dimensions.columns}, 100px)`;
    targetArea.style.width = `${100 * config.dimensions.columns}px`;
    targetArea.style.height = `${30 * config.dimensions.rows}px`;
    for(let i = 0; i < config.dimensions.rows; i++) {

        for(let j = 0; j < config.dimensions.columns; j++) {
            let toAddColumn = buildElement({
                type: "div",
                id: `${i + 1}-${j + 1}`,
                class: "sheet-column"
            })
            toAddColumn.style.width = "100px";
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