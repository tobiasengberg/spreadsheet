import {config} from "../../data/config.js";

const colorPicker = () => document.getElementById("color-picker");
const borderStyle = () => document.getElementById("border-style");

export const formatCommands = {
    changeTextColor: () => alterStyling("color", () => colorPicker.value),
    changeFillColor: () => alterStyling("backgroundColor", () => colorPicker.value),
    toggleBoldText: () => alterStyling("font-weight", () => "700"),
    increaseFontSize: () => alterStyling("font-size", (sel) => {
        let old = window.getComputedStyle(document.getElementById(sel)).getPropertyValue('font-size');
        return parseInt(old.substring(0, old.length - 2)) + 1 + "px";
    }),
    decreaseFontSize: () => alterStyling("font-size", (sel) => {
        let old = window.getComputedStyle(document.getElementById(sel)).getPropertyValue('font-size');
        return parseInt(old.substring(0, old.length - 2)) - 1 + "px";
    }),
    addBorderAbove: () => alterStyling("border-top", () => `1px ${borderStyle().value} ${colorPicker().value}`),
    addBorderBelow: () => alterStyling("border-bottom", () => `1px ${borderStyle().value} ${colorPicker().value}`),
    justifyLeft: () => alterStyling("text-align", () => "left"),
    justifyCenter: () => alterStyling("text-align", () => "center"),
    justifyRight: () => alterStyling("text-align", () => "right"),
    clearFormatting: () => config.selection.forEach(sel => delete config.styling[sel]),
}



const alterStyling = (kind, getValue) => {
    config.selection.forEach(sel => {
        let value = getValue(sel);
        console.log(value);
        if(config.styling.hasOwnProperty(sel)) {
            config.styling[sel][kind] = value;
        } else {
            config.styling[sel] = { [kind]: value };
        }
    });
}

