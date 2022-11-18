import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const style = {
  div: {
    padding: 40,
    textAlign: "left",
    background: "#B9E0FF",
    color: "#3c3a2d",
    display: "flex",
    border: "3px solid #8D9EFF"
    },
    button: {
    background: "#4a430b",
    color: "#ffffff",
    fontSize: 14
    },
    img: {
      witdh: "250px",
      height: "250px",
      border: "3px solid black",
      borderRadius: "25px"
    },
    text: {
      padding: 30
    }
};
const Animal = (props) => {
  const play = () =>{
    let audio = new Audio("sounds/"+props.sound)
    audio.play()
  }
  return (
    
      <div style={style.div}>
        <img src={props.image} style={style.img} onClick={play}></img>
        <div style={style.text}>
          <h2>{props.name}</h2>
        <p>{props.desc}</p>
        </div>
      </div>
  )
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
  

function App() {
  return (
    <div>
      <h1>El Equipo A</h1>
      <Animal image='https://iheartcats.com/wp-content/uploads/2020/08/chachamaru_21_83209884_222080682159076_3592060361305647220_n.jpg' name="El Gat" desc="El gat o més conegut com a mixu es un feli que fa miau" sound="catsound.mp3"/>
      <Animal image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dog_in_top_hat.jpg/547px-Dog_in_top_hat.jpg' name="El Gos" desc="El gos o més conegut com a quisso es un cànid que fa bub" sound="dogsound.mp3"/>
      <Animal image='https://clickhole.com/wp-content/uploads/2019/10/s6m9aztvq2sehmdceup3.jpg' name="L'Ànec" desc="L'Ànec o més conegut com a assassí en serie i evasor d'impostos buscat en 25 paisos es un ocell que fa cuack" sound="ducksound.mp3"/>
      <Animal image='https://i.pinimg.com/736x/61/42/05/614205abf80c6226ec2ab9443195042b--baby-hippo-baby-animals.jpg' name="Lil Hippo" desc="Res a dir respecte aquest, simplement lil hippo" sound="hipposound.mp3"/>
    </div>
    
  );
}


export default App;
