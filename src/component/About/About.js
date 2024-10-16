import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-container">
        <h2>About EthAi</h2>
        <p>At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.</p>
        <button>ReadMore</button>
        <div className='about-bottom-container'>
            <div className="feature1">
                <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729064908/graph_uetsxx.png" alt="graph"/>
                <h2>Stay ahead</h2>
                <p>No more guesswork—get clear, trustable insights.</p>
            </div>
            <div className="feature1">
                <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729065287/Vector_wfmbh9.png" alt="graph"/>
                <h2>Know Your Assets</h2>
                <p>Always stay on top of how your investments are performing.</p>
            </div>
            <div className="feature1">
                <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729065299/Vector_1_xnjms2.png" alt="graph"/>
                <h2>Simple, Not Overwhelming</h2>
                <p>Our tools are designed to make complex market analysis easy to understand and act on.</p>
            </div>
            <div className="feature1">
                <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729065312/Future_Technology_j7h9ys.png" alt="graph"/>
                <h2>Future-Proof</h2>
                <p>We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
            </div>
        </div>
    </div>
  )
}

export default About