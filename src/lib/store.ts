import { writable } from "svelte/store";

export let
	currentWidth = writable(1),
	currentHeight = writable(1),
	selectedMultiplier = writable(1),
	currentFont = writable({ id: null, size: "13px", name: null }),
	canvas = writable(null),
	value = writable(null);