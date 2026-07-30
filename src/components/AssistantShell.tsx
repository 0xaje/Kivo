import React, { useState, useEffect } from 'react';
import { Mic, ArrowUp, Zap, MicOff, QrCode } from 'lucide-react';

interface AssistantShellProps {
  onSendMessage: (text: string) => void;
  onOpenQRScanner: () => void;
}

export const AssistantShell: React.FC<AssistantShellProps> = ({ onSendMessage, onOpenQRScanner }) => {
  const [inputVal, setInputVal] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = 'en-US';

      rec.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputVal(transcript);
        }
        setIsListening(false);
      };

      rec.onerror = () => setIsListening(false);
      rec.onend = () => setIsListening(false);

      setRecognition(rec);
    }
  }, []);

  const toggleListening = () => {
    if (!recognition) {
      alert('Speech recognition is not supported on this browser engine.');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      try {
        recognition.start();
        setIsListening(true);
      } catch (err) {
        setIsListening(false);
      }
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) return;
    onSendMessage(inputVal.trim());
    setInputVal('');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-6 md:pb-10 pointer-events-none">
      <div className="max-w-[720px] mx-auto flex flex-col items-center gap-4 pointer-events-auto">
        {/* Contextual FABs */}
        <div className="flex gap-4">
          <button
            onClick={onOpenQRScanner}
            className="w-14 h-14 rounded-full bg-[#1a1f26]/80 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center text-white active:scale-90 transition-all hover:bg-white/10 cursor-pointer"
            title="Scan QR Code"
          >
            <QrCode className="w-6 h-6 text-slate-200" />
          </button>
          <button
            onClick={toggleListening}
            className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-all cursor-pointer ${
              isListening
                ? 'bg-rose-500 text-white animate-pulse'
                : 'bg-[#fcc82c] text-slate-950 hover:bg-amber-300'
            }`}
            title={isListening ? 'Stop Mic' : 'Voice Input'}
          >
            {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
        </div>

        {/* Input Field */}
        <form onSubmit={handleSubmit} className="w-full relative group">
          <div className="absolute inset-0 bg-[#fcc82c]/10 rounded-full blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
          <div className="bg-[#1a1f26]/80 backdrop-blur-2xl border border-white/10 rounded-full h-16 flex items-center px-6 relative z-10 shadow-2xl group-focus-within:border-[#fcc82c]/40 transition-colors">
            <Zap className="w-5 h-5 text-[#fcc82c] mr-3 shrink-0" />
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={isListening ? 'Listening to speech...' : 'Ask Kivo anything...'}
              className="bg-transparent border-none focus:outline-none text-white placeholder-slate-500 w-full text-sm font-medium"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="ml-3 w-10 h-10 rounded-full bg-[#fcc82c] text-slate-950 flex items-center justify-center active:scale-95 transition-all shadow-md disabled:opacity-40 cursor-pointer"
            >
              <ArrowUp className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
