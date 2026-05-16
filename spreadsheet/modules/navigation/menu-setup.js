import {tableMenu} from "../commands/table-commands/table-menu.js";
import {formatMenu} from "../commands/format-commands/format-menu.js";
import {config} from "../data/config.js";
import {chartMenu} from "../commands/chart-commands/chart-menu.js";
import {mainMenu} from "./main-menu.js";
import {buildElement} from "../build-utilities/elements-building.js";

export const loadMenu = () => {
    document.getElementById("main-menu").appendChild(buildElement({type: "div", id: "main-logo", text: "SpreadsheetApplication"}));
    document.getElementById("main-menu").appendChild(mainMenu());
}
export const loadInspector = () => {
    let inspector = document.getElementById("inspector-main");
    inspector.replaceChildren(getMenuChoice(config.tabChoice));
}

const getMenuChoice = (choice) => {
    switch (config.tabChoice) {
        case "table-menu": return tableMenu();
        case "format-menu": return formatMenu();
        case "chart-menu": return chartMenu();
        default:
    }
}