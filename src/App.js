import { useState,useEffect } from "react";
import pauseDesktop from "./images/desktopimg.svg"
import pauseMobile from "./images/mobileimg.svg"
import dice from "./images/icon-dice.svg"
function App() {
  const [text,setText] = useState([])
  const fetchAdvice = async()=>{
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setText(data)
  }
  useEffect(()=>{
fetchAdvice()
  },[])
  return (
    <div className="advice-container">
      <h1>Advice #{text.slip.id}</h1>
      <p>{text.slip.advice}
      </p>
      <picture>
        <source media="(min-width:768 px)" srcSet={pauseDesktop}/>
        <img src={pauseMobile} alt=""/>
      </picture>
      <div>
        <button onClick={fetchAdvice}>
          <img src ={dice} alt="dice"/>
        </button>
      </div>
    </div>
  );
}

export default App;
