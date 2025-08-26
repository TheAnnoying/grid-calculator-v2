<script>
	import FontDialog from "./FontDialog.svelte";
	let dialog = $state();

	const fonts = [
		{
			id: "FloideN",
			fontList: [
				[ "MC Eleven", 14, "FloideN" ],
				[ "MC Nine", 9, "FloideN" ],
				[ "MC Ten Alt", 9, "FloideN" ],
				[ "MC Ten Fire", 16, "FloideN" ],
				[ "MC Terra", 11, "FloideN" ],
				[ "Minecraft Bold Ten", 12, "FloideN" ],
				[ "Minecraft Thick Ten", 8, "FloideN" ],
				[ "Modified MC Ten Drip", 14, "FloideN" ]
			]
		},
		{
			id: "7pxls",
			fontList: [
				[ "Eight", 8, "7pxls" ],
				[ "Hideaway GUI", 8, "7pxls" ],
				[ "MC Ten Elongated Fix", 14, "7pxls" ],
				[ "Mojang Pixel", 8, "7pxls" ],
				[ "Nine", 9, "7pxls" ],
				[ "Seven Round", 7, "7pxls" ],
				[ "Seven", 7, "7pxls" ]
			]
		},
		{
			id: "Patred",
			fontList: [
				[ "Minecraft Ten Lowercase", 13, "Patred" ],
				[ "Dungeons v2 AltLw", 13, "Patred" ],
				[ "MC Ten Drip", 13, "Patred" ],
				[ "MC Ten Round", 13, "Patred" ],
				[ "MC Ten Round Drip", 15, "Patred" ],
				[ "Minecraft Ten Serif", 10, "Patred" ],
				[ "MC Ten (Alt lowercase)", 10, "Patred" ]
			]
		},
		{
			id: "pikelz",
			fontList: [
				[ "Vinearth Sans", 11, "pikelz" ]
			]
		},
		{
			id: "DMart",
			fontList: [
				[ "Minecrafter Legends", 18, "DMart" ]
			]
		}
	];
</script>
<button class="button" onclick={() => dialog.showModal()}>Select Font</button>
<dialog id="modal" bind:this={dialog}>
	<button class="dialog-close" onclick={() => dialog.close()}><img src="/x.svg" alt="X Icon" /></button>
	<h1>Select category</h1>
	<div>
		{#each fonts as category}
			<FontDialog {category} oldDialog={dialog}/>
		{/each}
	</div>
</dialog>
<style>
	button.button {
		width: 100%;
	}

	div {
		display: grid;
	}
</style>
