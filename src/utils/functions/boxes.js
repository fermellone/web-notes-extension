import { makeMoveable } from '../../helpers/makeElementMoveable'

export function addSquare(event) {

    var square = document.createElement("div");

    // Styling the element
    square.style.display = "flex";
    square.style.justifyContent = "flex-start";
    square.style.alignItems = "start";
    square.style.width = "100px";
    square.style.height = "100px";
    square.style.position = "fixed";
    square.style.top = `${event.clientY}px`;
    square.style.left = `${event.clientX}px`;
    square.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    square.style.color = "#FFFFFF";
    square.style.zIndex = "100000000000000000000000000000000000000000000000";
    square.style.border = "2px solid #FF0000";

    square.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    var content = document.getElementById("content");
    makeMoveable(square, {
        onEnd(event) {
            console.log(event);
        }
    });
    content.appendChild(square);
}