import React, { useEffect, useState, useContext } from "react";
import ProgressBar from "./Progressbar";
import { getWords } from "../api";
import { Word } from "../typs";
import Answersbtns from "./Answersbtns";
import { QuestionStore } from "./context/questionContext";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
type Props = {};

const Quiz = (props: Props) => {
  const navigation = useNavigate();
  const [question, setQuestion] = useContext(QuestionStore);
  const [words, setWords] = useState<Word[]>([{ word: "", id: 0, pos: "" }]);

  const wordsData = async () => {
    const data = await getWords();
    setWords(data);
  };

  useEffect(() => {
    wordsData();
  }, []);

  const questionhandler = (answer: string) => {
    //checking if the current question number is less than the words list length
    if (question.current < words.length - 1) {
      //here im comparing the current word pos withe the answer coming from the btn
      words[question.current].pos === answer
        ? // case yes ...
          setQuestion({
            ...question,
            current: question.current + 1,
            showModule: false,
            rightPoints: question.rightPoints + 10,
            progress: question.progress + 100 / words.length,
          })
        : //case no ...
          setQuestion({
            ...question,
            current: question.current + 1,
            showModule: true,
            wrongPoints: question.wrongPoints + 1,
            progress: question.progress + 100 / words.length,
          });
      // is question.current became bigger than words indexs im reouting to "/result" and set the question state
    } else {
      setQuestion({
        ...question,
        current: question.current + 1,
        showModule: false,
        wrongPoints: question.wrongPoints + 1,
        progress: question.progress + 100 / words.length,
      });
      // i added setTimeout to wait in the event loop till all the stack excute and then to run it
      setTimeout(() => {
        navigation("/result");
      }, 0);
    }
  };

  return (
    <>
      <div className=" min-h-screen">
        <Popup
          question={question}
          pos={words[question?.current - 1]?.pos}
          setQuestion={setQuestion}
        />
        <ProgressBar progressPercentage={question?.progress} />
        <div className="p-10 h-full">
          <div className="h-1/2 md:mb-24" key={words[0]?.id}>
            <h1 className=" text-5xl pt-10">Pick The Right Answer : </h1>
            <div className="h-auto flex justify-center my-20 ">
              <div className="bg-white h-auto w-auto rounded text-black font-semibold px-10 py-5 text-3xl">
                {words[question.current]?.word}{" "}
              </div>
            </div>
          </div>
          <div className="md:h-[300px]">
            <Answersbtns questionhandler={questionhandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
