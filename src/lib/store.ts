import { writable } from "svelte/store";

export let
	currentWidth = writable(1),
	currentHeight = writable(1),
	selectedMultiplier = writable(1),
	currentFont = writable({ id: "patred/minecraft-ten-lowercase", size: "13px", name: "Patred - Minecraft Ten Lowercase" }),
	canvas = writable(null),
	value = writable(null);