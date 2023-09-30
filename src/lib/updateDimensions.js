import { currentWidth, currentHeight, currentFont, canvas, value } from "./store";
import { get } from "svelte/store";

export function updateDimensions() {
    if([0, null].includes(get(value).length)) {
        currentWidth.set(1);
        currentHeight.set(1);
        return;
    }

    const context = get(canvas).getContext("2d");
    context.font = `${get(currentFont).size} '${get(currentFont).id}'`;

    const measure = context.measureText(get(value));

    currentHeight.set(Math.round(measure.actualBoundingBoxAscent));
    currentWidth.set(Math.round(measure.width));
}