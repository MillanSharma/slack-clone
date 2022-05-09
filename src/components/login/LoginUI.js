import { Search } from '@mui/icons-material'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Footer1 from '../footer/Footer1'
import "./LoginUI.css"
import { auth, provider } from '../../firebase'
function LoginUI() {
const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithPopup(provider).catch(
        (error)=>{
            alert(error.message)
        }
    )
    return(
    <>
        <LoginContainer>
    <LoginInnerContainer>
        <img src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
        alt=""/>
        <h1>Sign in to Slack</h1>
        <p>millan.slack.com</p>
    <button onClick={signIn}>Sign in with Google</button>
    </LoginInnerContainer>
</LoginContainer>
</>)

}

const [show, handleShow]=useState(false);
    
const transitionNavBar=()=>{
    if(window.scrollY>100){
      console.log("here")
        handleShow(true);
    }
    else{
        handleShow(false)
    }
}
useEffect(() => {
  window.addEventListener('scroll',
  transitionNavBar)

  return () => {
    window.removeEventListener('scroll',transitionNavBar)
  }
}, [])



return (
    <>
    <div className="login__page">
        <div className="navbar">
        <div className={`nav ${true && "nav__scrolled"}`}>
            <div className='nav__left'>
                <img  className='nav__logo'
                src="https://cdn.usbrandcolors.com/images/logos/slack-logo.png"
                alt=""/>
            </div>
            <div className='nav__middle'>
                <h4>Product</h4>
                <h4>Solutions</h4>
                <h4>Enterprise</h4>
                <h4>Resources</h4>
                <h4>Pricing</h4>

            </div>
            <div className='nav__right'>
                <div></div>
                <Search className='nav__searchicon'/>
                <button className='nav__signin' onClick={signIn}>Sign in</button>
                <button className='nav__talktosales'>TALK TO SALES</button>
                <button className='nav__tryforfree'>TRY FOR FREE</button>

            </div>
        </div>
        </div>
<div className='nav__first'>
    <div className='nav__firstleft'>
        <div className='nav__firstleft__top'>
            <h1>Slack is your digital HQ</h1>
        </div>
        <div className='nav__firstleft__bottom'>
            <h4>Transform the way that you work with one place for
                everyone and everything that you need to get things done.
            </h4>
        </div>
        <div className='nav__firstleft__buttons'>
        <button className='nav__firstleft__tryforfree'>TRY FOR FREE</button>
        <button 
        onClick={signIn}
        className='nav__signupwithgoogle'>SIGN UP WITH GOOGLE</button>
        </div>
    </div>
    <div className='nav__firstright'>
        <img 
        className='nav__firstright__img'
        src="https://a.slack-edge.com/13f94ee/marketing/img/homepage/self-serve-campaign/hero/img-campaign-hero.IN.jpg"
        alt=""/>
    </div>

</div>
<div className='nav__second'>
    <img 
    className='nav__second__img'
    src="https://www.freepnglogos.com/uploads/fox-logotype-black-text-png-0.png"
    alt=""/>
     <img 
     className='nav__second__img'
     src="https://www.facebook.com/images/fb_icon_325x325.png"
    alt=""/>
     <img 
     className='nav__second__img'
     src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
    alt=""/>
     <img 
     className='nav__second__img'
     src="https://1000logos.net/wp-content/uploads/2020/09/Devacurl-Logo.png"
    alt=""/>
     <img 
     className='nav__second__img'
     src="https://logos-download.com/wp-content/uploads/2018/09/Kiva_logo.png"
    alt=""/>
     <img 
     className='nav__second__img'
     src="https://www.logolynx.com/images/logolynx/98/98426946722a661a278aeffe719c3008.png"
    alt=""/>
     <img 
     className='nav__second__img'
     src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG16.png"
    alt=""/>
</div>
<div className='nav__third'>
    <div className='nav__third__left'>
    <iframe src="https://www.youtube-nocookie.com/embed/ZDs056YM4fc?vq=hd1080&autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&iv_load_policy=3&theme=light&fs=0&color=white&autohide=0&controls=0&disablekb=1" width="550" height="320" frameBorder="0"></iframe>
    </div>
    <div className='nav__third__right'>
        <h3>Now is your moment to build a <br/> better tomorrow</h3>
        <h4>We've seen what the future can be. Now it's time to decide <br/>what it will be.</h4>
    <button className='nav__third__right_watch'>WATCH VIDEO</button>
    </div>
</div>
<div className='banner'>
    <div className='banner__first'>
    <div className='banner__first__left'>
    <h3>Move faster by organising your <br/>
    work life
    </h3>
    <h4>The key to productivity in Slack is organised spaces called <br/>
    channels - a different one for everything that you're <br/>
    working on. With all the poeple, messages and files <br/>
    related toa tompi in one place, your can move much faster.
    </h4>
    <h4>Learn more about channels </h4>
    <div className='banner__first__left__channels'>
        <div className='banner__first_channel1'>
            <h3>What are channels</h3>
            <button className='banner__inside__button1'>?</button>
        </div>
        <div className='banner__first_channel2'> <h3>
            Create a Channel</h3>
                <button className='banner__inside__button2'>▶</button>
                </div>
    </div>
</div>
<div className='banner__first__right'>
    <video className="banner__first__video" 
   aria-describedby='move-faster'
   autoPlay loop muted
    playsInline poster="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/static/img-section-01-static.jpg">
        <source src = "https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/video/img-hp-section-01.mp4"
         type="video/mp4"/>
     </video>
</div>
</div>

    <div className='banner__second'>
        <div className='bannner__second__left'>
            <video className="banner__first__video"
            aria-describedby='move-faster'
            autoPlay loop muted
            playsInline poster="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/static/img-section-02-static.jpg">
                <source src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/video/img-hp-section-02.mp4"/>
                </video>

        </div>
        <div className='banner__second__right'>
        <h3>Focus your time, on your own terms
        </h3>
        <h4>Give yourself the flexiblity to work when, where and how you <br/>
             work best. Take control of notifications, collaborate live or on <br/>
            your own time, and find answers in conversations from across<br/>
            your company
         </h4>
    <h4>Support a more flexible work schedule in Slack</h4>
    <div className='banner__first__right__channel'>
        <div className='banner__first_channel2'>
            <h3>Pouse notifications</h3>
            <button className='banner__inside__button1'>▶</button>
        </div>
        </div>
    </div>
    </div>
    <div className='banner__first'>
    <div className='banner__first__left'>
    <h3>Simplify teamwork for everyone
    </h3>
    <h4>Give everyone that you work with - both inside and outside <br/>
    your company - a more productive way to stay in sync.<br/>
    Respond faster with emoji, keep conversations focused in <br/>
    channels and simplify all your communication into one place
    </h4>
    <h4>Learn how to work with external partners in Slack</h4>
    <div className='banner__first__left__channels'>
        <div className='banner__first_channel1'>
            <h3>Add external partners to a channel</h3>
            <button className='banner__inside__button1'>➕</button>
        </div>
        <div className='banner__first_channel2'> <h3>
            Brainstorm in a channel</h3>
                <button className='banner__inside__button2'>🤔</button>
                </div>
    </div>
</div>
<div className='banner__first__right'>
<video className="banner__first__video"
            aria-describedby='move-faster'
            autoPlay loop muted
            playsInline poster="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/static/img-section-03-static.jpg">
                <source src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/video/img-hp-section-03.mp4"/>
                </video>
</div>
</div>
    </div>
<Footer1 />
    </div>
    </>
  )
}

export default LoginUI
const LoginContainer = styled.div`
background-color: #f8f8f8;
height: 100vh;
display: grid;
place-items: center;

`
const LoginInnerContainer = styled.div`
background-color: white;
padding: 100px;
text-align: center;
border-radius:10px;
box-shadow:  0 1px 3px rgba(0,0,0,0.12), 0 ,1px 2px rgba(0,0,0,1);
>img{
    object-fit:contain;
    height:100px;
    margin-bottom:4px
}
>button {
    margin-top:50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
    }
`