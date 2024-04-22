export const speak = (text) => {
    if (!text) return; // Don't speak if no text provided

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN';
    utterance.rate = 0.9;

    window.speechSynthesis.speak(utterance);
  };