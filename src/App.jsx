import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'  as im not using these both so i cant add these bcoz it throws an error
import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage'
import ChatMessages from './components/ChatMessages' //default export dosent need curly brackets
import RobotImage from './assets/robot.png'
import UserImage from './assets/user.png'
import './App.css'

function App(){
  const [chatMessages,setChatMessages]=useState([{  //now we will use state so that we can put the dadirectly into html so that if i update the data it will update the html.
  //now here i need to use state uplifting which means that it is like a shared state between multipcomponents //here i also dont need to write react.usestate because i have imported use state so removiut must work
    message:"Hello Chatbot",
    sender:"user",
    id:"id1"
  },{
    message:"Hello! How Can I Help You?",
    sender:"robot",
    id:'id2'
  },{
    message:"Can You Get Me Todays Date",
    sender:"user",
    id:"id3"
  },{
    message:"Today is July 18",
    sender:"robot",
    id:"id4"
  }]);  
  return(//we cant style a fragment with css so we need a div
    <div className="app-container">
      <ChatMessages  //this should be written like ChatMessagesComponent
        chatMessages={chatMessages}  //chatMessagesprop={chatMessagesArray} but we dont do that because in react generally we follow this naming convention that goes like giving same names which might get confusing for first but later u get used to it
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App