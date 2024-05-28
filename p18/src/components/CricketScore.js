import React, { useState } from "react";
import "./CricketScore.css";

function CricketScore() {
  let [totalRuns, setTotalRuns] = useState(0);
  let [balls, setBalls] = useState(0);
  let [players, setPlayers] = useState([
    { name: "Swaroop🏏", runs: 0, out: false },
    { name: "Vamsi🏏", runs: 0, out: false },
    { name: "Roshan🏏", runs: 0, out: false },
    { name: "Govardhan🏏", runs: 0, out: false },
    { name: "Naveen🏏", runs: 0, out: false },
    { name: "Jyothi ©️  🏏 ", runs: 0, out: false },
    { name: "Lakshman🏏", runs: 0, out: false },
    { name: "Akhil⚾", runs: 0, out: false },
    { name: "Manideep⚾", runs: 0, out: false },
    { name: "Kumar⚾", runs: 0, out: false },
    { name: "Shivaji⚾", runs: 0, out: false },
  ]);
  let [currentPlayer, setCurrentPlayer] = useState(0);

  function AddRun(runs) {
    let newPlayers = [...players];
    newPlayers[currentPlayer].runs += runs;
    setPlayers(newPlayers);
    setTotalRuns(totalRuns + runs);
    BallBowled();
  }

  function DotBall() {
    BallBowled();
  }

  function WideBall() {
    setTotalRuns(totalRuns + 1);
  }

  function NoBall() {
    setTotalRuns(totalRuns + 1);
  }

  function BallBowled() {
    setBalls(balls + 1);
  }

  function RunOut() {
    let newPlayers = [...players];
    newPlayers[currentPlayer].out = true;
    setPlayers(newPlayers);
    setCurrentPlayer((prev) => (prev + 1) % players.length);
    BallBowled();
  }

  function Out() {
    let newPlayers = [...players];
    newPlayers[currentPlayer].out = true;
    setPlayers(newPlayers);
    setCurrentPlayer((prev) => (prev + 1) % players.length);
    BallBowled();
  }

  function calculateOvers(balls) {
    let overs = Math.floor(balls / 6);
    let remainingBalls = balls % 6;
    return `${overs}.${remainingBalls}`;
  }

  return (
    <div className="scorecontainer">
      <h1 className="title"><ins>Cricket Scorecard</ins></h1>
      <div className="scoreboard">
        <p>Total Runs: {totalRuns}</p>
        <p>Overs: {calculateOvers(balls)}</p>
      </div>
      <div className="playerinfo">
        <p>Current Player: {players[currentPlayer].name}</p>
        <p>
          Runs Scored by {players[currentPlayer].name}:{" "}
          {players[currentPlayer].runs}
        </p>
        <p>Status: {players[currentPlayer].out ? "Out" : "Not Out"}</p>
      </div>
      <div className="buttons">
        <button onClick={() => AddRun(1)}> 1 Run</button>
        <button onClick={() => AddRun(4)}> 4 Runs</button>
        <button onClick={() => AddRun(6)}> 6 Runs</button>
        <button onClick={DotBall}>Dot Ball</button>
        <button onClick={WideBall}>Wide Ball</button>
        <button onClick={NoBall}>No Ball</button>
        <button onClick={RunOut}>Run Out</button>
        <button onClick={Out}>Out</button>
      </div>
      <div className="playerruns">
        <h2>Runs Scored by Each Player</h2>
        <ul style={{ marginLeft: "220px", textAlign: "justify" }}>
          <li style={{ textAlign: "justify" }}>
            {players[0].name}: {players[0].runs} runs{" "}
          </li>
          <li style={{ textAlign: "justify" }}>
            {players[1].name}: {players[1].runs} runs
          </li>
          <li style={{ textAlign: "justify" }}>
            {players[2].name}: {players[2].runs} runs
          </li>
          <li style={{ textAlign: "justify" }}>
            {players[3].name}: {players[3].runs} runs
          </li>
          <li style={{ textAlign: "justify" }}>
            {players[4].name}: {players[4].runs} runs
          </li>
          <li style={{ textAlign: "justify" }}>
            {players[5].name}: {players[5].runs} runs
          </li>
          <li style={{ textAlign: "justify" }}>
            {players[6].name}: {players[6].runs} runs
          </li>
          <li style={{ textAlign: "justify" }}>
            {players[7].name}: {players[7].runs} runs
          </li>
          <li style={{ textAlign: "justify" }}>
            {players[8].name}: {players[8].runs} runs
          </li>
          <li style={{ textAlign: "justify" }}>
            {players[9].name}: {players[9].runs} runs
          </li>
          <li style={{ textAlign: "justify" }}>
            {players[10].name}: {players[10].runs} runs
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CricketScore;
