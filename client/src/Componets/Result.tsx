import React, { useContext, useEffect, useState } from "react";
import { QuestionStore } from "./context/questionContext";
import { useNavigate } from "react-router-dom";
import { getRank } from "../api";

type Props = {};

const Result = (props: Props) => {
  const [question, setQuestion] = useContext(QuestionStore);
  const [rank, setRank] = useState(0);
  const navigation = useNavigate();
  const btnHandler = () => {
    navigation("/quiz");
    setQuestion({
      current: 0,
      rightPoints: 0,
      wrongPoints: 0,
      progress: 0,
      showModule: false,
    });
  };

  const getScore = async (score: number) => {
    const data = await getRank(score);
    setRank(data);
    return data;
  };

  useEffect(() => {
    getScore(question.rightPoints);
  }, []);

  return (
    <>
      <div className="flex w-full justify-center items-center min-h-screen flex-col">
        <div className="bg-white h-[600px] md:w-[30%] w-full rounded-md p-2">
          <div className=" h-1/3 flex items-center justify-between">
            <h2 className="text-[#1C1A5E] text-lg font-semibold ">Points:</h2>
            <span className="text-white bg-[#1C1A5E] text-lg w-[12%] rounded flex justify-center font-semibold  ">
              {question.rightPoints}
            </span>
          </div>
          <div className=" h-1/3 flex items-center justify-between">
            <h2 className="text-[#1C1A5E] text-lg font-semibold ">Mistakes:</h2>
            <span className="text-white bg-[#1C1A5E] text-lg w-[12%] rounded flex justify-center font-semibold  ">
              {question.wrongPoints}
            </span>
          </div>{" "}
          <div className=" h-1/3 flex items-center justify-between">
            <h2 className="text-[#1C1A5E] text-lg font-semibold ">Rank:</h2>
            <span className="text-white bg-[#1C1A5E] text-lg w-[12%] rounded flex justify-center font-semibold  ">
              {rank}%
            </span>
          </div>
        </div>
        <div className="m-5">
          <button
            onClick={btnHandler}
            className="bg-[#41e5ed] rounded px-5 py-2"
          >
            Try Again!!
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;
