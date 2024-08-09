import './App.css';
import io from "socket.io-client"
import { useEffect, useState } from 'react';

const socket = io.connect("http://localhost:3001")

function App() {
const [message,setMessage] = useState("")
const [messageReceived,setmessageReceived] = useState("")
  const sendmessage = () => {
    socket.emit("send_message", { message });
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
    setmessageReceived(data.message)
      
    })
  }, [socket])

  return (
    <div className="App">
      <input placeholder='Message....' 
      onChange={(e)=>{
        setMessage(e.target.value)
      }}
      />
      <button onClick={sendmessage}>send message</button>

      <h1>Message:</h1>
      {messageReceived}
    </div>
  );
}

export default App;
