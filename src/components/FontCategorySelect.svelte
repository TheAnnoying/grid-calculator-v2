<script>
    import FontDialog from "./FontDialog.svelte";
    import { currentFont } from "../lib/store";
    let dialog;

    const fonts = [
        {
            id: "Minecraft",
            fontList: [
                [ "Five", 7, "Minecraft" ],
                [ "Five Bold", 13, "Minecraft" ],
                [ "Seven", 13, "Minecraft" ],
            ]
        },
        { 
            id: "FloideN",
            fontList: [
                [ "MC Eleven", 13, "FloideN" ],
                [ "MC Nine", 13, "FloideN" ],
                [ "MC Ten Alt", 13, "FloideN" ],
                [ "MC Ten Fire", 13, "FloideN" ],
                [ "MC Terra", 13, "FloideN" ],
                [ "Minecraft Bold Ten", 13, "FloideN" ],
                [ "Minecraft Thick Ten", 13, "FloideN" ],
                [ "Modified MC Ten Drip", 13, "FloideN" ]
            ]
        },
        {
            id: "7pxls",
            fontList: [
                [ "Eight", 13, "7pxls" ],
                [ "Hideaway GUI", 13, "7pxls" ],
                [ "MC Ten Elongated Fix", 13, "7pxls" ],
                [ "MC Ten Elongated Middle", 13, "7pxls" ],
                [ "MC Ten Elongated Reverse", 13, "7pxls" ],
                [ "Minecraft Ten Round", 13, "7pxls" ],
                [ "Mojang Pixel", 13, "7pxls" ],
                [ "Nine", 13, "7pxls" ],
                [ "Seven Round", 13, "7pxls" ],
                [ "Seven", 13, "7pxls" ]
            ]
        },
        {
            id: "Patred",
            fontList: [
                [ "Minecraft Ten Lowercase", 13, "Patred" ]
            ]
        }
    ];
</script>
<button on:click={() => dialog.showModal()}>{$currentFont.name ?? "Select font"}</button>
<dialog id="modal" bind:this={dialog}>
    <h1>Select category</h1>
    {#each fonts as category}
        <FontDialog {category}/>
    {/each}
</dialog>