import { useState } from "react";

const Button = ({ handler, feedback }) => (
  <button onClick={() => handler(feedback)}>{feedback}</button>
);

const StatisticLine = ({ text, value }) => (
  <>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  </>
);

const Statistics = ({ results, total }) => {
  if (total < 1) {
    return <p>No feedback given :(</p>;
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="Good" value={results[0]} />
          <StatisticLine text="Neutral" value={results[1]} />
          <StatisticLine text="Bad" value={results[2]} />
          <StatisticLine text="Total" value={results[3]} />
          <StatisticLine text="Average" value={results[4]} />
          <StatisticLine text="Positive" value={results[5]} />
        </tbody>
      </table>
    );
  }
};

function App() {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);
  let [total, setTotal] = useState(0);
  let [average, setAverage] = useState(0);
  let [percentage, setPercentage] = useState(0);
  let [countAverage, setCount] = useState(0);

  const handleClick = (feedback) => {
    let result = 0;
    let resultGood = 0;
    let resultTotal = total + 1;
    let resultAverage = countAverage;
    if (feedback === "Good") {
      resultGood = good + 1;
      setGood(resultGood);
      resultAverage = resultAverage + 1;
    } else if (feedback === "Bad") {
      result = bad + 1;
      resultGood = good;
      setBad(result);
      resultAverage = resultAverage - 1;
    } else if (feedback === "Neutral") {
      result = neutral + 1;
      resultGood = good;
      setNeutral(result);
    }
    setTotal(resultTotal);
    setPercentage((resultGood * 100) / resultTotal);
    setAverage(resultAverage / resultTotal);
    setCount(resultAverage);
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handler={handleClick} feedback={"Good"} />
      <Button handler={handleClick} feedback={"Neutral"} />
      <Button handler={handleClick} feedback={"Bad"} />
      <h2>Statistics</h2>
      <Statistics
        results={[good, neutral, bad, total, average, percentage]}
        total={total}
      />
    </>
  );
}

export default App;
