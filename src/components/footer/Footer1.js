import React from 'react'
import "./Footer1.css"
import Footer2 from './Footer2'
function Footer1() {
  return (
      <>
    <div className='footer1__container'>
        <div className='footer1'>
            <div className='footer1__start'>
            <h2>Get started with Slack</h2>
            <div className='footer1__mid'>
                <div className='footer1__mid__left'>
                    <div className='footer1__letter'>1</div>
                    <h3>Sign up</h3>
                   <span>Create a new Slack workspace</span> 
                   <h4> in just a 
                   few moments. It's free to try for <br/> teams of
                   any size
                   </h4>
                </div>
                <div className='footer1__mid__mid'>
                    <div className='footer1__letter'>2</div>
                    <h3>Invite your colleagues</h3>
                   <h4>Slack is better together (no, really, it;s a <br/>
                   bit underwhelming by yourself), and it's <br/>
                   easy to invite your team.
                   </h4>
                </div>
                <div className='footer1__mid__right'>
                    <div className='footer1__letter'>3</div>
                    <h3>Give it a go</h3>
                   <h4>Run a project, coordinate with your team <br/>
                   or just talk things through. Slack is a blank <br/>
                   canvas for teamwork.
                   </h4>
                </div>
            </div>
        </div>
        <div className='footer1__end'>
            <div className='container'>
                <div className='card1'>
                    <img 
                    className='card1__img'
                    src="https://a.slack-edge.com/218a/marketing/img/downloads/screenshots/ios/slack-ios.png"
                    alt=""/>  
                    <h4>Webinar</h4>
                    <h2>What is Slack?</h2> 
                    <div className='card__links'>WATCH NOW ⇢</div>
                </div>
                <div className='card1'>
                    <img 
                    className='card2__img'
                    src="https://i.pinimg.com/originals/d5/9c/90/d59c9002030448f1193adf7d7600a52a.png"
                    alt=""/>
                    <h4>Customer stories</h4> 
                    <h2>Get inspired by real Slack customers</h2>
                    <div className='card__links'>READ STORIES ⇢</div>
                </div>
                <div className='card1'>
                    <img className='card3__img'
                    src="https://cutewallpaper.org/21/megaphone/Police-by-Yehor-Vlasenko.png"
                    alt=""/>
                    <h4>Solutions</h4>
                    <h2>Learn how Slack can work for your team</h2>
                    <div className='card__links'>EXPLORE SOLUTIONS ⇢</div>
                </div>
                <div className='card1'>
                    <img 
                    className='card4__img'
                    src="https://cdn2.iconfinder.com/data/icons/military-cartoon-2/512/d320_15-512.png"
                    alt=""/>
                    <h4>How-to</h4>
                    <h2>Start off on the right foot with Slack 101</h2>
                    <div className='card__links'>LEARN HOW ⇢</div>
                </div>
            </div>
        </div>
        </div>
    </div>
    <div className='footer__container'>
        <div className='footer__main'>
            <h1>Welcome to where the future works</h1>
            <div className='footer__buttons'>
                <button className="footer__tryforfree">TRY FOR FREE</button>
                <button className="footer__talktosales">TALK TO SALES</button>
            </div>
            <div className='footer__links'>
            <div className='footer__link'>
                <img className='footer__link1__img'
                src="https://cdn.usbrandcolors.com/images/logos/slack-logo.png"
                alt=""/>
            </div>
            <div className='footer__link'>WHY SLACK ?
            <span>Slack vs email</span>
            <span>Channels</span>
            <span>Engagement</span>
            <span>Scale</span>
            <span>Watch the dem</span>
            </div>
            <div className='footer__link'>PRODUCT
            <span>Features</span>
            <span>Integrations</span>
            <span>Enterprise</span>
            <span>Solutions</span>
            </div>
            <div className='footer__link'>PRICING
            <span>Subscriptions</span>
            <span>Paid vs free</span>
            </div>
            <div className='footer__link'>RESOURCES
            <span>Partners</span>
            <span>Developers</span>
            <span>Community</span>
            <span>Apps</span>
            <span>Blog</span>
            <span>Help Center</span>
            <span>Events</span>
            </div>
            <div className='footer__link'>COMPANY
            <span>About us</span>
            <span>Leadership</span>
            <span>Invstor relations</span>
            <span>News</span>
            <span>Media kit</span>
            <span>Careers</span>
            </div>

            </div>
        </div>
        </div>
        <hr className='horizontal__line'></hr>
        <Footer2/>
        </>
  )
}

export default Footer1