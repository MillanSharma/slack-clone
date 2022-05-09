import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { selectRoomId } from '../features/appSlice';
import ChatInput from './ChatInput';

import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from './Message';
function Chat() {
  const chatRef = useRef(null)
  const roomId = useSelector(selectRoomId);
  const [roomDetails]= useDocument(
    roomId && db.collection('rooms').doc(roomId)
  )
  const [roomMessage,loading] = useCollection(
    roomId && 
    db
    .collection('rooms')
    .doc(roomId)
    .collection("messages")
    .orderBy("timestamp","asc")
  )
  useEffect(()=>{
    chatRef?.current?.scrollIntoView({
      behaviour:"smooth",
    });
  },[roomId,loading])
  
  return (
    <ChatContainer>
    {roomDetails && roomMessage && (
      <>
       <Header>

         <HeaderLeft>
          <h4><strong>#{roomDetails?.data().name}</strong></h4>
          <StarBorderOutlined />
         </HeaderLeft>
         <HeaderRight>
           <p>
             <InfoOutlined />Details
           </p>
            </HeaderRight>
       </Header>
       <ChatMessages>
        {roomMessage?.docs.map(doc =>{
          const {message,timestamp, user, userImage}= doc.data()
          return(
            <Message 
            key={doc.id}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}/>
            )})}
<ChatBottom ref = {chatRef}/>

       </ChatMessages>
       <ChatInput 
       chatRef = {chatRef}
       channelId = {roomId}
       channelName = {roomDetails?.data().name}
       />

       </>
)}
    </ChatContainer>
  )
}

export default Chat
const ChatBottom = styled.div`
padding-bottom: 200px;
`
const ChatContainer = styled.div`
flex:0.7;
flex-grow: 1;
overflow: scroll;
margin-top: 60px;
 
`
const Header= styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
border-bottom: 1px solid lightgray;
`
const HeaderRight = styled.div`
>p{
  align-items: center;
  display: flex;
  font-size: 14px;
}
>p > .MuiSvgIcon-root{
  margin-right: 5px !important;
  font-size: 16px;
}

`
const HeaderLeft = styled.div`
display: flex;
align-items: center;

>h4{
  display: flex;
  text-transform: lowercase;
  margin-right: 10px;
}
>h4 > .MuiSvgIcon-root {
  margin-left: 20px;
  font-size: 18px;
}
`
const ChatMessages = styled.div`

`