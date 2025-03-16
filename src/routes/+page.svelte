<script>
    import Card from "$lib/card/Card.svelte";
    import Qrcode from "$lib/qrcode/Qrcode.svelte"
    // import Qrcode_scanner from "$lib/qrcode_scanner/Qrcode_scanner.svelte"

    export let data;
    const randomIndex = Math.floor(Math.random() * data.words.length);
    const word = data.words[randomIndex];
</script>

<Card 
    word = {word.word}
    speech = {word.speech}
    audioSrc = {word.audio_src}
    pronounce = {word.pronounce}
    define = {word.define}
    sentence = {word.sentence}
/>

<div>
    <Qrcode/>
</div>

<!-- <Qrcode_scanner/> -->