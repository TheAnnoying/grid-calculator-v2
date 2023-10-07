<script>
	import { currentFont, currentHeight, currentWidth, selectedMultiplier } from "../lib/store";
	import { updateDimensions } from "../lib/updateDimensions";
	export let category;

	let dialog;
	const clean = (input) => input.toLowerCase().replace(/ +/g, "-");
	function selectFont(font) {
		$currentFont = { id: `${clean(font[2])}/${clean(font[0])}`, size: font[1], name: `${font[2]} - ${font[0]}` };
		updateDimensions();

		currentHeight.set($currentHeight*$selectedMultiplier);
		currentWidth.set($currentWidth*$selectedMultiplier);

		dialog.close();
	}
</script>
<button class="button" on:click={() => dialog.showModal()}>{category.id}</button>
<dialog bind:this={dialog}>
	<button class="dialog-close" on:click={() => dialog.close()}><img src="/x.svg" alt="X Icon" /></button>
	<div id="scroll">
		<div id="font-grid">
			{#each category.fontList as font}
				<div class="data">
					<p>{font[0]}</p>
					<span style="font-family: '{clean(font[2])}/{clean(font[0])}'; text-transform: uppercase;">The quick brown fox jumps over the lazy dog</span>
					<button class="button button-gray" on:click={() => selectFont(font)}>USE</button>
				</div>
				{@html `
					<style>
						@font-face {
							font-family: "${clean(font[2])}/${clean(font[0])}";
							src: url("/fonts/${clean(font[2])}/${clean(font[0])}.ttf");
						}
					</style>
				`}
			{/each}
		</div>
	</div>
</dialog>
<style>
	dialog {
		max-height: 80vh;
	}

	#scroll {
		max-height: 80vh;
		overflow: auto;
	}

	#font-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	
	.data {
		margin: 20px;
	}

	.data span {
		font-size: 1.5rem;
	}

	@media (max-width: 640px) {
		#font-grid {
			grid-template-columns: 1fr;
		}
	}
</style>