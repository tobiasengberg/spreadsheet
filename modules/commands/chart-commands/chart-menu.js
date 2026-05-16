export const chartMenu = () => {
    let newElement = document.createElement("div");
    newElement.setAttribute("id", "chart-menu");
    chartButtons.forEach((button) => {
        let newButton = document.createElement("button");
        newButton.setAttribute("id", button[0]);
        newButton.innerText = button[1];
        newElement.appendChild(newButton);
    });
    return newElement;
}

const chartButtons = [
    [ "barChart", "Bar chart" ],
    [ "lineChart", "Line chart" ],
    [ "scatterPlot", "Scatter plot" ],
    [ "boxPlot", "Box plot" ],
    [ "stackedBarChart", "Stacked bar chart" ],
    [ "groupedBarChart", "Grouped bar chart" ],

]