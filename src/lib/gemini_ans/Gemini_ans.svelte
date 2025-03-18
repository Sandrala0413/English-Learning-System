<script lang="ts">
    import { onMount } from "svelte";

    export let prompt = "";
    let responseText = "";
    let loading = false;

    async function generateResponse() {
        loading = true;
        responseText = "";  // 清空舊的回應

        const response = await fetch("/api/gemini", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ prompt })
        });

        const data = await response.json();
        // console.log("Gemini Response:", data); // 檢查 API 回應
        responseText = data.candidates?.[0]?.content || "No response from AI";
        loading = false;
    }

    onMount(() => { generateResponse(); });
</script>

<main>
    <h1>Google Gemini AI Chat</h1>
    <input type="text" bind:value={prompt} placeholder="輸入你的問題..." />
    <button on:click={generateResponse} disabled={loading}>
        {loading ? "生成中..." : "詢問 Gemini"}
    </button>

    {#if responseText}
        <p><strong>Gemini:</strong> {responseText}</p>
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 500px;
        margin: auto;
    }
    input {
        padding: 10px;
        font-size: 16px;
    }
    button {
        padding: 10px;
        background: blue;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>
