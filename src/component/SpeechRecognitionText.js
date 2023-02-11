import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
//import "./index.css";

export const SpeechRecognitionText = () => {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Seu navegador nao suporta SpeechRecognition</span>;
  }
  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>
        comecar a gravar
      </button>
      <button onClick={SpeechRecognition.stopListening}>parar de gravar</button>
      <button onClick={resetTranscript}>resetar campos</button>

      <h1>{transcript}</h1>
    </div>
  );
};
