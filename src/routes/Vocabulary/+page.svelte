<script>
    import SideMenu from "$lib/sideMenu/SideMenu.svelte";
    import { addBox, inputBox, addBtn, vocListBox } from "./Voabulary.style.js";
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

      const response = await fetch("/api/words", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word, speech, audio_src, pronounce, define, sentence, capital})
      });
      
      if(response.ok){
        await updateAudio();
        location.reload(); // 重新載入頁面
      }
      else{
        console.error("❌ 新增單字失敗");
        alert("新增失敗，請檢查輸入");
      }
      
    }

    let filterWords = data.words.filter((/** @type {{ capital: string; }} */ w) => w.capital === "A");
    /**
	 * @param {any} letter
	 */
    function letterFilter(letter) {
      filterWords = data.words.filter((/** @type {{ capital: any; }} */ w) => w.capital === letter);
    }

    $: filterWords;

    async function updateAudio() {
      const res = await fetch("/api/scrape");
      alert(await res.text());
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
    <input class={inputBox} bind:value={sentence} placeholder="句子"/>
    <button on:click={addWord} class={addBtn}>新增</button>
  </div>

{#each filterWords.length > 0 ? filterWords : data.words as w}
  <Card
    word = {w.word}
    speech = {w.speech}
    audioSrc = {w.audio_src}
    pronounce = {w.pronounce}
    define = {w.define}
    sentence = {w.sentence}
    customCardStyle = "margin: 0; flex-direction: row; align-items: center; "
    customVocBox = "min-width: 35%;word-wrap: break-word;"
    wordId = {w.id}
  />
{/each}


</div>

<SideMenu 
  letterFilter = {letterFilter}
/>

<RightList 
  voc = {filterWords}
/>



