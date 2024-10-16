import React from 'react'
import "./Roadmap.css"

export const Roadmap = () => {
  return (
    <div>
         <div className='map-container'>
        <h2>Roadmap</h2>
       
            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729067077/Background_s5njm4.png" alt="roadmap"/>
        </div>
        <div className='map-container'>
            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729067753/Frame_25_okolio.png" alt="preview"/>
        </div>
        <div className='map-container'>
            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729077367/Frame_33_z1mkrs.png" alt="perview"/>
        </div>
        <div className='faq-container'>
            <h1>Frequently Asked Questions</h1>
            <div className='question-container'>
                <p><span><img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729078070/Container_unqk3k.png" alt="plus"/></span> What is EthAi?</p>
                <p><span><img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729078070/Container_unqk3k.png" alt="plus"/></span> How can EthAi can help me as a trader?</p>
                <p> <span><img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729078070/Container_unqk3k.png" alt="plus"/></span> Who can use EthAi?</p>
                <p><span><img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729078070/Container_unqk3k.png" alt="plus"/></span> How does EthAi track smart money flow?</p>
                <p><span><img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729078070/Container_unqk3k.png" alt="plus"/></span> How does ensure data security?</p>
            </div>
        </div>
        <div className='app-container'>
            <h1>Explore Our dApp</h1>
            <p>EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
            <button>Open dApp</button>
        </div>
    </div>
  )
}
