<script>
	import { currentWidth, currentHeight, currentFont } from "../lib/store";
</script>
<div id="container">
	<div class="data">
		<p>Dimensions</p>
		<span>{$currentWidth - 1} x {$currentHeight - 1}</span>
	</div>
	<div class="data">
		<p>Current Font</p>
		<span>{$currentFont.name ?? "None"}</span>
	</div>
</div>
<style>
	#container {
		text-align: center;
		display: flex;
		flex-direction: row;
		gap: 50px;
		margin: 30px;
	}

	@media (max-width: 640px) {
		#container {
			gap: 15px;
		}
	}
</style>