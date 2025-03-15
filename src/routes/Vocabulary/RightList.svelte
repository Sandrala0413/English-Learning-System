<script>
    import { onMount } from "svelte";
    // let voc = "";
    export let voc;

    // onMount(async () => {
    //     const res = await fetch('/api/words');
    //     const data = await res.json();
    //     voc = data.words;  // 將資料存儲在 `words` 中
    // });
</script>

<style>
    .listBox{
        display: flex;
        position: fixed;
        right: 0;
        flex-direction: column;
    }
</style>

<div class="listBox">
    {#each voc as w}
        <p>{w.word}</p>
    {/each}
</div>
