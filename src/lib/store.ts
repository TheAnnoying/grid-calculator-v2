import { writable } from "svelte/store";

export let
    currentWidth = writable(0),
    currentHeight = writable(0),
    currentFont = writable({ id: "patred/minecraft-ten-lowercase.ttf", size: "13px" });