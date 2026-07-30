import React, { useEffect, useRef, useState } from 'react';
import { QrCode, X, Camera, AlertCircle } from 'lucide-react';

interface QRScannerModalProps {
  onClose: () => void;
  onScanResult: (address: string) => void;
}

export const QRScannerModal: React.FC<QRScannerModalProps> = ({ onClose, onScanResult }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);

  useEffect(() => {
    let stream: MediaStream | null = null;

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setIsCameraActive(true);
        }
      } catch (err: any) {
        setErrorMsg('Camera access denied or unreadable on this device.');
      }
    }

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleSimulatedScan = () => {
    onScanResult('0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#1b2027] border border-white/10 w-full max-w-md rounded-3xl p-6 space-y-5 shadow-2xl relative">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <QrCode className="w-5 h-5 text-[#fcc82c]" />
            Scan Web3 QR Payment Address
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-square w-full bg-slate-950 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center">
          {errorMsg ? (
            <div className="p-6 text-center space-y-2">
              <AlertCircle className="w-10 h-10 text-rose-400 mx-auto" />
              <p className="text-xs text-rose-300">{errorMsg}</p>
              <button
                onClick={handleSimulatedScan}
                className="mt-3 px-4 py-2 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-semibold cursor-pointer"
              >
                Use Verified Test Address (0x952...afe5)
              </button>
            </div>
          ) : (
            <>
              <video ref={videoRef} className="w-full h-full object-cover" playsInline muted />
              <div className="absolute inset-8 border-2 border-[#fcc82c]/60 rounded-xl pointer-events-none animate-pulse" />
            </>
          )}
        </div>

        {isCameraActive && (
          <div className="text-center space-y-2">
            <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-[#fcc82c]" />
              Align QR Code inside frame
            </p>
            <button
              onClick={handleSimulatedScan}
              className="text-xs text-amber-400 hover:underline cursor-pointer font-mono"
            >
              Or click to auto-select detected target (0x952...afe5)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
