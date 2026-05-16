import {buildElement} from "../../build-utilities/elements-building.js";
import {getButton} from "../commands.js";

export const formatMenu = () => {
    let newElement = document.createElement("div");
    newElement.setAttribute("id", "format-menu");
    formatButtons.forEach((button) => {
        newElement.appendChild(getButton(button));
    });
    let colorPicker = document.createElement("input");
    colorPicker.setAttribute("type", "color");
    colorPicker.setAttribute("id", "color-picker");
    newElement.appendChild(colorPicker);
    let borderStyle = buildElement({
        type: "select",
        id: "border-style"
    });
    let optionOne = buildElement({
        type: "option",
        value: "solid",
        text: "Solid"
    });
    let optionTwo = buildElement({
        type: "option",
        value: "dotted",
        text: "Dotted"
    });
    let optionThree = buildElement({
        type: "option",
        value: "dashed",
        text: "Dashed"
    });
    borderStyle.appendChild(optionOne);
    borderStyle.appendChild(optionTwo);
    borderStyle.appendChild(optionThree);
    newElement.appendChild(borderStyle);
    return newElement;
}

const formatButtons = [
    [ "changeTextColor", "Change text color" ],
    [ "changeFillColor", "Change fill color" ],
    ["toggleBoldText", "Bold" ],
    ["increaseFontSize", "Increase font size", "caret-up.svg" ],
    ["decreaseFontSize", "Decrease font size", "caret-down.svg" ],
    ["addBorderAbove", "Add border above", "border-top.svg" ],
    ["addBorderBelow", "Add border below", "border-bottom.svg" ],
    ["clearFormatting", "Clear formatting" ],
    ["justifyLeft", "Justify left", "justify-left.svg" ],
    ["justifyCenter", "Justify center", "justify.svg" ],
    ["justifyRight", "Justify right", "justify-right.svg"],
]

