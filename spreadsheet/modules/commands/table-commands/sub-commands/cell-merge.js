import {config} from "../../../data/config.js";

export const mergeCells = () => {
    let selection = [...config.selection];
    let lowestColumn = Math.min(...selection.map((item) => parseInt(item.split("-")[1])));
    let highestColumn = Math.max(...selection.map((item) => parseInt(item.split("-")[1])));
    let lowestRow = Math.min(...selection.map((item) => parseInt(item.split("-")[0])));
    let highestRow = Math.max(...selection.map((item) => parseInt(item.split("-")[0])));
    let origin = `${lowestRow}-${lowestColumn}`;
    let suppress = [...selection.filter((item) => item !== origin)];

    // Delete styling and content from suppressed cells
    suppress.forEach((item) => {
        delete config.styling[item];
        let remove = config.content.filter((entry) => entry.id === item);
        console.log(remove);
        let target = config.content.findIndex((entry) => entry.id === origin);
        console.log(target);
        let suppressedContent = "";
        if(remove.length > 0) suppressedContent += remove[0].value;
        if(target === -1 && suppressedContent.length > 0) {
            config.content.push({
                value: suppressedContent,
                id: origin,
                column: parseInt(origin.split("-")[1]),
                row: parseInt(origin.split("-")[0]),
                style: []
            })
        } else if(target && suppressedContent.length > 0) {
            config.content[target].value += suppressedContent;
        }
    });
    config.content = config.content.filter((entry) => suppress.indexOf(entry.id) < 0);
    selection.forEach((item) => {
        let target = document.getElementById(item);
        target.classList.remove("selected");
    })
    config.mergeData.push(
        {
            origin: origin,
            spans: [highestRow - lowestRow + 1, highestColumn - lowestColumn + 1],
            suppress: suppress,
        }
    )
    config.selection.length = 0;
}

export const unmergeCells = () => {
    if(config.selection.length !== 1) return;
    config.mergeData = config.mergeData.filter((item) => item.origin !== config.selection[0]);
}