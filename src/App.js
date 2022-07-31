import React, { useState, useEffect } from "react";
import Popup from "./components/Popup";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [timePopup, setTimePopup] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimePopup(true);
  //   }, 3000);
  // }, []);

  return (
    <div>
      <main>
        <h1>React Popups</h1>
        <br />
        <button onClick={() => setButtonPopup(true)}>Open Popup</button>
      </main>
      <Popup triggle={buttonPopup} setTriggle={setButtonPopup}>
        {/* children here */}
        <h3>My popup</h3>
        <p>This is my button triggerd popup</p>
      </Popup>
      {/* <Popup triggle={timePopup} setTriggle={setTimePopup}>
        <h3>My Timed Popup</h3>
        <p>This is my time triggerd popup</p>
      </Popup> */}
    </div>
  );
}

export default App;
