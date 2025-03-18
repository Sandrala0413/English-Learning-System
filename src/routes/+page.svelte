<script>
    import Card from "$lib/card/Card.svelte";
    import Qrcode from "$lib/qrcode/Qrcode.svelte"
    import Qrcode_scanner from "$lib/qrcode_scanner/Qrcode_scanner.svelte"

    export let data;
    const randomIndex = Math.floor(Math.random() * data.words.length);
    const word = data.words[randomIndex];
</script>
<div class="container">
    <Card 
        word = {word.word}
        speech = {word.speech}
        audioSrc = {word.audio_src}
        pronounce = {word.pronounce}
        define = {word.define}
        sentence = {word.sentence}
        customCardStyle = "position: relative;"
        customStar = "position: absolute; top: 15px; right: 15px;"
    />

    <Qrcode/>
</div>

<!-- <Qrcode_scanner/> -->

<style>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
</style>