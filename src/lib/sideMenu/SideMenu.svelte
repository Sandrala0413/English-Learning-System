<script>
    
    export let menuItem = [
        { icon: "fa-regular fa-a", link: "/" },{ icon: "fa-regular fa-b", link: "" },
        { icon: "fa-regular fa-c", link: "" },{ icon: "fa-regular fa-d", link: "" },
        { icon: "fa-regular fa-e", link: "" },{ icon: "fa-regular fa-f", link: "" },
        { icon: "fa-regular fa-g", link: "" },{ icon: "fa-regular fa-h", link: "" },
        { icon: "fa-regular fa-i", link: "" },{ icon: "fa-regular fa-j", link: "" },
        { icon: "fa-regular fa-k", link: "" },{ icon: "fa-regular fa-l", link: "" },
        { icon: "fa-regular fa-m", link: "" },{ icon: "fa-regular fa-n", link: "" },
        { icon: "fa-regular fa-o", link: "" },{ icon: "fa-regular fa-p", link: "" },
        { icon: "fa-regular fa-q", link: "" },{ icon: "fa-regular fa-r", link: "" },
        { icon: "fa-regular fa-s", link: "" },{ icon: "fa-regular fa-t", link: "" },
        { icon: "fa-regular fa-u", link: "" },{ icon: "fa-regular fa-v", link: "" },
        { icon: "fa-regular fa-w", link: "" },{ icon: "fa-regular fa-x", link: "" },
        { icon: "fa-regular fa-y", link: "" },{ icon: "fa-regular fa-z", link: "" },
    ];
</script>

<style>
    .side-menu {
        position: fixed;
        left: 0;
        top: 60%;
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
        <a class="menu-item" href={item.link}>
            <i class={item.icon} style="margin-right: 10px;"></i>
        </a>
    {/each}
</nav>
