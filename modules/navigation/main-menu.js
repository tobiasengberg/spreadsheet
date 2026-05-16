import {buildElement} from "../build-utilities/elements-building.js";

export const mainMenu = () => {
    let navBar = buildElement({
        type: "div",
        id: "main-menu-options",
        class: "flex flex-row"
    });
    menuOptions.forEach((option) => {
        let optionContainer = buildElement({
            type: "div",
            id: `${option}-menu`
        });
        let newOption = buildElement({
            type: "button",
            text: option,
            class: "menu-btn",
            id: `${option}-btn`
        });
        optionContainer.appendChild(newOption);
        navBar.appendChild(optionContainer);
    })
    return navBar;
}

const menuOptions = [
    "File", "Edit", "View", "Help"
]