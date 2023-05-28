import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(new Array(8).fill(0));

  const handleClick = () => {
    let random = Math.floor(Math.random() * 8)
    while (random === selected) {
      random = Math.floor(Math.random() * 8);
    }
    setSelected(random)
  }

  const handleVote = () => {
    let copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  }

  let max = 0
  let maxIndex = 0

  for (let i = 0; i < 8; i++) {
    if (votes[i] > max) {
      max = votes[i]
      maxIndex = i
    }

  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <p>Votes: {votes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxIndex]}</p>
      <p>Votes: {max}</p>
    </>
  );
};

export default App;
