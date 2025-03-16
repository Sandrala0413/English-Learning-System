<script>
    import {card, speechCss,defineCss, defineBox, buttonBox, inputBox, Btn} from "./Card_quiz.style";

    export let userInput = "";
    export let speech = "詞性";
    export let define = "解釋";
    export let checkANS;
    export let nextQ;

</script>
    
<div class={card}>
    <input class={inputBox} type = "text" bind:value={userInput} />
    <p class={speechCss}>{speech}</p>
    <p class={defineBox}>解釋</p>
    <p class={defineCss}>{define}</p>
    <div class={buttonBox}>
        <button on:click={checkANS} class={Btn}>確定</button>
        <button on:click={nextQ} class={Btn}>下一題</button>
    </div>
</div>