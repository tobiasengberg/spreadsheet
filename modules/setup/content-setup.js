import {parseExpression} from "../expression-parsing/expression-parsing.js";
import {config} from "../data/config.js";

export const setupContent = () => {
    if(config.content.length === 0) return;
    config.content.map((item) => {
        let newContent = parseExpression(item.value);
        let newTarget = document.getElementById(`${item.id}`);
        newTarget.innerText = newContent[0];
        newTarget.classList.add(newContent[1]);
    })
};