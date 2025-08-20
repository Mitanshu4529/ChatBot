import RobotImage from '../assets/robot.png'
import UserImage from '../assets/user.png'
import './ChatMessage.css'

export function ChatMessage({message,sender}){//attributes are saved in props=properties, even shorter shortcut in javascript for destructuring instead of function ChatMessage(props)
//const message=props.message;
//const sender=props.sender;
//const {message,sender}=props; //this is called destructuring which means that i am storing props in a variable name messsage 
/*if(sender==="robot"){
  return(
    <div>
      <img src="robot.png" width="50"/>
      {message}
    </div>
    );
}*/
//the shortcut for that long if statement is like {if x is true then y is the answer} so it goes like {x==="k"&&y==="choco"} mtlb agr x=k then y ko bana do choco
  return (
    <div className={sender==='user'?'chat-message-user':'chat-message-robot'}>
      {sender==="robot"&&(
        <img src={RobotImage}  
        className="chat-message-profile"
        />
      )}
      <div className="chat-message-text">
        {message}
      </div>
      {sender==="user"&&
        (<img src={UserImage} 
        className="chat-message-profile"
        />
      )} 
    </div>
  );// we used div here because we want it to appear below the text box so it will take a entire line for itself, && is called a guard statement
}