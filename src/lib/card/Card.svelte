<script>
    import { onMount } from "svelte";
    import {card, wordCss, speechCss, pronounceBox, pronounceCss, defineCss, 
        sentenceCss, defineBox, starIcon} from "./Card.style";
    import { userId, favoriteWords } from "$lib/store";
    // import { get } from "svelte/store";

    export let word = "單字";
    export let speech = "詞性";
    export let audioSrc = "";
    export let pronounce = "kk音標";
    export let define = "單字解釋";
    export let sentence = "句子";
    export let customCardStyle = "";
    export let customDefSentBox = "";
    export let customVocBox = "";
    export let customStar = "";

    function playAudio() {
        let audio = new Audio(audioSrc);
        audio.play();
    }

   

    // let userId;

    /**
	 * @type {any}
	 */
     export let wordId;
    let isFavorite = false;
    $: isFavorite = $favoriteWords.has(wordId);

    let starClick = false;
    function toggleFavorite(){
        starClick = !starClick;
        favoriteWords.update((favs) => {
            const newFavs = new Set(favs);
            if (newFavs.has(wordId)) {
                newFavs.delete(wordId); // 如果已經收藏，則移除
            } else {
                newFavs.add(wordId); // 如果未收藏，則添加
            }
            console.log(newFavs);
            return newFavs; // 返回新的 Set
        });
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
    <!-- <div class={starIcon} style={customStar}>
        {#if starClick}
            <i class="fa-solid fa-star" on:click={toggleFavorite}></i>
        {:else}
            <i class="fa-regular fa-star" on:click={toggleFavorite}></i>
        {/if}
    </div> -->
</div>