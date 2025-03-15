<script>
    import { onMount } from "svelte";
    // let voc = "";
    export let voc;
    // console.log("載入的1", voc);

    // onMount(async () => {
    //     const res = await fetch('/api/words');
    //     const data = await res.json();
    //     voc = data.words;  // 將資料存儲在 `words` 中
    // });
</script>

<style>
    .listBox{
        position: fixed;   /* 固定位置 */
        right: 5%;          /* 距離右側 0px */
        top: 20%;            
        width: 200px;      /* 根據需要調整寬度 */
        background-color: rgba(245, 245, 245, 0.7); /* 可選，為了顯示區域 */
        box-shadow: 10px 0px 5px rgba(0, 0, 0, 0.1); /* 可選，增加陰影效果 */
        border-radius: 10px;
        padding: 10px;     /* 可選，內邊距 */
        overflow-y: auto;  /* 如果內容過多，可以垂直滾動 */
        gap: 15px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        height: 60%;
    }

    .listBox::-webkit-scrollbar {
        width: 0px;  /*隱藏滾動條*/
        background: transparent;  /* 背景設置為透明 */
    }

    p{
        font-weight: 500;
        color: rgba(0, 0, 0, 0.848);
        font-size: 20px;
    }
</style>

<div class="listBox">
    {#each voc.words as w}
        <p>{w.word}</p>
    {/each}
</div>
