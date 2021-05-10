import React from "react";
import imgHHH from "./img/Outcomes/HHH.png"
import imgHHT from "./img/Outcomes/HHT.png"
import imgHTH from "./img/Outcomes/HTH.png"
import imgHTT from "./img/Outcomes/HTT.png"
import imgTHH from "./img/Outcomes/THH.png"
import imgTHT from "./img/Outcomes/THT.png"
import imgTTH from "./img/Outcomes/TTH.png"
import imgTTT from "./img/Outcomes/TTT.png"
import './Result.css'

type ResultProps = {
  decision: string,
  result: string,
  coinImg: string
}

function getCoinImage(coinImg: string){
  switch (coinImg) {
    case "imgHHH":
      return imgHHH;
    case "imgHHT":
      return imgHHT;
    case "imgHTH":
      return imgHTH;
    case "imgHTT":
      return imgHTT;
    case "imgTHH":
      return imgTHH;
    case "imgTHT":
      return imgTHT;
    case "imgTTH":
      return imgTTH;
    case "imgTTT":
      return imgTTT;
    default:
      return "";
  }
}

function Result({decision, result, coinImg}: ResultProps) {
  return (
    <div className="Result">
      <h1></h1>
      <h2>It has been decided.</h2>
      <h2>Outcome</h2>
      <img src={getCoinImage(coinImg)} />
      <h2>{result}</h2>
      
    </div>
  )
}

export default Result
