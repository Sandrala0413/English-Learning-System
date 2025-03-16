<script>
    import Card from "$lib/card/Card.svelte";
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
    customCardStyle = "position: relative;"
    customStar = "position: absolute; top: 15px; right: 15px;"
/>