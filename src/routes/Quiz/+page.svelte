<script>
    import Card_quiz from "$lib/card_quiz/Card_quiz.svelte";
    import Card from "$lib/card/Card.svelte";
    import {correctImg, quizContainer} from "./Quiz.style"

    export let data;
    let randomIndex = Math.floor(Math.random() * data.words.length);
    let word = data.words[randomIndex];

    export let userInput = "";
    let isCorrect = 2;

    function checkAns(){
        if(userInput.trim().toLowerCase() === word.word.toLowerCase()){
            isCorrect = 1;
        }
        else{
            isCorrect = 0;
        }
    }

    function nextQuestion(){
        // location.reload(); // 重新載入頁面

        randomIndex = Math.floor(Math.random() * data.words.length);
        word = data.words[randomIndex]; // 換下一個單字
        userInput = "";
        isCorrect = 2; // 重置狀態
    }
</script>

<div class={quizContainer}>
    <Card_quiz 
        bind:userInput={userInput}
        speech = {word.speech}
        define = {word.define}
        checkANS = {checkAns}
        nextQ = {nextQuestion}
    />
    {#if isCorrect == 1}
    <div class={correctImg}>
        <!-- <p>correct</p> -->
        <img src="https://i.imgur.com/XQfvEEb.png" alt="correctAns">
    </div>

{:else if isCorrect == 0}
    <Card 
        word = {word.word}
        speech = {word.speech}
        audioSrc = {word.audio_src}
        pronounce = {word.pronounce}
        define = {word.define}
        sentence = {word.sentence}
    />
{/if}
</div>



