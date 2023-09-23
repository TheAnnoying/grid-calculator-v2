<script>
    import FontDialog from "./FontDialog.svelte";
    let dialog;

    const fonts = [
        {
            id: "Minecraft",
            fontList: [
                [ "Five", "13px", "Minecraft" ],
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