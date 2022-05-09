import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import firebase from 'firebase/compat/app';
import styled from 'styled-components'
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
function ChatInput({channelId, channelName,chatRef}) {
    const [input,setInput] = useState('');
    const [user] = useAuthState(auth)
    const sendMessage=(e)=>{
        e.preventDefault(); //prevents refresh on form
        if(!channelId){
            return false;
        }
        db.collection('rooms').doc(channelId).collection("messages").add({
            message:input,
            timestamp:firebase.firestore.Timestamp.fromDate(new Date()),
            user:user.displayName,
            userImage:
            user.photoURL,
        });
        chatRef.current.scrollIntoView({
            behaviour:"smooth"
        });
        setInput('')
    }
  return (
    <ChatInputComponent>
        <form>
            <input
            onChange={(e)=>setInput(e.target.value)}
            value={input}
            placeholder={`Message as #${channelName}`}/>
            <button hidden type="submit"
            onClick={sendMessage}
            >SEND</button>
        </form>

    </ChatInputComponent>
  )
}

export default ChatInput
const ChatInputComponent  = styled.div`
border-radius: 20px;
>form{
    position: relative;
    display: flex;
    justify-content: center;
}
>form > input{
    position: fixed;
    bottom:30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
> form  >button {
    display: none !important;
}
}
`

