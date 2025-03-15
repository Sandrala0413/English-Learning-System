<script>
    import SideMenu from "$lib/sideMenu/SideMenu.svelte";
    import Card from "$lib/card/Card.svelte";

    export let data; // data包含 load 函數返回的所有屬性
    // console.log("顯示的words:", data);

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

<div>
  <h2>新增單字</h2>
  <input bind:value={word} placeholder="單字" />
  <input bind:value={speech} placeholder="詞性" />
  <input bind:value={audio_src} placeholder="發音音檔" />
  <input bind:value={pronounce} placeholder="kk音標" />
  <input bind:value={define} placeholder="單字解釋" />
  <input bind:value={sentence} placeholder="句子"/>
  <button on:click={addWord}>新增</button>
</div>
  

<SideMenu 
/>
