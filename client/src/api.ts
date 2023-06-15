import axios from "axios";

export const getWords = async () => {
  try {
    const { data } = await axios.get("http://localhost:9999/quiz");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRank = async (studentScore: number) => {
  try {
    const { data } = await axios.get("http://localhost:9999/rank", {
      params: {
        studentScore,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
