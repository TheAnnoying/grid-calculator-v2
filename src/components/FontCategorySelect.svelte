<script>
    import FontDialog from "./FontDialog.svelte";
    let dialog;

    const fonts = [
        {
            id: "Minecraft",
            fontList: [
                [ "Five", "/fonts/minecraft/five.ttf", "13px", "Minecraft" ],
                [ "Five Bold", "/fonts/minecraft/fivebold.ttf", "13px", "Minecraft" ],
                [ "Seven", "/fonts/minecraft/seven.ttf", "13px", "Minecraft" ],
            ]
        },
        { 
            id: "FloideN",
            fontList: [
                [ "MC Eleven", "https://fontstruct.com/font_archives/download/2308706/", "13px", "FloideN" ],
                [ "MC Nine", "https://fontstruct.com/font_archives/download/2310239/", "13px", "FloideN" ],
                [ "MC Ten Alt", "https://fontstruct.com/font_archives/download/2306021/", "13px", "FloideN" ],
                [ "MC Ten Fire", "https://fontstruct.com/font_archives/download/2299443/", "13px", "FloideN" ],
                [ "MC Terra", "https://fontstruct.com/font_archives/download/2308712/", "13px", "FloideN" ],
                [ "Minecraft Bold Ten", "https://fontstruct.com/font_archives/download/2287385/", "13px", "FloideN" ],
                [ "Minecraft Thick Ten", "https://fontstruct.com/font_archives/download/2296934/", "13px", "FloideN" ],
                [ "Modified MC Ten Drip", "https://fontstruct.com/font_archives/download/2275860/", "13px", "FloideN" ]
            ]
        }
    ];
</script>
<button on:click={() => dialog.showModal()}>What font are you using?</button>
<dialog id="modal" bind:this={dialog}>
    <h1>Select category</h1>
    {#each fonts as category}
        <FontDialog {category}/>
    {/each}
</dialog>