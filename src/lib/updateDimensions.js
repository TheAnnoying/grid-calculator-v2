import { currentWidth, currentHeight, currentFont, canvas, value } from "./store";
import { get } from "svelte/store";

export function updateDimensions() {
	const inputValue = get(value);

	const canvasElement = get(canvas);
	const context = canvasElement.getContext("2d");

	context.fillStyle = "black";
	context.fillRect(0, 0, canvasElement.width, canvasElement.height);

	if(inputValue?.trim() === "" || !inputValue) {
		currentWidth.set(1);
		currentHeight.set(1);
		return;
	}

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
		if (pixel[0] === 255) {
			minX = Math.min(minX, x);
			maxX = Math.max(maxX, x);
			minY = Math.min(minY, y);
			maxY = Math.max(maxY, y);
		}
	}

	currentHeight.set(Math.round((maxY-minY)/multiplyFactor));
	currentWidth.set(Math.round((maxX-minX)/multiplyFactor));

	const lineLength = multiplyFactor;
	context.lineWidth = 5;

	let currentX = minX;
	let currentY = maxY+2*multiplyFactor;

	for (let i = 0; i < get(currentWidth); i++) {
		context.beginPath();
		context.moveTo(currentX+lineLength*i, currentY);
		context.strokeStyle = i % 2 === 0 ? "white" : "#8B8000";
		context.lineTo(currentX+lineLength*i+lineLength, currentY);
		context.stroke();
	}

	currentX = maxX+2*multiplyFactor;
	currentY = maxY;

	for (let i = 0; i < get(currentHeight); i++) {
		context.beginPath();
		context.moveTo(currentX, currentY-lineLength*i);
		context.strokeStyle = i % 2 === 0 ? "white" : "#8B8000";
		context.lineTo(currentX, currentY-lineLength*i-lineLength);
		context.stroke();
	}
}