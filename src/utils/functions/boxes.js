// classes
import { classes } from '../classes/boxes'


// svelteMoveable
import { makeMoveable } from '../../libs/svelteMovaeble/makeElementMoveable';
// import { makeResizable } from '../../libs/svelteMovaeble/makeElementResizable';

export function addSquare(event) {

    var square = document.createElement("div");

    // Styling the element
    // square.style.display = "flex";
    // square.style.justifyContent = "flex-start";
    // square.style.alignItems = "start";
    // square.style.width = "100px";
    // square.style.height = "100px";
    // square.style.position = "fixed";
    square.style.top = `${event.clientY}px`;
    square.style.left = `${event.clientX}px`;
    square.classList.add(classes.square);
    // square.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    // square.style.color = "#FFFFFF";
    // square.style.zIndex = "100000000000000000000000000000000000000000000000";
    // square.style.border = "2px solid #FF0000";

    square.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    makeMoveable(square, {
        onEnd(event) {
            console.log(event);
        }
    });

    // makeResizable(event);

    document.body.append(square);
}