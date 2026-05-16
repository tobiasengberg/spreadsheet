export const buildElement = (element) => {
    let newElement = document.createElement(element.type);
    if(element.id) newElement.setAttribute("id", element.id);
    if(element.class) newElement.className = element.class;
    if(element.text) newElement.innerText = element.text;
    if(element.value) newElement.value = element.value;
    return newElement;
}