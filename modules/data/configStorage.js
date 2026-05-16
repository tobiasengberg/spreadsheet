import {config} from "./config.js";

export const loadConfigData = () => {
    let contentHistory = localStorage.getItem("content");
    if(contentHistory) {
        config.content = JSON.parse(contentHistory);
    }
    let dimensionsHistory = localStorage.getItem("dimensions");
    if(dimensionsHistory) {
        config.dimensions = JSON.parse(dimensionsHistory);
    }
    let mergeDataHistory = localStorage.getItem("mergeData");
    if(mergeDataHistory) {
        config.mergeData = JSON.parse(mergeDataHistory);
    }
    let stylingHistory = localStorage.getItem("styling");
    if(stylingHistory) {
        config.styling = JSON.parse(stylingHistory);
    }
}