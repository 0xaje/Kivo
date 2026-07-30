import React, { useState, useEffect } from 'react';
import { Mic, ArrowUp, Sparkles, MicOff } from 'lucide-react';

interface AssistantShellProps {
  onSendMessage: (text: string) => void;
}

export const AssistantShell: React.FC<AssistantShellProps> = ({ onSendMessage }) => {
  const [inputVal, setInputVal] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    // Check for native SpeechRecognition API in browser
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

      rec.onerror = () => {
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-6 z-40">
      <div className="max-w-[720px] mx-auto relative">
        <form onSubmit={handleSubmit} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#fcc82c]/20 to-[#fcc82c]/0 rounded-full blur opacity-25 group-focus-within:opacity-50 transition-opacity"></div>
          <div className="relative flex items-center bg-[#1a1f26]/80 backdrop-blur-2xl border border-white/10 rounded-full h-16 px-5 shadow-2xl transition-all duration-300 group-focus-within:border-[#fcc82c]/30">
            <Sparkles className="w-5 h-5 text-amber-400/60 ml-1 shrink-0" />
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isListening ? 'Listening to voice...' : 'Ask Kivo anything...'}
              className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder-slate-500 px-4 text-sm font-medium"
            />
            <div className="flex items-center gap-2 pr-1">
              <button
                type="button"
                onClick={toggleListening}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all cursor-pointer ${
                  isListening
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'text-slate-400 hover:text-amber-400 hover:bg-white/5'
                }`}
                title={isListening ? 'Stop Voice Input' : 'Start Voice Input'}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
              <button
                type="submit"
                disabled={!inputVal.trim()}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#fcc82c] text-slate-950 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#fcc82c]/20 disabled:opacity-40 disabled:hover:scale-100 cursor-pointer"
              >
                <ArrowUp className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
