import {config} from "../data/config.js";

export const getTabChoice = (id) => {
    switch (id) {
        case "menu-tab-table": return "table-menu";
        case "menu-tab-format": return "format-menu";
        case "menu-tab-chart": return "chart-menu";
        default:
    }
}