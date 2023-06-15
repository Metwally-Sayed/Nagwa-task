import { Router } from "express";
import { accessData } from "../../database/acessData";
import { Word } from "../typs";

const router = Router();

const pickRandomWords = (wordList: Word[]): Word[] => {
  const posTypes: Set<string> = new Set(wordList.map((word) => word.pos));
  const selectedWords: Word[] = [];

  // Select at least one word for each pos type
  for (const posType of posTypes) {
    const wordsWithPos: Word[] = wordList.filter(
      (word) => word.pos === posType
    );
    const selectedWord: Word =
      wordsWithPos[Math.floor(Math.random() * wordsWithPos.length)];
    selectedWords.push(selectedWord);
    wordList = wordList.filter((word) => word.id !== selectedWord.id);
  }

  const remainingWordsCount: number = 10 - selectedWords.length;
  const remainingWords: Word[] = [...wordList];

  // Select the remaining random words without repeats
  const remainingSelectedWords: Word[] = [];

  for (let i = 0; i < remainingWordsCount; i++) {
    const randomIndex: number = Math.floor(
      Math.random() * remainingWords.length
    );
    const randomWord: Word = remainingWords[randomIndex];
    remainingSelectedWords.push(randomWord);
    remainingWords.splice(randomIndex, 1);
  }

  return selectedWords.concat(remainingSelectedWords);
};

router.get("/", (req, res) => {
  try {
    const { wordList } = accessData();
    const words = pickRandomWords(wordList);
    console.log(words);
    res.send(words);
  } catch (error) {
    console.log(error);
  }
});

export default router;
