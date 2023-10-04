<script>
    import { value, canvas } from "../lib/store";
    import { updateDimensions } from "../lib/updateDimensions";
</script>
<input id="input" type="text" maxlength="55" spellcheck="false" placeholder="Enter text here" on:keyup={() => updateDimensions()} bind:value={$value}/>
<canvas id="canvas" bind:this={$canvas} height="400" width="1500"></canvas>
<style>
    input {
        border-image-source: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImS3GsQEAMAjDMKcfNfx/m1nQpKjMVCBpv5wH5J4FxZUGMCo62UEAAAAASUVORK5CYII=");
        border-image-slice: 1 1 1 1 fill;
        border-image-repeat: stretch stretch;
        border-image-width: 5px 5px 5px 5px;
        image-rendering: pixelated;
        font-size: 1.5rem;
        padding: 5px 25px;
        border-radius: 0;
        background-color: transparent;
        margin: 5px;
        filter: drop-shadow(0 5px black);
    }

    input:focus-visible {
        background-color: #323231;
        outline: 5px solid white;
    }

    @media (max-width: 640px) {
        input {
            font-size: 1rem;
        }
    }
    
    #canvas {
        display: none;
        font-smooth: never;
        -webkit-font-smoothing: none;
    }
</style>