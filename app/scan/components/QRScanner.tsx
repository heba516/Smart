"use client"; // Only needed for Next.js App Router

import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QRScanner = () => {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("qr-reader");
    const config = { fps: 10, qrbox: 250 };

    const onScanSuccess = (decodedText: string) => {
      console.log("Scanned:", decodedText);

      // Redirect only if it's a valid URL
      if (decodedText.startsWith("http") || decodedText.startsWith("https")) {
        window.location.href = decodedText;
      } else {
        alert("Scanned QR Code is not a valid URL: " + decodedText);
      }
    };

    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices.length > 0) {
          const cameraId = devices[0].id; // Use the first available camera
          html5QrCode
            .start(cameraId, config, onScanSuccess, (errorMessage) => {
              console.error("QR Code scan error:", errorMessage);
            })
            .catch((err) => console.error("Camera start error:", err));
        } else {
          console.error("No camera found.");
        }
      })
      .catch((err) => console.error("Error getting cameras:", err));

    // Cleanup on unmount
    return () => {
      html5QrCode.stop().catch((err) => console.warn("Stop error:", err));
    };
  }, []);

  return (
    <div>
      <h2>Scan a QR Code</h2>
      <div id="qr-reader" style={{ width: "300px", height: "300px" }}></div>
    </div>
  );
};

export default QRScanner;
