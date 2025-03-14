<script>
    
    export let menuItem = [
        { icon: "fa-regular fa-a", link: "/" },
        { icon: "", link: "/learn" },
        { icon: "", link: "/notes" },
        { icon: "", link: "/settings" }
    ];
</script>

<style>
    .side-menu {
        position: fixed;
        left: 0;
        top: 40%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .menu-item {
        width: 50px; /* 控制半圓大小 */
        height: 60px;
        background-color: rgba(230, 195, 195, 0.6);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 60px 60px 0; /* 讓它成為半圓 */
        transition: all 0.3s ease-in-out, opacity 0.3s ease-in-out;
        font-size: 24px;
        box-shadow: 3px 7px 10px rgba(0, 0, 0, 0.349);
    }

    .menu-item:hover {
        width: 75px; /* 滑鼠移上去時展開 */
        /* justify-content: start; */
        /* padding-left: 20px; */
        background-color: rgba(230, 195, 195, 0.8);
        scale: 1.25;
    }
</style>

<nav class="side-menu">
    {#each menuItem as item}
        <a class="menu-item" href={item.link}>
            <i class={item.icon} style="margin-right: 10px;"></i>
        </a>
    {/each}
</nav>
