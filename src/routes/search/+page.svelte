<script lang="ts">
    import Card from "$lib/card/Card.svelte";
    import { onMount, onDestroy } from "svelte"
	import { notFindBox, notFindWord } from "./search.style";
    import Gemini_ans from "$lib/gemini_ans/Gemini_ans.svelte";
    import { browser } from '$app/environment';

    // 定義單字物件的型別
    type Word = {
            word: string;
            speech: string;
            audio_src: string;
            pronounce: string;
            define: string;
            sentence: string;
        };

    export let data: { words: Word[] } = { words: [] };
    let url: URL = new URL(window.location.href);
    let  targetWord = url.searchParams.get('q') || '';
    let word: Word | undefined;

    $: word = data.words?.find((w: Word) => w.word.toLowerCase() == targetWord.toLowerCase());
    
    function search(event: KeyboardEvent){
        if (browser) {
            url = new URL(window.location.href);
            targetWord = url.searchParams.get('q') || '';
        }
    }

    onMount( () => {
        window.addEventListener("keydown", search);
    });
    onDestroy(() => {
        window.removeEventListener("keydown", search);
    });
</script>

{#if word}
    <Card 
        word={word?.word}
        speech={word?.speech}
        audioSrc={word?.audio_src}
        pronounce={word?.pronounce}
        define={word?.define}
        sentence={word?.sentence}
    />
    <!-- <Gemini_ans
        prompt = {`Please generate synonyms, antonyms, and key points related to ${word?.word || "the word"}`}
    /> -->
{:else}
    <div class={notFindBox}>
        <p class={notFindWord}>找不到該單字</p>
        {#each data.words as w}
            <Card 
                word={w.word}
                speech={w.speech}
                audioSrc={w.audio_src}
                pronounce={w.pronounce}
                define={w.define}
                sentence={w.sentence}
            />
        {/each}
    </div>
    
{/if}