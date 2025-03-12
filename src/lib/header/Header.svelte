<script>
import { headerBtn, headerBar, logoImg, searchBar } from "./Header.style";
</script>

<div class={headerBar}>
    <a href="/"><img class={logoImg} src="https://i.imgur.com/MPEsTPo.jpg"></a>
    <a class={headerBtn} href="/Vocabulary">單字簿</a>
    <a class={headerBtn} href="/Quiz">測驗</a>
    <form >
        <input class={searchBar} type="text" placeholder="搜尋...">
    </form>
</div>