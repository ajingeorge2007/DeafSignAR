import { useEffect, useRef, useState } from "react";

export default function VoicePage() {
  const [messages, setMessages] = useState<string[]>([]);
  const [signEmoji, setSignEmoji] = useState("🤟");
  const [liveText, setLiveText] = useState("");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef<any>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let interim = "";
      let finalText = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalText += transcript;
        } else {
          interim += transcript;
        }
      }

      setLiveText(interim);

      if (finalText) {
        setMessages((prev) => [...prev, finalText]);
        setLiveText("");

        const lower = finalText.toLowerCase();

        if (lower.includes("hello") || lower.includes("hi")) {
          setSignEmoji("👋");
        } else if (lower.includes("thank")) {
          setSignEmoji("🙏");
        } else if (lower.includes("love")) {
          setSignEmoji("❤️");
        } else if (lower.includes("yes") || lower.includes("okay")) {
          setSignEmoji("👍");
        } else if (lower.includes("no")) {
          setSignEmoji("👎");
        } else if (lower.includes("help")) {
          setSignEmoji("🆘");
        } else if (lower.includes("stop")) {
          setSignEmoji("✋");
        } else if (lower.includes("good")) {
          setSignEmoji("😊");
        } else if (lower.includes("bad")) {
          setSignEmoji("😞");
        } else if (lower.includes("happy")) {
          setSignEmoji("😁");
        } else if (lower.includes("sad")) {
          setSignEmoji("😢");
        } else if (lower.includes("sorry")) {
          setSignEmoji("😔");
        } else if (
          lower.includes("food") ||
          lower.includes("eat")
        ) {
          setSignEmoji("🍽️");
        } else if (
          lower.includes("water") ||
          lower.includes("drink")
        ) {
          setSignEmoji("💧");
        } else if (lower.includes("money")) {
          setSignEmoji("💸");
        } else if (lower.includes("phone")) {
          setSignEmoji("📱");
        } else if (lower.includes("home")) {
          setSignEmoji("🏠");
        } else if (lower.includes("school")) {
          setSignEmoji("🏫");
        } else if (lower.includes("work")) {
          setSignEmoji("💼");
        } else if (lower.includes("doctor")) {
          setSignEmoji("🩺");
        } else if (lower.includes("danger")) {
          setSignEmoji("⚠️");
        } else {
          setSignEmoji("🤟");
        }
      }
    };

    recognitionRef.current = recognition;
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, liveText]);

  const startListening = () => {
    recognitionRef.current.start();
    setListening(true);
  };

  const stopListening = () => {
    recognitionRef.current.stop();
    setListening(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-4">
        🎤 Live Captions
      </h1>

      <div className="mb-6 flex flex-col items-center">
        <div
          className={`text-7xl ${
            listening ? "animate-bounce" : ""
          }`}
        >
          {signEmoji}
        </div>

        <p className="text-gray-400 mt-2">
          {listening
            ? "Signing Assistant Active"
            : "Assistant Waiting"}
        </p>
      </div>

      <div className="w-full max-w-2xl h-[500px] bg-white/5 rounded-3xl p-4 overflow-y-auto shadow-xl space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className="bg-blue-600 px-5 py-3 rounded-2xl w-fit max-w-[80%] ml-auto"
          >
            {msg}
          </div>
        ))}

        {liveText && (
          <div className="bg-white/10 px-5 py-3 rounded-2xl w-fit max-w-[80%] text-gray-300 animate-pulse">
            🎙️ {liveText}
          </div>
        )}

        <div ref={bottomRef}></div>
      </div>

      <div className="mt-6 flex gap-4">
        {!listening ? (
          <button
            onClick={startListening}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-2xl font-semibold"
          >
            Start Listening
          </button>
        ) : (
          <button
            onClick={stopListening}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl font-semibold"
          >
            Stop Listening
          </button>
        )}
      </div>

      <p className="mt-4 text-gray-400">
        {listening ? "🎙️ Listening..." : "Mic paused"}
      </p>
    </div>
  );
}