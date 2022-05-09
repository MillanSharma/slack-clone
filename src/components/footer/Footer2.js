import React from 'react'
import "./Footer2.css"
function Footer2() {
  return (
    <div className='container1'>
        <div className='left__container'>
            <h5>Status</h5>
            <h5>Privacy</h5>
            <h5>Terms</h5>
            <h5>Contact us</h5>
            <h5>Change region</h5>
        </div>
        <div className='right__container'>
            <h4>Download Slack</h4>
            <img 
            className='right__container__img'
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
            alt=""
            />
            <img 
            className='right__container__img'
            src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"
            alt=""
            />
            <img 
            className='right__container__img'
            src="https://cdn-icons-png.flaticon.com/512/152/152810.png"
            alt=""
            />
            <img 
            className='right__container__img'
            src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
            alt=""
            />
        </div>
        {/* <h6>@slack clone, not much here because this is not a legit website.</h6> */}
    </div>
  )
}

export default Footer2