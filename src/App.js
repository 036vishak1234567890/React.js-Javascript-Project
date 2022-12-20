import React, { useState, useRef } from "react";
import "./styles/style.css";

function App() {
  const [mode, setMode] = useState("light");
  const [cursor, setCursor] = useState({
    x: "",
    y: "",
  });
  const iconContainer = useRef(null);
  const stars = useRef(null);
  const sun = useRef(null);
  const moon = useRef(null);
  const leftClouds = useRef(null);
  const rightClouds = useRef(null);
  const arrow = useRef(null);
  const tick = useRef(null);
  const login = useRef(null);
  const trail = useRef(null);

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      iconContainer.current.style.left = "65%";
      stars.current.style.opacity = 1;
      moon.current.style.opacity = 1;
      sun.current.style.opacity = 0;
      leftClouds.current.style.left = "-75%";
      rightClouds.current.style.right = "-55%";
    } else {
      setMode("light");
      iconContainer.current.style.left = "4%";
      stars.current.style.opacity = 0;
      sun.current.style.opacity = 1;
      moon.current.style.opacity = 0;
      leftClouds.current.style.left = 0;
      rightClouds.current.style.right = 0;
    }
  };

  const handleLogin = () => {
    arrow.current.style.transform = "rotate(145deg)";
    setTimeout(() => {
      arrow.current.style.opacity = 0;
      tick.current.style.opacity = 1;
    }, 1200);
  };

  const handleTrail = () => {
    trail.current.style.opacity = 1;
    window.addEventListener("mousemove", (e) => {
      trail.current.style.top = `${e.clientY - 20}px`;
      trail.current.style.left = `${e.clientX + 10}px`;
    });
  };

  return (
    <div className={mode === "light" ? "container light" : "container dark"}>
      <div ref={trail} className="trail"></div>
      <header>
        <button
          onClick={handleMode}
          className={mode === "light" ? "mode lightBtn" : "mode darkBtn"}
        >
          <img
            ref={stars}
            className="stars"
            src={require("./images/stars.png")}
            alt=""
          />
          <div>
            <div ref={leftClouds} className="leftClouds">
              <img
                className="cloud1"
                src={require("./images/Cloud3.png")}
                alt=""
              />
              <img
                className="cloud2"
                src={require("./images/Cloud4.png")}
                alt=""
              />
            </div>
            <div ref={rightClouds} className="rightClouds">
              <img
                className="cloud3"
                src={require("./images/Cloud1.png")}
                alt=""
              />
              <img
                className="cloud4"
                src={require("./images/Cloud2.png")}
                alt=""
              />
            </div>
          </div>
          <div ref={iconContainer} className="mainIcon">
            <img
              ref={sun}
              className="sun"
              src={require("./images/Sun.png")}
              alt=""
            />
            <img
              ref={moon}
              className="moon"
              src={require("./images/MoonStars.png")}
              alt=""
            />
          </div>
        </button>
      </header>
      <button
        onMouseEnter={handleTrail}
        onMouseLeave={() => {
          trail.current.style.opacity = 0;
        }}
        onClick={handleLogin}
        ref={login}
        className="login"
      >
        Login
        <div className="btnIcons">
          <img ref={arrow} src={require("./images/Arrow.png")} />
          <img
            ref={tick}
            className="tick"
            src={require("./images/Tick.png")}
          />
        </div>
      </button>
    </div>
  );
}

export default App;
