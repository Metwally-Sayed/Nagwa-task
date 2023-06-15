import { accessData } from "../../database/acessData";
import { Router } from "express";

const router = Router();

const studentRank = (studentsScores: [], studentScore: number) => {
  let incrementalVar = 0;
  let i = 0;

  while (i < studentsScores.length) {
    if (studentsScores[i] < studentScore) {
      incrementalVar++;
    }
    i++;
  }

  const value = (incrementalVar / studentsScores.length) * 100;

  return value.toFixed(2);
};

router.get("/", (req, res) => {
  try {
    const { studentScore } = req.query;
    const { scoresList } = accessData();
    const rank = studentRank(scoresList, +studentScore!);
    console.log(rank);
    res.send(rank);
  } catch (error) {
    console.log(error);
  }
});

export default router;
