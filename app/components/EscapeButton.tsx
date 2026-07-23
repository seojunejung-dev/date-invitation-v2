"use client";

import { useRef, useState } from "react";

const messages = [
  "Are you sure? 🥺",
  "Come on...",
  "Give me one chance ❤️",
  "Nice try 😂",
  "You almost got me!",
  "Still no? 🥹",
  "I'm not giving up!",
  "Try again 😝",
];

type Props = {
  onYes: () => void;
};

export default function EscapeButton({ onYes }: Props) {
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const [message, setMessage] = useState("Please answer honestly 😊");
  const [escaped, setEscaped] = useState(false);

  const [style, setStyle] = useState<React.CSSProperties>({});

  function moveButton() {
    if (!noButtonRef.current) return;

    // 문구는 NO를 누를 때만 변경
    setMessage(messages[Math.floor(Math.random() * messages.length)]);

    const rect = noButtonRef.current.getBoundingClientRect();

    const buttonWidth = rect.width;
    const buttonHeight = rect.height;

    const maxX = window.innerWidth - buttonWidth - 20;
    const maxY = window.innerHeight - buttonHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    setEscaped(true);

    setStyle({
      position: "fixed",
      left: x,
      top: y,
      zIndex: 999,
      transition: "all .25s ease",
    });
  }

  return (
    <>
      <p className="mt-4 h-6 text-center text-gray-500">
        {message}
      </p>

      <div className="relative mt-10 flex justify-center gap-4">

        {/* YES */}
        <button
          onClick={onYes}
          className="rounded-full bg-pink-500 px-10 py-4 text-lg font-bold text-white transition hover:bg-pink-600"
        >
          YES 💖
        </button>

        {/* 자리 유지용 */}
        <button
          className="rounded-full px-10 py-4 opacity-0 pointer-events-none"
        >
          NO 🙈
        </button>

        {/* 실제 NO */}
        <button
          ref={noButtonRef}
          onClick={moveButton}
          style={
            escaped
              ? style
              : {
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(16px)",
                }
          }
          className="rounded-full bg-gray-200 px-10 py-4 text-lg font-bold text-gray-700 transition-all duration-300"
        >
          NO 🙈
        </button>

      </div>
    </>
  );
}