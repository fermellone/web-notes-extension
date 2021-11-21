// classes
import { classes } from '../classes/boxes'


// svelteMoveable
import { makeMoveable } from '../../libs/svelteMovaeble/makeElementMoveable';
// import { makeResizable } from '../../libs/svelteMovaeble/makeElementResizable';

export function addSquare(event) {

    var square = document.createElement("div");

    square.style.top = `${event.clientY}px`;
    square.style.left = `${event.clientX}px`;
    square.classList.add(classes.square);

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