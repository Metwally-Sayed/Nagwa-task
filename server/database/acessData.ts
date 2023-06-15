import path from "path";
import fs from "fs";

export const accessData = () => {
  const dataPath = path.join(__dirname,"./", "TestData.json");
  const reqData = fs.readFileSync(dataPath);
  const data = JSON.parse(reqData.toString());
  return data;
};
