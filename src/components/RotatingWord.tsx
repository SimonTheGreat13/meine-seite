import { useEffect, useState } from "react";

interface RotatingWordProps {
  words: string[];
  interval?: number;
  className?: string;
}

const RotatingWord = ({ words, interval = 2200, className = "" }: RotatingWordProps) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 350);
    }, interval);
    return () => clearInterval(t);
  }, [words, interval]);

  return (
    <span
      className={`inline-block transition-all duration-300 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
      } ${className}`}
    >
      {words[index]}
    </span>
  );
};

export default RotatingWord;
