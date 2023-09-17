<script>
    import { currentFont } from "../lib/store";
    export let category;

    let dialog;
    const clean = (input) => input.toLowerCase().replace(/ +/g, "_");
    //somehow update the calculation
</script>
<button on:click={() => dialog.showModal()}>{category.id}</button>
<dialog bind:this={dialog}>
    {#each category.fontList as font}
        <button style="font-family: '{clean(font[3])}/{clean(font[0])}'" on:click={() => $currentFont = { id: `${clean(font[3])}/${clean(font[0])}`, size: font[2] }}>{font[0]}</button>
        {@html `
        <style>
            @font-face {
                font-family: "${clean(font[3])}/${clean(font[0])}";
                src: url("./fonts/${clean(font[3])}/${clean(font[0])}.ttf");
            }
        </style>`}
    {/each}
</dialog>