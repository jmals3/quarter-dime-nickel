import React from "react";
import imgHHH from "./img/Outcomes/HHH.png"
import imgHHT from "./img/Outcomes/HHT.png"
import imgHTH from "./img/Outcomes/HTH.png"
import imgHTT from "./img/Outcomes/HTT.png"
import imgTHH from "./img/Outcomes/THH.png"
import imgTHT from "./img/Outcomes/THT.png"
import imgTTH from "./img/Outcomes/TTH.png"
import imgTTT from "./img/Outcomes/TTT.png"
import coinflip from "./audio/coinFlip.wav"
// import coinflip from "./audio/coin-flip.wav"
import './Play.css'
import Topbar from './Topbar'
import Result from './Result'

function Play() {

  const [showRules, setShowRules] = React.useState("rules d-none");
  const [soundEffects, setSoundEffects] = React.useState(true);

  const [decision, setDecision] = React.useState("");

  const [optionHHH, setOptionHHH] = React.useState("");
  const [optionHHT, setOptionHHT] = React.useState("");
  const [optionHTH, setOptionHTH] = React.useState("");
  const [optionHTT, setOptionHTT] = React.useState("");
  const [optionTHH, setOptionTHH] = React.useState("");
  const [optionTHT, setOptionTHT] = React.useState("");
  const [optionTTH, setOptionTTH] = React.useState("");
  const [optionTTT, setOptionTTT] = React.useState("");

  const [result, setResult] = React.useState("");
  const [coinImg, setCoinImg] = React.useState("");

  function handleUpdateDecision(e: React.ChangeEvent<HTMLInputElement>) {
    setDecision(e.currentTarget.value);
  }

  function handleClear() {
    setOptionHHH("");
    setOptionHHT("");
    setOptionHTH("");
    setOptionHTT("");
    setOptionTHH("");
    setOptionTHT("");
    setOptionTTH("");
    setOptionTTT("");
  }

  function checkOptions() {
    if (optionHHH.length === 0) {
      return false;
    }
    else if (optionHHT.length === 0) {
      return false;
    }
    else if (optionHTH.length === 0) {
      return false;
    }
    else if (optionHTT.length === 0) {
      return false;
    }
    else if (optionTHH.length === 0) {
      return false;
    }
    else if (optionTHT.length === 0) {
      return false;
    }
    else if (optionTTH.length === 0) {
      return false;
    }
    else if (optionTTT.length === 0) {
      return false;
    }
    else {
      return true;
    }
  }

  async function handleFlip() {
    if (!checkOptions()) {
      return "";
    }

    if (soundEffects) {
      var audio = new Audio(coinflip);
      for (let i = 0; i < 3; i++) {
        await new Promise((resolve) => {
          audio.onended = resolve;
          audio.play();
        });
      }
    }

    var pick = Math.floor(Math.random() * 8) + 1;

    switch (pick) {
      case 1:
        setResult(optionHHH);
        setCoinImg("imgHHH");
        break;
      case 2:
        setResult(optionHHT);
        setCoinImg("imgHHT");
        break;
      case 3:
        setResult(optionHTH);
        setCoinImg("imgHTH");
        break;
      case 4:
        setResult(optionHTT);
        setCoinImg("imgHTT");
        break;
      case 5:
        setResult(optionTHH);
        setCoinImg("imgTHH");
        break;
      case 6:
        setResult(optionTHT);
        setCoinImg("imgTHT");
        break;
      case 7:
        setResult(optionTTH);
        setCoinImg("imgTTH");
        break;
      case 8:
        setResult(optionTTT);
        setCoinImg("imgTTT");
        break;
      default:
        setResult("");
        break;
    }
  }

  function handleUpdateHHH(e: React.ChangeEvent<HTMLInputElement>) {
    setOptionHHH(e.currentTarget.value);
  }

  function handleUpdateHHT(e: React.ChangeEvent<HTMLInputElement>) {
    setOptionHHT(e.currentTarget.value);
  }

  function handleUpdateHTH(e: React.ChangeEvent<HTMLInputElement>) {
    setOptionHTH(e.currentTarget.value);
  }

  function handleUpdateHTT(e: React.ChangeEvent<HTMLInputElement>) {
    setOptionHTT(e.currentTarget.value);
  }

  function handleUpdateTHH(e: React.ChangeEvent<HTMLInputElement>) {
    setOptionTHH(e.currentTarget.value);
  }

  function handleUpdateTHT(e: React.ChangeEvent<HTMLInputElement>) {
    setOptionTHT(e.currentTarget.value);
  }

  function handleUpdateTTH(e: React.ChangeEvent<HTMLInputElement>) {
    setOptionTTH(e.currentTarget.value);
  }

  function handleUpdateTTT(e: React.ChangeEvent<HTMLInputElement>) {
    setOptionTTT(e.currentTarget.value);
  }

  function handleShowRules() {
    if (showRules == "rules d-none") {
      setShowRules("rules");
    }
    else {
      setShowRules("rules d-none");
    }
  }

  function handleSoundEffects() {
    if (soundEffects) {
      setSoundEffects(false);
    }
    else {
      setSoundEffects(true);
    }
  }

  if (result === "") {
    return (
      <div className="Play">
        <Topbar />
        <h1>Play</h1>
        <button onClick={handleShowRules} className="howtoplay">How to play</button>
        <div className={showRules}>
          <p>Input the decision you're trying to make.</p>
          <p>Think of 8 possible options and input them below.</p>
          <p>Click the <span className="font-weight-bold">Flip</span> button.</p>
          <p>Proceed with option selected for you.</p>
        </div>
        <div className="gameboard">
          <table className="">
            <thead>
              <tr>
                <th colSpan={2}>Decision</th>
              </tr>
              <tr>
                <th colSpan={2}>
                  <input type="text" className="decision" onChange={(event) => handleUpdateDecision(event)} value={decision}></input>
                </th>
              </tr>
              <tr>
                <th>Outcome</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img className="outcome" src={imgHHH} />
                </td>
                <td>
                  <input type="text" className="option" onChange={(event) => handleUpdateHHH(event)} value={optionHHH}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="outcome" src={imgHHT} />
                </td>
                <td>
                  <input type="text" className="option" onChange={(event) => handleUpdateHHT(event)} value={optionHHT}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="outcome" src={imgHTH} />
                </td>
                <td>
                  <input type="text" className="option" onChange={(event) => handleUpdateHTH(event)} value={optionHTH}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="outcome" src={imgHTT} />
                </td>
                <td>
                  <input type="text" className="option" onChange={(event) => handleUpdateHTT(event)} value={optionHTT}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="outcome" src={imgTHH} />
                </td>
                <td>
                  <input type="text" className="option" onChange={(event) => handleUpdateTHH(event)} value={optionTHH}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="outcome" src={imgTHT} />
                </td>
                <td>
                  <input type="text" className="option" onChange={(event) => handleUpdateTHT(event)} value={optionTHT}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="outcome" src={imgTTH} />
                </td>
                <td>
                  <input type="text" className="option" onChange={(event) => handleUpdateTTH(event)} value={optionTTH}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <img className="outcome" src={imgTTT} />
                </td>
                <td>
                  <input type="text" className="option" onChange={(event) => handleUpdateTTT(event)} value={optionTTT}></input>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <input className="mt-4" type="checkbox" checked={soundEffects} onChange={handleSoundEffects} />
                  <label className="soundeffect">Sound Effects</label>
                </td>
              </tr>
              <tr>
                <td>
                  <button onClick={handleClear} className="btn btn-secondary" value="Clear">Clear</button>
                </td>
                <td>
                  {checkOptions() ?
                    <button onClick={handleFlip} className="btn btn-dark" value="Flip">Flip</button>
                    : <button onClick={handleFlip} className="btn btn-dark" value="Flip" disabled>Flip</button>
                  }
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="Play">
        <Topbar />
        <Result decision={decision} result={result} coinImg={coinImg} />
      </div>
    )
  }
}

export default Play
