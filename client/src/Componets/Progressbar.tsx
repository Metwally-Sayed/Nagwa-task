import React from "react";

const ProgressBar = ({
  progressPercentage,
}: {
  progressPercentage: number;
}) => {
  return (
    <div className="h-8 w-full bg-gray-300">
      <div
        style={{ width: `${progressPercentage}%` }}
        className="h-full bg-[#41e5ed]"
      >
        <p className=" text-center w-full fixed top-1 justify-center items-center text-black -z-1 font-semibold">
          {progressPercentage}%
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
