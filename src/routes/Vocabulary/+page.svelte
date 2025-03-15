<script>
    import SideMenu from "$lib/sideMenu/SideMenu.svelte";
    import { addBox, inputBox, addBtn, vocListBox, card } from "./Voabulary.style.js";
    import Card from "$lib/card/Card.svelte";
    import RightList from "./RightList.svelte";

    export let data; // 注意：這裡使用 'data'，它包含 load 函數返回的所有屬性

    let word = "";
    let speech = "";
    let audio_src = "";
    let pronounce = "";
    let define = "";
    let sentence = "";
  
    async function addWord() {
      const capital = word.charAt(0).toUpperCase();
      await fetch("/api/words", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word, speech, audio_src, pronounce, define, sentence, capital})
      });
  
      location.reload(); // 重新載入頁面
    }
</script>


<div class={vocListBox}>
  <div class={addBox}>
    <!-- <h2>新增單字</h2> -->
    <input class={inputBox} bind:value={word} placeholder="單字" />
    <input class={inputBox} bind:value={speech} placeholder="詞性" />
    <!-- <input class={inputBox} bind:value={audio_src} placeholder="發音音檔" /> -->
    <input class={inputBox} bind:value={pronounce} placeholder="kk音標" />
    <input class={inputBox} bind:value={define} placeholder="單字解釋" />
    <!-- <input class={inputBox} bind:value={sentence} placeholder="句子"/> -->
    <button on:click={addWord} class={addBtn}>新增</button>
  </div>

{#each data.words as w}
  <Card
    word = {w.word}
    speech = {w.speech}
    audioSrc = {w.audio_src}
    pronounce = {w.pronounce}
    define = {w.define}
    sentence = {w.sentence}
    customCardStyle = "margin: 0; flex-direction: row; gap: 100px; width: 65vw;"
    customVocBox = "width: 120px;"
  />
{/each}


</div>

<SideMenu />

<RightList 
  voc = {data}
/>



