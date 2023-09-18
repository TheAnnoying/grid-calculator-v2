<script>
    import { currentWidth, currentHeight, currentFont } from "../lib/store";
    let input, canvas;

    function updateFont() {
        if(input.length === 0) {
            $currentWidth = 0;
            $currentHeight = 0;
            return;
        }

        const context = canvas.getContext("2d");
        context.font = `${$currentFont.size} "${$currentFont.id}"`;

        const measure = context.measureText(input);

        $currentHeight = measure.actualBoundingBoxAscent - 1;
        $currentWidth = Math.floor(measure.width) - 1;
    }
</script>
<input id="input" type="text" maxlength="55" spellcheck="false" placeholder="Enter text here" on:keyup={updateFont} bind:value={input}/>
<canvas id="canvas" bind:this={canvas}></canvas>