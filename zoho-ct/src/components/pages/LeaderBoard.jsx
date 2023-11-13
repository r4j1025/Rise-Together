// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import './LeaderBoard.css';

const Container = styled.div`
  height: 80vh;
  background-color: #e5cff7;
  margin:30px;
  //border:2px solid grey;

`;

const LeaderBoard = () => {
  return (
    <Container>
      <div className="leaderboard">
    <div className="h1d">
    <h1>
        Most active Volunteers
    </h1>
    <h1>
      Appreciations
    </h1>
    </div>
    <ol>
        <li>
            <mark>Imran T</mark>
            <small>315</small>
        </li>
        <li>
            <mark>Karthik J</mark>
            <small>301</small>
        </li>
        <li>
            <mark>Sakthi Y</mark>
            <small>292</small>
        </li>
        <li>
            <mark>VishnuPriya P</mark>
            <small>245</small>
        </li>
        <li>
            <mark>Andrew F</mark>
            <small>203</small>
        </li>
    </ol>
</div>
    </Container>
  );
};

export default LeaderBoard;
