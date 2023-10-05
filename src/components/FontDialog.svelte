<script>
	import { currentFont } from "../lib/store";
	import { updateDimensions } from "../lib/updateDimensions";
	export let category;

	let dialog;
	const clean = (input) => input.toLowerCase().replace(/ +/g, "-");
	function selectFont(font) {
		$currentFont = { id: `${clean(font[2])}/${clean(font[0])}`, size: font[1], name: `${font[2]} - ${font[0]}` };
		updateDimensions();

		dialog.close();
	}
</script>
<button on:click={() => dialog.showModal()}>{category.id}</button>
<dialog bind:this={dialog}>
	<div id="font-grid">
		{#each category.fontList as font}
			<div class="data">
				<p>{font[0]}</p>
				<span style="font-family: '{clean(font[2])}/{clean(font[0])}'; text-transform: uppercase;">The quick brown fox jumps over the lazy dog</span>
				<button class="button-gray" on:click={() => selectFont(font)}>USE</button>
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
</dialog>
<style>
	dialog {
		max-height: 80vh;
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
</style>