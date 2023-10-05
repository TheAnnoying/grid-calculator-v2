import { currentWidth, currentHeight, currentFont, canvas, value } from "./store";
import { get } from "svelte/store";

export function updateDimensions() {
	const inputValue = get(value);
	if(inputValue?.trim() === "" || !inputValue) {
		currentWidth.set(1);
		currentHeight.set(1);
		return;
	}

	const canvasElement = get(canvas);
	const context = canvasElement.getContext("2d");

	context.fillStyle = "black";
	context.fillRect(0, 0, canvasElement.width, canvasElement.height);

	const multiplyFactor = 8;
	context.font = `${get(currentFont).size*multiplyFactor}px '${get(currentFont).id}'`;
	context.textBaseline = "middle";
	context.textAlign = "center";

	context.fillStyle = "red";
	context.fillText(inputValue, canvasElement.width/2, canvasElement.height/2);

	const imgData = context.getImageData(0, 0, canvasElement.width, canvasElement.height).data;

	let minX = Infinity, minY = Infinity;
	let maxX = -Infinity, maxY = -Infinity;
	for (let y = 0; y < canvasElement.height; y++) for (let x = 0; x < canvasElement.width; x++) {
		const index = y*(canvasElement.width*4)+x*4;
		const pixel = imgData.slice(index, index + 4);
		if (pixel[0] !== 0) {
			minX = Math.min(minX, x);
			maxX = Math.max(maxX, x);
			minY = Math.min(minY, y);
			maxY = Math.max(maxY, y);
		}
	}

	currentHeight.set(Math.round((maxY-minY)/multiplyFactor));
	currentWidth.set(Math.round((maxX-minX)/multiplyFactor));
}