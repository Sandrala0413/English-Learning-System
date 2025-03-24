<script lang="ts">
    import QRCode from "qrcode";

    let qrCodeUrl = "";
    let qrDataUrl = "";
  
    // 產生 QR Code（包含 URL）
    $: qrCodeUrl = `C:\Users\cinni\OneDrive\桌面\物聯網\作業1\English-Learning-System\src\routes\Quiz`;
  
    
    // 當 `qrCodeUrl` 改變時，自動重新生成 QR Code
    $: (async () => {
        qrDataUrl = await QRCode.toDataURL(qrCodeUrl);
    })();
  </script>
  
  <img src={qrDataUrl} alt="QR Code" />
  