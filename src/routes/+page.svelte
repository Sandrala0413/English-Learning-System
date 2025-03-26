<script>
// @ts-nocheck

    import Card from "$lib/card/Card.svelte";
    import Qrcode from "$lib/qrcode/Qrcode.svelte"
	// import { Html5QrcodeResultFactory } from "html5-qrcode/esm/core.js";
    // import Qrcode_scanner from "$lib/qrcode_scanner/Qrcode_scanner.svelte"

    export let data;
    const randomIndex = Math.floor(Math.random() * data.words.length);
    const word1 = data.words[Math.floor(Math.random() * data.words.length)];
    const word2 = data.words[Math.floor(Math.random() * data.words.length)];
    const word3 = data.words[Math.floor(Math.random() * data.words.length)];

    let qrcodeClick = false;
    function qrcodeGenerate(){
        qrcodeClick = !qrcodeClick;
    }
</script>


<div class="container">
    <Card 
        word = {word1.word}
        speech = {word1.speech}
        audioSrc = {word1.audio_src}
        pronounce = {word1.pronounce}
        define = {word1.define}
        sentence = {word1.sentence}
        customCardStyle = "height: 60vh;"
        wordId = {word1.id}
    />

    <Card 
        word = {word2.word}
        speech = {word2.speech}
        audioSrc = {word2.audio_src}
        pronounce = {word2.pronounce}
        define = {word2.define}
        sentence = {word2.sentence}
        customCardStyle = "height: 60vh;"
        wordId = {word2.id}
    />

    <Card 
        word = {word3.word}
        speech = {word3.speech}
        audioSrc = {word3.audio_src}
        pronounce = {word3.pronounce}
        define = {word3.define}
        sentence = {word3.sentence}
        customCardStyle = "height: 60vh;"
        wordId = {word3.id}
    />

</div>

<div class="qrcode_container">
{#if qrcodeClick}
    <Qrcode/>
    <button on:click={qrcodeGenerate} class="btn">Close</button>
{:else}
    <button on:click={qrcodeGenerate} class="btn">Generate Qrcode</button>
{/if}
</div>



<!-- <Qrcode_scanner/> -->

<style>
    .container{
        display: flex;
        flex-direction: row;
        align-items: center;
        /* margin: 5px; */
        gap: 5px;
    }

    .qrcode_container{
        display: flex;
        margin: auto;
        padding: 1rem;
        justify-content: center;
    }

    .btn{
        background-color: azure;
        border-radius: 5px;
        padding: 1rem;
    }

    @media(max-width: 900px){
        .container{
            flex-direction: column;
        }
    }
</style>