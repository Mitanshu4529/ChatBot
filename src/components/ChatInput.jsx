import { useState } from "react";
import {Chatbot} from 'supersimpledev'
import './ChatInput.css'

export function ChatInput({chatMessages,setChatMessages}){  //each component name must start with a capital letter this   is called pascalcase 
  const[inputText,setInputText]=useState('');  //react.usestate is a hook. hook lets us insert react features into our component.every hook starts with a use keyword like useState,useEffect,useRef
  //useeffect lets us run some code after the component is created or updated
  //it has been set to empty string as originally it is empty in the input box
        
  function saveInputText(event){
    setInputText(event.target.value)  
    //this gives us the element that we're typing in. s basically what happens is that react will give us the access to this below <input> automatically using event.target
    //now we want to store this data from the input therefore we will use state.state is useed to save data that changes over time
  }

  function sendMessage(){
    /*chatMessages.push({  //in react we should not update the data directly like we did here by just pushing we should always use a state function
    message:'test',
    sender:'user',
    id:crypto.randomUUID()
    });
    console.log(chatMessages);
    what we should have done is this and and and in reacct we shuld not just modify the data directly we should first copy the data and then modify the data*/

    const newChatMessages=[
      ...chatMessages,
      {
        message:inputText,
        sender:'user',
        id:crypto.randomUUID()
      }
    ];

    // setChatMessages([//by putting [] we create new array and by the spread operator that is ...xyz will take the values from the array and copies them in the new array 
    //   ...chatMessages,
    //         {
    //           message:inputText,
    //           sender:'user',
    //           id:crypto.randomUUID()
    //         }
    //       ]);
    setChatMessages(newChatMessages);
      const response=Chatbot.getResponse(inputText);
      setChatMessages([//by putting [] we create new array and by the spread operator that is ...xyz will take the values from the array and copies them in the new array 
        ...newChatMessages,
        //...chatMessages, here i cant use chatMessages because that wont store our message in the input box so we need to store it in a variable
        {
          message:response,
          sender:'robot',
          id:crypto.randomUUID()
        }
      ]);
    setInputText('');  //but here what i should know is that state dosent update immediately it updates after the code is finished
  }

  return (// as a fragment we cant style it with css so we need a div
    <div className="chat-input-container" > 
      <input 
        placeholder="ENTER YOUR MESSAGE FOR CHATBOT" 
        size="35" 
        onChange={saveInputText}    //this will run a function when we change the text inside an <input>
        value={inputText}  //changes the text inside this <input>.this is known as controlled input
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button" //react is basically a javascript code and javascript already has a feature called class so here we use className. class is a reseerved word
      >Send</button>
    </div>
  );//if i dont want to use an extra div which will make my website look nicer so i have a way in react by creating a fragment which is just like a closing and a opening bracket  <></>  as above
}