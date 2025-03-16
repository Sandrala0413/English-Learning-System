<script lang="ts">
import { headerBtn, headerBar, logoImg, searchBar } from "./Header.style";
import { goto } from "$app/navigation";
export let targetWord = "";

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" && targetWord.trim() !== "") {
        event.preventDefault(); // 阻止表單預設提交行為
        goto(`/search?q=${encodeURIComponent(targetWord)}`);
    }
}

</script>

<div class={headerBar}>
    <a href="/"><img class={logoImg} src="https://i.imgur.com/MPEsTPo.jpg" alt="logo"></a>
    <a class={headerBtn} href="/Vocabulary">單字簿</a>
    <a class={headerBtn} href="/Quiz">測驗</a>
    <form >
        <input class={searchBar} type="text" bind:value={targetWord} placeholder="搜尋..." on:keydown={handleKeyDown}>
        <!-- <button on:click={}><i class="fa-solid fa-magnifying-glass"></i></button> -->
    </form>
</div>

