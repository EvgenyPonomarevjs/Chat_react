import React from "react";
import io  from "socket.io-client";

const socket = io('http://localhost:9898', { transports: ['websocket'] })

function App() {
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
