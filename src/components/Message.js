import React from 'react'
import styled from 'styled-components'
function Message({message, timestamp,user,userImage,}) {

  return (
      <>
    <MessageContainer>
        <MessageInfo>
        <img src={userImage} alt=""/>
            <h4>
                
                {user} {" "} 
                <span>{new Date(timestamp?.toDate()).toLocaleTimeString(
                    'en-US',{hour:'2-digit', minute:'2-digit', hour12:true}
                )}</span>
              
            </h4>
        </MessageInfo>
        <MessageText>
            <h4>{message}</h4>
        </MessageText>
    </MessageContainer>    
    </>
  )
}

export default Message

const MessageContainer = styled.div`

padding:20px;
background-color: white;
border-left: none;
border-bottom-right-radius: 10px;
width: 80%;
margin-top: 5px;
>img{
    height: 30px;
    border-radius: 8px;
}
`
const MessageInfo = styled.div`
>img{
    width: 40px;
    height: 40px;
    object-fit: contain;
    border-radius: 5px;
}

display: flex;
margin-right: 50px;
width: 240px;
>h4 > span{
    display: flex;
    align-items:flex-start;
    justify-content: flex-start;
    color: gray;
    font-weight: 300;
    margin-top: 5px;
    font-size: 10px;
    margin-left: 10px;
}
>h4{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 8px;
    margin-left: 8px;
    
}
`
const MessageText = styled.div`
color: black;
display: flex;
flex-wrap: wrap;
margin-left: 100px;
margin-right: 50px;
>h4{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: -25px;
    margin-left: -52px;
    font-weight: 300;
    text-align: left;
}
`