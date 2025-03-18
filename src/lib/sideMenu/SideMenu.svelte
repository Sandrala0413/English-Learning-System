<script>
    export let letterFilter;
    export let menuItem = [
        { icon: "fa-regular fa-a", letter: "A" },{ icon: "fa-regular fa-b", letter: "B" },
        { icon: "fa-regular fa-c", letter: "C" },{ icon: "fa-regular fa-d", letter: "D" },
        { icon: "fa-regular fa-e", letter: "E" },{ icon: "fa-regular fa-f", letter: "F" },
        { icon: "fa-regular fa-g", letter: "G" },{ icon: "fa-regular fa-h", letter: "H" },
        { icon: "fa-regular fa-i", letter: "I" },{ icon: "fa-regular fa-j", letter: "J" },
        { icon: "fa-regular fa-k", letter: "K" },{ icon: "fa-regular fa-l", letter: "L" },
        { icon: "fa-regular fa-m", letter: "M" },{ icon: "fa-regular fa-n", letter: "N" },
        { icon: "fa-regular fa-o", letter: "O" },{ icon: "fa-regular fa-p", letter: "P" },
        { icon: "fa-regular fa-q", letter: "Q" },{ icon: "fa-regular fa-r", letter: "R" },
        { icon: "fa-regular fa-s", letter: "S" },{ icon: "fa-regular fa-t", letter: "T" },
        { icon: "fa-regular fa-u", letter: "U" },{ icon: "fa-regular fa-v", letter: "V" },
        { icon: "fa-regular fa-w", letter: "W" },{ icon: "fa-regular fa-x", letter: "X" },
        { icon: "fa-regular fa-y", letter: "Y" },{ icon: "fa-regular fa-z", letter: "Z" },
    ];
</script>

<style>
    .side-menu {
        position: fixed;
        left: 0;
        top: 57vh;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 80vh;  /* 設置最大高度 */
        overflow-y: auto;  
        padding-right: 20px;
        padding-bottom: 20px;
    }

    .side-menu::-webkit-scrollbar {
        width: 0px;  /*隱藏滾動條*/
        background: transparent;  /* 背景設置為透明 */
    }

    .menu-item {
        width: 50px; /* 控制半圓大小 */
        height: 70px;
        background-color: rgba(230, 195, 195, 0.4);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 60px 60px 0; /* 讓它成為半圓 */
        transition: all 0.3s ease-in-out, opacity 0.3s ease-in-out;
        font-size: 15px;
        box-shadow: 3px 7px 10px rgba(0, 0, 0, 0.3);
        padding: 5px;
    }

    .menu-item:hover {
        width: 60px; /* 滑鼠移上去時展開 */
        background-color: rgba(230, 195, 195, 0.8);
        scale: 1.15;
    }
</style>

<nav class="side-menu">
    {#each menuItem as item}
        <a class="menu-item" on:click={() => letterFilter(item.letter)}>
            <i class={item.icon} style="margin-right: 10px;"></i>
        </a>
    {/each}
</nav>
