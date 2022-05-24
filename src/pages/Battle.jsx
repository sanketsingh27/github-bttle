import React, { useState } from "react";

export default function Battle() {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const [player1ImgUrl, setPlayer1ImgUrl] = useState("");
  const [player2ImgUrl, setPlayer2ImgUrl] = useState("");

  return (
    <>
      <div className="playerInfoWrapper">
        {/* player one info  */}
        <div className="playerInfo">
          <img src={player1ImgUrl} alt="player one" />
          <input
            placeholder="Player 1 username "
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <button onClick={() => setPlayer1ImgUrl(`https://github.com/${player1}.png?size=200`)}>
            player1
          </button>
        </div>

        {/* player 2 info  */}
        <div className="playerInfo">
          <img src={player2ImgUrl} alt="player two" />
          <input
            placeholder="Player 2 username "
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <button onClick={() => setPlayer2ImgUrl(`https://github.com/${player2}.png?size=200`)}>
            player2
          </button>
        </div>
      </div>
    </>
  );
}
