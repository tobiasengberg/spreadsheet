import {loadEventListeners} from "./events/eventlisteners.js";
import {loadInspector, loadMenu} from "./modules/navigation/menu-setup.js";
import {loadConfigData} from "./modules/data/configStorage.js";
import {config} from "./modules/data/config.js";
import {mergeCells, setupTable} from "./modules/setup/table-setup.js";
import {applyStyling} from "./modules/styling/apply-styling.js";
import {setupContent} from "./modules/setup/content-setup.js";
import {getId, getLetterCombination} from "./modules/expression-parsing/references.js";

window.addEventListener("load", () => {
    reRender(0);
});

export const reRender = (depth = 2) => {
    if(depth === 0) {
        loadEventListeners();
        loadMenu();
        loadConfigData();
    }
    if(depth === 0 || depth === 1) {
        localStorage.setItem("content", JSON.stringify(config.content));
        localStorage.setItem("dimensions", JSON.stringify(config.dimensions));
        localStorage.setItem("mergeData", JSON.stringify(config.mergeData));
        localStorage.setItem("styling", JSON.stringify(config.styling));
        setupTable();
        mergeCells();
        applyStyling();
        setupContent();

    }
    if(depth !== 1) {
        loadInspector();
    }
}






