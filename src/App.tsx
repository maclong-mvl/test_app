import "./App.css";
import { DATA } from "./container";

const getDataBestChoice = (topRank: number, data: unknown) => {
  const output = data.reduce((acc: unknown, current: unknown) => {
    const existingCategory = acc.find(
      (item: unknown) => item.category === current.question.category
    );

    if (existingCategory) {
      existingCategory.totalScore += current.answer.score;
    } else {
      acc.push({
        category: current.question.category,
        ranking: current.question.ranking,
        totalScore: current.answer.score,
      });
    }

    return acc;
  }, []);

  const sortedOutput = output.sort(
    (a: number, b: number) => a.ranking - b.ranking
  );

  const topData = sortedOutput[topRank - 1];

  const filteredData = DATA.filter(
    (item) => item.question.category === topData.category
  );

  const rankingOneData = filteredData.find(
    (item) => item.answer.ranking === topRank
  );

  return rankingOneData;
};
function App() {
  const dataBestChoiceResult = getDataBestChoice(2, DATA);

  console.log("dataBestChoiceResult", dataBestChoiceResult);
  return (
    <>
      <h1>HEHE</h1>
    </>
  );
}

export default App;
