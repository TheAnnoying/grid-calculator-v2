<script>
    import { currentWidth, currentHeight, currentFont } from "../lib/store";
</script>
<div id="container">
    <div class="data">
        <p>Dimensions</p>
        <span>{$currentWidth - 1} x {$currentHeight - 1}</span>
    </div>
    <div class="data">
        <p>Current Font</p>
        <span>{$currentFont.name}</span>
    </div>
</div>
<style>
    #container {
        text-align: center;
        display: flex;
        flex-direction: row;
        gap: 50px;
        margin: 30px;
    }

    .data {
        padding: 15px;
        width: 400px;
        outline: 5px solid #414351;
        background-color: #16202d;
        display: flex;
        flex-direction: column;
    }
    p {
        color: #a2a4ad;
        font-size: 1.3rem;
    }

    span {
        font-size: 2rem;
        font-family: "patred/minecraft-ten-lowercase";
        text-shadow: 0 4px 0 black;
        margin: auto 0;
    }
</style>