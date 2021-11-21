import Moveable from "moveable";

export function makeResizable(element) {
    const moveable = new Moveable(element, {
        target: element,
        scalable: true,
        throttleScale: 0,
        keepRatio: false,
    });

    const frame = {
        translate: [0, 0],
    };

    console.log("makeResizable");
    
    moveable.on("resizeStart", e => {
        // Set origin if transform-origin use %.
        e.setOrigin(["%", "%"]);

        // If cssSize and offsetSize are different, set cssSize. (no box-sizing)
        const style = window.getComputedStyle(e.target);
        const cssWidth = parseFloat(style.width);
        const cssHeight = parseFloat(style.height);
        e.set([cssWidth, cssHeight]);

        // If a drag event has already occurred, there is no dragStart.
        dragStart && dragStart.set(frame.translate);
    }).on("resize", e => {
        e.target.style.width = `${e.width}px`;
        e.target.style.height = `${e.height}px`;

        // get drag event
        frame.translate = e.drag.beforeTranslate;
        e.target.style.transform
            = `translate(${e.drag.beforeTranslate[0]}px, ${e.drag.beforeTranslate[1]}px)`;
    }).on("resizeEnd", e => {
        console.log("onResizeEnd", e.target, e.isDrag);
    });
}