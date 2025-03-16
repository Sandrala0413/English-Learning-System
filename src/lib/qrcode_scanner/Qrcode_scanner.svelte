<script lang="ts">
    import { onMount } from "svelte";
    import { Html5QrcodeScanner } from "html5-qrcode";
    import { goto } from "$app/navigation";
  
    let scanner: Html5QrcodeScanner;
  
    onMount(() => {
        scanner = new Html5QrcodeScanner("qr-scanner", { fps: 10}, false);
  
        scanner.render(
            (decodedText) => {
                console.log("QR Code Scanned:", decodedText);
                goto(decodedText); // 掃描成功後跳轉到 URL
            },
            (errorMessage) => {
                console.log("QR Code Scan Failed:", errorMessage);
            }
        );

    });
  
    // function stopScanner() {
    //     if (scanner) scanner.clear();
    // }
</script>

<style>
    #qr-scanner {
        width: 400px;
        height: 350px;
        margin: 20px auto;
        border: 20px solid rgb(244, 240, 240);
        border-radius: 10px;
        overflow: hidden;
    }
</style>
  
  <div id="qr-scanner"></div>
  <!-- <button on:click={stopScanner}>停止掃描</button> -->
  