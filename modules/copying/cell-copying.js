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
}