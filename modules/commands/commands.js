import {config} from "../data/config.js";
import {tableCommands} from "./table-commands/table-commands.js";
import {formatCommands} from "./format-commands/format-commands.js";
import {chartCommands} from "./chart-commands/chart-commands.js";

export const runCommand = (id) => {
    switch (config.tabChoice) {
        case "table-menu":
            tableCommands[id]();
            break;
        case "format-menu":
            formatCommands[id]();
            break;
        case "chart-menu":
            chartCommands[id]();
            break;
        default:
    }
}

export const getButton = (button) => {
    let newButton = document.createElement("button");

    if(button.length > 2) {
        let image = document.createElement("img");
        image.setAttribute("src", `/images/${button[2]}`);
        image.setAttribute("id", button[0]);
        newButton.appendChild(image);
    } else {
        newButton.innerText = button[1];
        newButton.setAttribute("id", button[0]);
    }
    return newButton;
}