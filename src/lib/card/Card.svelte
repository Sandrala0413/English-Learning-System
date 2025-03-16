<script>
    import {card, wordCss, speechCss, pronounceBox, pronounceCss, defineCss, sentenceCss, defineBox} from "./Card.style";

    export let word = "單字";
    export let speech = "詞性";
    export let audioSrc = "";
    export let pronounce = "kk音標";
    export let define = "單字解釋";
    export let sentence = "句子";
    export let customCardStyle = "";
    export let customDefSentBox = "";
    export let customVocBox = "";

    function playAudio() {
        let audio = new Audio(audioSrc);
        audio.play();
    }
</script>

<div class={card} style={customCardStyle}>
    <div style={customVocBox}>
        <p class={wordCss}>{word}</p>
        <p class={speechCss}>{speech}</p>
        <div class={pronounceBox}>
            <i class="fa-solid fa-volume-high" style="color: #859fcc;" on:click={playAudio}></i>
            <p class={pronounceCss}>{pronounce}</p>
        </div>
    </div>
    <div style={customDefSentBox}>
        <p class={defineBox}>解釋</p>
        <p class={defineCss}>{define}</p>
        <p class={defineBox}>例句</p>
        <p class={sentenceCss}>{sentence}</p>
    </div>
        
</div>