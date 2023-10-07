<script>
	import { currentHeight, currentWidth, value } from "../lib/store";
	import { updateDimensions } from "../lib/updateDimensions";

	let selected = 1;
	function multiply(number) {
		updateDimensions(); // reset the calculation in case it's already multiplied
		currentHeight.set($currentHeight*number);
		currentWidth.set($currentWidth*number);
		selected = number;
	}
</script>
<div id="multipliers" class="{$value ? "" : "disabled"}">
	<button on:click={() => multiply(1)} class="button button-gray {selected === 1 ? "button-selected" : ""}" disabled={!$value}>x1</button>
	<button on:click={() => multiply(3)} class="button button-gray {selected === 3 ? "button-selected" : ""}" disabled={!$value}>x3</button>
	<button on:click={() => multiply(6)} class="button button-gray {selected === 6 ? "button-selected" : ""}" disabled={!$value}>x6</button>
</div>
<style>
	#multipliers {
		display: flex;
		gap: 10px;
	}

	button {
		font-family: "minecraft/five-bold";
		text-shadow: 0 2px 0 black;
	}

	@media (max-width: 640px) {
		button {
			padding: 10px 15px;
		}
	}
</style>