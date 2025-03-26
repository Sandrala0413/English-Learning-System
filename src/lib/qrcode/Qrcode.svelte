<script lang="ts">
    import QRCode from "qrcode";

    let qrCodeUrl = "";
    let qrDataUrl = "";
    export let username = "";
    export let password = "";
  
    // 產生 QR Code（包含 URL）
    $: qrCodeUrl = `C:\Users\sandr\OneDrive\桌面\shan\English_Learning_System\English_Learning_System\src\routes\Quiz`;
  
    
    // 當 `qrCodeUrl` 改變時，自動重新生成 QR Code
    $: (async () => {
        qrDataUrl = await QRCode.toDataURL(qrCodeUrl);
        // if(username && password){
        //     addAccount();
        // }
        username = "admin";
        password = "12345";
    })();
  </script>
  
  <img src={qrDataUrl} alt="QR Code" />
  