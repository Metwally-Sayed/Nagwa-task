import React from "react";

type Props = { questionhandler: Function };

const Answersbtns = ({ questionhandler }: Props) => {
  return (
    <div>
      {" "}
      <div className="flex flex-wrap justify-center items-center md:pt-[200px] ">
        <button
          onClick={() => questionhandler("adverb")}
          className="md:w-[40%] w-[100%] bg-[#41e5ed] h-12 rounded m-6"
        >
          Adverb
        </button>
        <button
          onClick={() => questionhandler("verb")}
          className="md:w-[40%] w-[100%] bg-[#41e5ed] h-12 rounded m-6"
        >
          Verb
        </button>{" "}
        <button
          onClick={() => questionhandler("noun")}
          className="md:w-[40%] w-[100%] bg-[#41e5ed] h-12 rounded m-6"
        >
          Noun
        </button>
        <button
          onClick={() => questionhandler("adjective")}
          className="md:w-[40%] w-[100%] bg-[#41e5ed] h-12 rounded m-6"
        >
          Adjective
        </button>
      </div>
    </div>
  );
};

export default Answersbtns;
