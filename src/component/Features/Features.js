import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div>
    <div className='feature-container'>
        <div className='first-feature'>
            <div className='box-container'>
              <div className='mini-box-container'></div>
               </div>
            <h1>Trade Optimizer</h1>
            <p>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity. </p>
        </div>
        <div className='second-feature'>
           <div className='min-second-feature'>
            <h1>Market Insight</h1>
            <p>Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
           </div>
           <div className='min-second-feature1'>

           </div>
        </div>
        <div className='third-feature'>
        <div className='box-container'>
              <div className='mini-box-container'></div>
               </div>
            <h1>Risk Guard</h1>
            <p>Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</p>
        </div>
    </div>
    <div className='bottom-features'>
    <div className='fourth-feature'>
    <h1>Portfolio Sync</h1>
    <p>Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed</p>
  </div>
  <div className='fifth-feature'>
    <div>
    <h1>opportunity Scout</h1>
    <p>Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</p>
    </div>
    <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729062960/Group_s3rvhc.png" alt="glass"/>
     </div>
  </div>
  </div>
  )
}

export default Features