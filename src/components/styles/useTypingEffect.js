import { useState, useEffect } from 'react';

function useTypingEffect(textArray, typingSpeed) {
  const [text, setText] = useState('');
  const [arrayIndex, setArrayIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingForward, setTypingForward] = useState(true);

  useEffect(() => {
    let timeoutId;

    if (typingForward) {
      if (charIndex < textArray[arrayIndex].length) {
        timeoutId = setTimeout(() => {
          setText((prev) => prev + textArray[arrayIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setTypingForward(false);
        }, 1000);
      }
    } else {
      if (text.length > 0) {
        timeoutId = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setTypingForward(true);
          setArrayIndex((prev) => (prev + 1) % textArray.length);
          setCharIndex(0); // Reset charIndex for the next string
        }, 500); // Shorter wait time before starting the next string
      }
    }

    return () => clearTimeout(timeoutId);
  }, [textArray, arrayIndex, charIndex, text, typingForward, typingSpeed]);

  return text;
}

export default useTypingEffect;
