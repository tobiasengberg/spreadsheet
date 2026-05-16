import {config} from "./data/config.js";



// const mouseMoveWhilstDown = (target) => {
//     var endMove = function () {
//         window.removeEventListener('mousemove', whileMove);
//         window.removeEventListener('mouseup', endMove);
//         document.getElementById("workArea").removeEventListener("mouseout", endMove);
//     };
//
//     var whileMove = (e) => {
//         destination.x = e.clientX;
//         destination.y = e.clientY;
//         console.log(destination);
//         console.log(origin);
//     }
//
//     let origin = {x: 0, y: 0};
//     let destination = {x: 0, y: 0};
//     target.addEventListener('mousedown', function (event) {
//         event.stopPropagation(); // remove if you do want it to propagate ..
//         origin.x = event.clientX;
//         origin.y = event.clientY;
//
//         window.addEventListener('mousemove', whileMove);
//         window.addEventListener('mouseup', endMove);
//         document.getElementById("workArea").addEventListener("mouseout", endMove);
//     });
// }