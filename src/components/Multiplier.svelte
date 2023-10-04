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
    <button on:click={() => multiply(1)} class="{selected === 1 ? "button-selected" : ""}">x1</button>
    <button on:click={() => multiply(3)} class="{selected === 3 ? "button-selected" : ""}">x3</button>
    <button on:click={() => multiply(6)} class="{selected === 6 ? "button-selected" : ""}">x6</button>
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