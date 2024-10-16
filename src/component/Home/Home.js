import { Component } from "react"; 
import './Home.css'
import Features from "../Features/Features";
import About from "../About/About";
import { Roadmap } from "../Roadmap/Roadmap";

class Home extends Component{
    render(){
        return(
            <div className="old-main-container">
            <div className="main-container">
                <div className="top-container">
                    <div className="option-container">
                        <p>Features</p>
                        <p>Why Us</p>
                        <p>Tokenomics</p>
                        <p>Roadmap</p>
                    </div>
                   <div className="btn-container">
                   <button className="login-btn">Login</button>
                    <button className="whitepaper-btn">Whitepaper</button>
                    
                   </div>
                </div>
                <div className="second-container">
                    <h1>when Innovation Meets <span>Investment</span></h1>
                    <p>Empowering Trading Through Advanced Technologies</p>
                    <button>Open dApp</button>
                </div>
            </div>
            <Features/>
            <About/>
            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729066514/Container_hanwjt.png" alt="tokemonics" className="new-image"/>
            <Roadmap/>
            <img src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1729078975/Container_2_zjulqs.png" alt="footer" className="footer-section"/>
            </div>
        )
    }
}

export default Home