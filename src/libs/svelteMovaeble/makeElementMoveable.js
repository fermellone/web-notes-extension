import Moveable from "moveable";

export function makeMoveable(element, eventHandlers = {
    onStart: null,
    onEnd: null,
    onDrag: null
}) {
    const moveable = new Moveable(element, {
        target: element,
        draggable: true,
        throttleDrag: 0,
        throttleDragRotate: 0,
    });

    const frame = {
        translate: [0, 0],
    };
    
    moveable.on("dragStart", e => {
        e.set(frame.translate);
        if(eventHandlers.onStart) eventHandlers.onStart(e);
    }).on("drag", e => {
        frame.translate = e.beforeTranslate;
        e.target.style.transform
            = `translate(${e.beforeTranslate[0]}px, ${e.beforeTranslate[1]}px)`;
        
        if(eventHandlers.onDrag) eventHandlers.onDrag(e);
    }).on("dragEnd", e => {
        if(eventHandlers.onEnd) eventHandlers.onEnd(e);
    });

}