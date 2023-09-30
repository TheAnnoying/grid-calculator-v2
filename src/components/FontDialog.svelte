<script>
    import { currentFont } from "../lib/store";
    import { updateDimensions } from "../lib/updateDimensions";
    export let category;

    let dialog;
    const clean = (input) => input.toLowerCase().replace(/ +/g, "-");
</script>
<button on:click={() => dialog.showModal()}>{category.id}</button>
<dialog bind:this={dialog}>
    {#each category.fontList as font}
        <button style="font-family: '{clean(font[2])}/{clean(font[0])}'" on:click={() => { ($currentFont = { id: `${clean(font[2])}/${clean(font[0])}`, size: font[1], name: `${font[2]} - ${font[0]}` }); (updateDimensions())}}>{font[0]}</button>
        {@html `
        <style>
            @font-face {
                font-family: "${clean(font[2])}/${clean(font[0])}";
                src: url("/fonts/${clean(font[2])}/${clean(font[0])}.ttf");
            }
        </style>
        `}
    {/each}
</dialog>