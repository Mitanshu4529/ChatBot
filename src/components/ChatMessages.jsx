import { useRef,useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css'

function ChatMessages({chatMessages}){
  /*const chatMessages=[{  
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
  }]; */

  // const chatMessage=array[0];//this is the current data
  // const setChatMessages=array[1];//second value of this array is a function that updates data 
  //const[chatMessages,setChatMessages]=array; //destructuring an array better than above format and evbetter format than this is  just directly writing it above 
  
  const chatMessagesRef=useRef(null);//automatically saves an html element from the componencontainer with special react features
  useEffect(()=>{  //isse ye hoga ki jaise hi message kru to screen automatically latest message tchali jayegi if woh screen k bahar jaa rha hoga
    const containerElement=chatMessagesRef.current;
    if(containerElement){
      containerElement.scrollTop=containerElement.scrollHeight;
    }
  },[chatMessages])//this array controls when useEffect runs and if it is empty then it runs only once

  return ( //keep this all in a fragment so that it remains together to niche <> dala hai
    <div className="chat-messages-container"
      ref={chatMessagesRef}> 
        {chatMessages.map((chatMessage)=>{  //chatMessage is he re passed as a parameter //arrow function: works same as normal function but is shorter, .map() goes through each value and runs the function and converts it to a new value
          return(//onClick is the event and the sendMessage is the event-handler the work ofevent handlerto run a function when we interact with the website and the event prop always starts with on andcamelcase:i.e., first word is lowercase and then all begin with capital that's y onClick C is capital
            <ChatMessage
              message={chatMessage.message}  //curly brackets k ander kuch bhi jayega woh as a result save hoga inside the prop
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          );
        })}
    </div>
  );
}

export default ChatMessages; //useful when we want to export only 1 thing