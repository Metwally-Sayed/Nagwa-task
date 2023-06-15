import React, { createContext, useState } from "react";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const QuestionStore = createContext([] as any);

const QuestionContext = ({ children }: Props) => {
  const [question, setQuestion] = useState({
    current: 0,
    rightPoints: 0,
    wrongPoints: 0,
    progress: 0,
    showModule: false,
  });
  return (
    <QuestionStore.Provider value={[question, setQuestion]}>
      {children}{" "}
    </QuestionStore.Provider>
  );
};

export default QuestionContext;
