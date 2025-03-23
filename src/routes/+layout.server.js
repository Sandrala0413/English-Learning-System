// @ts-ignore
export async function load({ fetch }) {
    const response = await fetch('/api/words');
    const words = await response.json();
    
    return { words };
}