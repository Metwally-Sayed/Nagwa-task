import React, { useContext } from "react";
import { QuestionStore } from "./context/questionContext";

type Props = {
  pos: string;
  setQuestion: Function;
  question: { showModule: boolean };
};

const Popup = ({ pos, setQuestion, question }: Props) => {
  const buttonHandler = () => {
    setQuestion({ ...question, showModule: false });
  };
  return (
    <>
      {question.showModule && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center ">
          <div className="bg-white p-1 rounded-md md:w-[35%] h-[30%] flex justify-center items-center flex-col ">
            <p className="text-black font-semibold text-lg my-10">
              The Correct Answer Should Be "{pos}"
            </p>
            <button
              onClick={buttonHandler}
              className="bg-[#41e5ed] text-white font-semibold text-2xl my-10 px-10 py-2 rounded-md"
            >
              Ok!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
