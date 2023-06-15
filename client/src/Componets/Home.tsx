import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  const navigation = useNavigate();

  const startHandler = () => {
    navigation("/quiz");
  };

  return (
    <>
      <div className=" flex justify-center items-center min-h-screen">
        <button
          onClick={startHandler}
          className="bg-[#41e5ed] p-4 rounded-md font-semibold text-lg"
        >
          Let's Start Practicing
        </button>
      </div>
    </>
  );
};

export default Home;
