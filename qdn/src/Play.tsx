import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import imgHHH from "./img/Outcomes/HHH.png"
import imgHHT from "./img/Outcomes/HHT.png"
import imgHTH from "./img/Outcomes/HTH.png"
import imgHTT from "./img/Outcomes/HTT.png"
import imgTHH from "./img/Outcomes/THH.png"
import imgTHT from "./img/Outcomes/THT.png"
import imgTTH from "./img/Outcomes/TTH.png"
import imgTTT from "./img/Outcomes/TTT.png"
import './Play.css'
import Header from './Header';
import Topbar from './Topbar'

function Play() {

  const [optionHHH, setOptionHHH] = React.useState("");
  const [optionHHT, setOptionHHT] = React.useState("");
  const [optionHTH, setOptionHTH] = React.useState("");
  const [optionHTT, setOptionHTT] = React.useState("");
  const [optionTHH, setOptionTHH] = React.useState("");
  const [optionTHT, setOptionTHT] = React.useState("");
  const [optionTTH, setOptionTTH] = React.useState("");
  const [optionTTT, setOptionTTT] = React.useState("");

  const [result, setResult] = React.useState("");

  function handleClear(){
    setOptionHHH("");
    setOptionHHT("");
    setOptionHTH("");
    setOptionHTT("");
    setOptionTHH("");
    setOptionTHT("");
    setOptionTTH("");
    setOptionTTT("");
  }

  function handleFlip(){
    var pick = Math.floor(Math.random() * 8) + 1;
    
    switch (pick) {
      case 1:
        setResult(optionHHH);
        break;
      case 2:
        setResult(optionHHT);
        break;
      case 3:
        setResult(optionHTH);
        break;
      case 4:
        setResult(optionHTT);
        break;
      case 5:
        setResult(optionTHH);
        break;
      case 6:
        setResult(optionTHT);
        break;
      case 7:
        setResult(optionTTH);
        break;
      case 8:
        setResult(optionTTT);
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

  return (
    <div className="Play">
      <Topbar />
      <h1>Play</h1>
      <div className="gameboard">
        <table className="">
          <thead>
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
              <td>
                <button onClick={handleClear} className="btn btn-secondary" value="Clear">Clear</button>
              </td>
              <td>
              <button onClick={handleFlip} className="btn btn-dark" value="Flip">Flip</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1>{result}</h1>
    </div>
  )
}

export default Play
