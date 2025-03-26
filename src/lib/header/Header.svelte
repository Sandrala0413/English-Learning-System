<script lang="ts">
import { headerBtn, headerBar, logoImg, searchBar, logInBtn, logInPage, 
    logInContainer, inputBox, userIcon, logInPageBtn } from "./Header.style";
import { goto } from "$app/navigation";
import { userId, favoriteWords } from "$lib/store";

export let targetWord = "";

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" && targetWord.trim() !== "") {
        event.preventDefault(); // 阻止表單預設提交行為
        goto(`/search?q=${encodeURIComponent(targetWord)}`);
    }
}


let showLogin = false;
let loggedIn = false;

function logInPageToggle() {
    showLogin = !showLogin;
}

export let username = "";
export let password = "";
export async function addAccount() {
    if (!username || !password) {
        alert("請輸入帳號和密碼");
        return;
    }

    try {
        const response = await fetch("/api/accounts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        console.log(data.user);
        if (response.status === 200) {
            alert("登入成功");
            loggedIn = true;
            showLogin = false;
            userId.set(data.user.id);
        } else if (response.status === 201) {
            alert("註冊成功");
            loggedIn = true;
            showLogin = false;
            userId.set(data.user.id);
        } else {
            alert(data.error || "登入/註冊失敗");
        }
        
    } catch (error) {
        console.error("Error:", error);
        alert("發生錯誤，請稍後再試");
    }
}

function logout() {
    loggedIn = false;
    username = "";
    password = ""; 

    userId.set(null);

    alert("已登出");
}

async function loadFavorite(userId: number) {
    const res = await fetch(`/api/favorites?userId=${userId}`);
    const data = await res.json();
    if (Array.isArray(data)) {
        favoriteWords.set(new Set(data.map(word => word.id)));
    }
}

</script>

<div class={headerBar}>
    <a href="/"><img class={logoImg} src="https://i.imgur.com/MPEsTPo.jpg" alt="logo"></a>
    <div class={logInBtn}>
        <p style="margin-right: 5px;">{username ? `歡迎 ${username} ! |  ` : ""}</p>
        {#if loggedIn}
        <p  on:click={logout}>登出</p>
        {:else}
        <p on:click={logInPageToggle}>登入</p>
        {/if}
    </div>
    <a class={headerBtn} href="/Vocabulary">單字簿</a>
    <a class={headerBtn} href="/Quiz">測驗</a>
    <!-- <a class={headerBtn} href="/Favorite">收藏夾</a> -->
    
    <form >
        <input class={searchBar} type="text" bind:value={targetWord} placeholder="搜尋..." on:keydown={handleKeyDown}>
        <!-- <button on:click={}><i class="fa-solid fa-magnifying-glass"></i></button> -->
    </form>
    
    
    
</div>

<!-- {#if showLogin}
<div class={logInPage}>
    <div class={logInContainer} on:click|stopPropagation>
        <i class="fa-solid fa-paw {userIcon}"></i>
        <input class={inputBox} bind:value={username} type="text" placeholder="帳號">
        <input class={inputBox} bind:value={password} type="password" placeholder="密碼">
        <button class={logInPageBtn} on:click={addAccount}>登入</button>
    </div>
    
</div>
{/if} -->

{#if showLogin}
    <div class={logInPage} on:click={logInPageToggle}>
        <div class={logInContainer} on:click|stopPropagation>
            <i class="fa-solid fa-paw {userIcon}"></i>
            <input class={inputBox} bind:value={username} type="text" placeholder="帳號">
            <input class={inputBox} bind:value={password} type="password" placeholder="密碼">
            <button class={logInPageBtn} on:click={addAccount}>登入</button>
        </div>
    </div>
{/if}