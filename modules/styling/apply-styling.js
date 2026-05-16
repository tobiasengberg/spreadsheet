import {config} from "../data/config.js";


export const applyStyling = () => {
    config.selection.forEach((item) => document.getElementById(item).classList.add("selected"));
    let styledEntries = Object.keys(config.styling);
    styledEntries.forEach((item) => {
        let target = document.getElementById(item);
        let customStyles = config.styling[item];
        let styleRules = Object.keys(customStyles);
        styleRules.forEach((rule) => {
            target.style[rule] = customStyles[rule];
        })
    })
}