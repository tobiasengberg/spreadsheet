import {config} from "../data/config.js";

export const cellPaste = (text) => {
    const ids = text.split(",");
    const first = config.selection[0];
    Object.hasOwn(config.styling, ids[0]) && config.selection.length > 0?
        config.selection.forEach(select => {
            config.styling[select] = config.styling[ids[0]]
        })
        :
        delete config.styling[first];
    let contentSource = config.content.filter(item => item.id === ids[0]);
    if (contentSource) {
        let contentTarget = config.content.filter(item => item.id === config.selection[0]);
        if (contentTarget.length > 0){
            contentTarget[0].value = contentSource[0].value;
        } else {
            config.content.push({
                value: contentSource[0].value,
                id: config.selection[0],
                column: parseInt(config.selection[0].split("-")[1]),
                row: parseInt(config.selection[0].split("-")[0]),
                refs: contentSource[0].refs
            });
        }


    }
}