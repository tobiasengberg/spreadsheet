import {config} from "../data/config.js";
import {eventListeners} from "../../events/eventlisteners.js";

export const removePreviouslySelected = () => {
    config.selection.forEach((element) => {
    document.getElementById(element).classList.remove("selected");
    })
    config.selection.length = 0;
}

export const selectAllInRow = (row) => {
    for(let i = 0; i < config.dimensions.columns; i++) {
        let rowId = `${row}-${i + 1}`;
        config.selection.push(rowId);
        document.getElementById(rowId).classList.add("selected");
    }
}

export const selectAllInColumn = (column) => {
    for(let i = 0; i < config.dimensions.rows; i++) {
        let colId = `${i + 1}-${column}`;
        config.selection.push(colId);
        document.getElementById(colId).classList.add("selected");
}}

export const addOrRemoveSelected = (id) =>
{
    let selectedElement = document.getElementById(id);
    if(config.selection.includes(id)) {
        config.selection.splice(config.selection.indexOf(id), 1);
        selectedElement.classList.remove("selected");
        return false;
    }
    config.selection.push(id);
    selectedElement.classList.add("selected");
    return true;
};

export const addSingleSelected = (id) => {
    let selectedElement = document.getElementById(id);
    config.selection.push(id);
    selectedElement.classList.add("selected");
}

export const setSelectRectangle = (e) => {
    let selectRectangle;
    if(!document.getElementById("selectRectangle")) {
        selectRectangle = getSelectRectangle(100, 30);
        selectRectangle.setAttribute("id", "selectRectangle");
        document.getElementById("workArea").appendChild(selectRectangle);
    }
    selectRectangle = document.getElementById("selectRectangle");
    // selectRectangle.setAttribute("width", e.target.offsetWidth + "px");
    // selectRectangle.setAttribute("height", e.target.offsetHeight + "px");
    selectRectangle.style.top = e.target.offsetTop + "px";
    selectRectangle.style.left = e.target.offsetLeft + "px";
};

export const getSelectRectangle = (width, height) => {
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", `calc(${width}px + 0px)`);
    svg.setAttribute("height", `calc(${height}px + 0px)`);
    let path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M 0 0 L 100 0");
    path1.setAttribute("stroke", "red");
    path1.setAttribute("fill", "none");
    path1.setAttribute("stroke-width", "1px");
    let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M 100 0 L 100 30");
    path2.setAttribute("stroke", "red");
    path2.setAttribute("fill", "none");
    path2.setAttribute("stroke-width", "1px");
    let path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3.setAttribute("d", "M 100 30 L 0 30");
    path3.setAttribute("stroke", "red");
    path3.setAttribute("fill", "none");
    path3.setAttribute("stroke-width", "1px");
    let path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path4.setAttribute("d", "M 0 30 L 0 0");
    path4.setAttribute("stroke", "red");
    path4.setAttribute("fill", "none");
    path4.setAttribute("stroke-width", "1px");
    let circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle1.setAttribute("cx", "0");
    circle1.setAttribute("cy", "0");
    circle1.setAttribute("r", "3px");
    circle1.setAttribute("id", "top-left-corner");
    circle1.style.cursor = "nwse-resize";
    // mouseMoveWhilstDown(circle1);
    let circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle2.setAttribute("cx", "100%");
    circle2.setAttribute("cy", "100%");
    circle2.setAttribute("r", "3px");
    circle2.setAttribute("id", "bottom-right-corner");
    circle2.style.cursor = "nwse-resize";
    // mouseMoveWhilstDown(circle2);
    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(path3);
    svg.appendChild(path4);
    svg.appendChild(circle1);
    svg.appendChild(circle2);
    return svg;
}

export const removeSelectRectangle = () => {
    let selectRectangle = document.querySelector("#selectRectangle");
    if(selectRectangle) selectRectangle.remove();
}

export const handleRectangleChange = (e) => {
    if (e.target.id === "top-left-corner") {
        console.log(e);
        let selectRectangle = document.getElementById("selectRectangle");
        selectRectangle.setAttribute("width", "200px");
        selectRectangle.setAttribute("height", "60px");
        selectRectangle.style.top = e.target.offsetTop - 120 + "px";
        selectRectangle.style.left = e.target.offsetLeft - 300 + "px";
    } else if (e.target.id === "bottom-right-corner") {
        console.log("expand right");
    }
}

export const handleKeyDown = (e) => {
    if(e.key === "Escape" && config.selection.length > 0) {
        config.selection.forEach((element) => {
            document.getElementById(element).classList.remove("selected");
        });
        config.selection.length = 0;
        removeSelectRectangle();
    }
}