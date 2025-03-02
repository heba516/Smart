"use client";

import { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QRScanner = () => {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("qr-reader");
    const config = { fps: 10, qrbox: 280 };
    // let errorCount = 0;

    const onScanSuccess = (decodedText: string) => {
      console.log("Scanned:", decodedText);

      // Redirect only if it's a valid URL
      if (decodedText.startsWith("http") || decodedText.startsWith("https")) {
        window.location.href = decodedText;
      } else {
        alert("Scanned QR Code is not a valid URL: " + decodedText);
      }
    };

    // const onScanFailure = (errorMessage: string) => {
    //   if (errorCount < 5) {
    //     console.warn("QR Code scan error:", errorMessage);
    //   }
    //   errorCount++;
    // };

    // (errorMessage) => {
    //   console.warn("QR Code scan error:", errorMessage);
    // };

    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices.length > 0) {
          // Prefer the back camera
          // const backCamera = devices.find((device) =>
          //   device.label.toLowerCase().includes("back")
          // );
          // const cameraId = backCamera ? backCamera.id : devices[0].id;

          const isMobile = /Mobi|Android|iPhone|iPad/i.test(
            navigator.userAgent
          );

          let cameraId;
          if (isMobile) {
            // Prefer the back camera on mobile
            const backCamera = devices.find((device) =>
              device.label.toLowerCase().includes("back")
            );
            cameraId = backCamera ? backCamera.id : devices[0].id;
          } else {
            // Use the default camera on laptops/desktops
            cameraId = devices[0].id;
          }

          html5QrCode
            .start(cameraId, config, onScanSuccess, (errorMessage) => {
              console.warn("QR Code scan error:", errorMessage);
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
    <div className="md:w-[90%] lg:w-[60%] max-h-[40vh] mx-auto flex items-center justify-center">
      <div
        id="qr-reader"
        style={{ transform: "scaleX(-1)" }}
        className="w-full h-full max-w-[400px] max-h-[300px] bg-gray-100"
      ></div>
    </div>
  );
};

export default QRScanner;
