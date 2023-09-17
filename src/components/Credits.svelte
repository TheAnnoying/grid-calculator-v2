<script>
    let dialog;
</script>
<button on:click={() => dialog.showModal()}>Credits</button>
<dialog bind:this={dialog}>
    <div>
        <h1>Poorly built by:</h1>
        <a href="https://theannoying.dev" target="_blank">TheAnnoying</a>
        <p>main implementation</p>
    </div>
    <div>
        <h1>A lot of help from:</h1>
        <a href="https://ewanhowell.com" target="_blank">Ewan Howell</a>
        <p>help with old grid calculator</p>
        <a href="https://xylight.dev" target="_blank">Xylight</a>
        <p>helped with svelte code</p>
    </div>
    <div>
        <h1>Feedback over at:</h1>
        <a href="https://ewanhowell.com" target="_blank">Minecraft Titles</a>
        <p>lovely community, i like <img src="thumbsup.png" alt="Thumbsup emoji" style="display: inline-block;" width="20" /></p>
    </div>
</dialog>
<style>
    div {
        text-align: center;
        padding-bottom: 20px;
    }
    h1 {
        font-family: "minecraft/five-bold";
        text-shadow: 0 5px 0 black;
        @apply text-3xl;
    }
    a {
        font-family: "minecraft/seven";
        font-weight: bolder;
        @apply text-xl;
    }
    p {
        color: gray;
        font-family: "minecraft/seven";
        font-style: italic;
    }
</style>