export async function load({ fetch }) {
    const response = await fetch('/api/words');
    const words = await response.json();
    // console.log("載入的 words:", words);
    return { words };
}

