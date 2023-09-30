<script>
    import FontDialog from "./FontDialog.svelte";
    import { currentFont } from "../lib/store";
    let dialog;

    const fonts = [
        {
            id: "Minecraft",
            fontList: [
                [ "Five", "7px", "Minecraft" ],
                [ "Five Bold", "13px", "Minecraft" ],
                [ "Seven", "13px", "Minecraft" ],
            ]
        },
        { 
            id: "FloideN",
            fontList: [
                [ "MC Eleven", "13px", "FloideN" ],
                [ "MC Nine", "13px", "FloideN" ],
                [ "MC Ten Alt", "13px", "FloideN" ],
                [ "MC Ten Fire", "13px", "FloideN" ],
                [ "MC Terra", "13px", "FloideN" ],
                [ "Minecraft Bold Ten", "12px", "FloideN" ],
                [ "Minecraft Thick Ten", "13px", "FloideN" ],
                [ "Modified MC Ten Drip", "13px", "FloideN" ]
            ]
        },
        {
            id: "7pxls",
            fontList: [
                [ "Eight", "13px", "7pxls" ],
                [ "Hideaway GUI", "13px", "7pxls" ],
                [ "MC Ten Elongated Fix", "13px", "7pxls" ],
                [ "MC Ten Elongated Middle", "13px", "7pxls" ],
                [ "MC Ten Elongated Reverse", "13px", "7pxls" ],
                [ "Minecraft Ten Round", "13px", "7pxls" ],
                [ "Mojang Pixel", "13px", "7pxls" ],
                [ "Nine", "13px", "7pxls" ],
                [ "Seven Round", "13px", "7pxls" ],
                [ "Seven", "13px", "7pxls" ]
            ]
        },
        {
            id: "Patred",
            fontList: [
                [ "Minecraft Ten Lowercase", "13px", "Patred" ]
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