<script>
    import { currentHeight, currentWidth } from "../lib/store";
    import { updateDimensions } from "../lib/updateDimensions";
    function multiply(number) {
        updateDimensions(); // reset the calculation in case it's already multiplied
        currentHeight.set($currentHeight*number);
        currentWidth.set($currentWidth*number);
        selected = number;
    }
</script>
<div id="multipliers">
    <button on:click={() => multiply(1)}>x1</button>
    <button on:click={() => multiply(3)}>x3</button>
    <button on:click={() => multiply(6)}>x6</button>
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
</style>