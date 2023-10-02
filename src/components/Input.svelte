<script>
    import { value, canvas } from "../lib/store";
    import { updateDimensions } from "../lib/updateDimensions";
</script>
<input id="input" type="text" maxlength="55" spellcheck="false" placeholder="Enter text here" on:keyup={() => updateDimensions()} bind:value={$value}/>
<canvas id="canvas" bind:this={$canvas} height="400" width="1500"></canvas>
<style>
    #canvas {
        display: none;
        font-smooth: never;
        -webkit-font-smoothing: none;
    }
</style>