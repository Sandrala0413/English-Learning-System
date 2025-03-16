<script lang="ts">
import { headerBtn, headerBar, logoImg, searchBar, logInBtn, logInPage, 
    logInContainer, inputBox, userIcon, logInPageBtn } from "./Header.style";
import { goto } from "$app/navigation";
export let targetWord = "";

function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" && targetWord.trim() !== "") {
        event.preventDefault(); // 阻止表單預設提交行為
        goto(`/search?q=${encodeURIComponent(targetWord)}`);
    }
}


let showLogin = false;

function logInPageToggle() {
    showLogin = !showLogin;
}

let username = "";
let password = "";
async function addAccount() {
    if (!username || !password) {
        alert("請輸入帳號和密碼");
        return;
    }

    console.log("發送請求: ", { username, password });
    try {
        const response = await fetch("/api/accounts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        console.log("後端回應: ", data);
        if (response.status === 201) {
            alert("註冊成功");
            showLogin = false; // Hide login page
        } else {
            alert(data.error || "註冊失敗");
        }
        
    } catch (error) {
        console.error("Error:", error);
        alert("發生錯誤，請稍後再試");
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
    <p class={logInBtn} on:click={logInPageToggle}>登入</p>
</div>