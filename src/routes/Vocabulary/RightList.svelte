<script>

    export let voc;

</script>

<style>
    .listBox{
        position: fixed;   /* 固定位置 */
        right: 5vw;          /* 距離右側 0px */
        top: 20vh;            
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
        height: 70%;
        border-left: solid 7px rgba(62, 61, 61, 0.585);
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
    {#if voc && voc.length > 0}
        {#each voc as word}
            <p>{word.word}</p>
        {/each}
    {/if}
</div>
