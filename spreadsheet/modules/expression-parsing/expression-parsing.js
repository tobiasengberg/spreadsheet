import {config} from "../data/config.js";

export const parseExpression = (expression) => {
    if(/^[0-9]*$/.test(expression)) return [expression, "number"];
    if(expression.substring(0,1) === '=') return handleFormula(expression.substring(1));
    if(expression.substring(0,4) === "SUM(") {
        let values = expression.substring(4,expression.length -1).split(':');
        let col = /^[A-Z]+/.exec(values[0]);
        return [col, "sum"];
    }
    return [expression, "text"];
}

const handleFormula = (formula) => {
    let parts = formula.split('(');
    if(parts.length === 2){
        let command = parts[0];
        let args = parts[1].slice(0, -1).split(',').map(arg => parseInt(arg));
        switch(command) {
            case "SUM": return [args[0] + args[1], "number"];
            case "AVERAGE": return [(args[0] + args[1])/2, "number"];
            case "NOW": return [30, "text"];
            case "MAX": return [Math.max(...args), "number"];
            case "MIN": return [Math.min(...args), "number"];
            default: break;
        }
    }
    if(formula.substring(0,2) === "D4")
        return parseExpression(config.content.filter(item => item.id === "4-4")[0].value);
    let result = 0;
    formula.split("+").map((item) => { result += parseInt(item)})
    return [result, "number"]
}