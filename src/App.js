
import React,{ useEffect, useState } from 'react';

import './App.css';
import Chat from './Chat';
import Sidebar from'./Sidebar';
import axios from './axios';

import Pusher from 'pusher-js';
function App() {
  //fetch all the messages when the application loads up --axios
  const [messages, setMessages] = useState([]);
  useEffect(() =>{
    axios.get('/api/messages/sync')
    .then((response)=>{
     
      setMessages(response.data);
    })

  })
  //loop through the array and display the messages on the chat
  //append the new message to existing array and updatethe chat
  //subscribe to the messages channel on pusher and bind to inserted event to get the event and the change when it occurs in the database
  //
  useEffect(() => {
    const pusher = new Pusher('e85842f3b311ed6b933a', {
      cluster: 'mt1'
    });
    const channel = pusher.subscribe('messages');
    channel.bind("inserted", (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
      console.log(newMessage);
      //cleaner function to unsubscribe, ensure wehave only one subscriber
      return () => {
        channel.unbind_all();
        channel.unsubscribe()
      }
   
    });

  }, [messages]);

  //runs once when the app loads 
  //console.log(messages);
  //subscribe to the messages channel
 


  return (
    <div className="app">
      <div className='app_body'>
      <Sidebar />
     <Chat messages={messages}/>
      </div>

    </div>
  );
}

export default App;
