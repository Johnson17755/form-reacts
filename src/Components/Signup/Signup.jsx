import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/Style.css';
// import Logo from '../Assets/continue with unstoppable domain.png';
import twitter from '../Assets/twitter.svg';
import google from '../Assets/google icon.svg';
import facebook from '../Assets/facebook.svg';
import domain from '../Assets/unstoppabledomains 1.svg';

import { BsEnvelopeAt } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai"


const Signup = () => {
  return (
    <section id='contact' className='contact-b'>
      <div className="background"></div>
      <Container>
        <Row>
          <Col>
            <div className="text">
              <h2>Login</h2>
              <p>Welcome back, we are delighted to have you</p>
              <div className="domain">
                <ul>
                  <li><a href="/"><img src={domain} alt="domain"/><b>Continue With Unstoppable Domain</b></a></li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <Row> 
          <Col>
              <div className="backg">
                <div className="social-network">
                  <ul className="social-list">
                    <li><a href="/"><img src={google} alt="google" className='img-fluid small-img'/></a></li>
                    <li><a href="/"><img src={facebook} alt="facebook" className='img-fluid small-img'/></a></li>
                    <li><a href="/"><img src={twitter} alt="twitter" className='img-fluid small-img'/></a></li>
                    <li><a href="/" className='btn'><b>Continue as Guest</b></a></li>
                  </ul>
                </div>
              </div>
            <div className="separator">
              <hr className="line" />
              <p>or</p>
              <hr className="line" />
            </div>
            <form className="form">
                <div className="flex-column">
                  <label>Email</label>
                </div>
                <div className="inputForm">
                  <BsEnvelopeAt className='icons'/>
                  <input type="email" className="input" placeholder="Enter your registered email address"/>
                </div>
                
                <div className="flex-column">
                  <label>Password</label>
                </div>
                <div className="inputForm">
                  <BiLockAlt className='icons'/>
                  <input type="password" className="input" placeholder="Enter your password"/>
                  <AiOutlineEyeInvisible className='icon'/>
                </div>
                
                <div className="flex-row">
                  <div>
                  <input type="checkbox" className='check'/>
                  <label>Save log in detail for future</label>
                  </div>
                </div>
                <button className="button-submit">Log In</button>
                <p className="p">Forgot password? 
                 <span className="span"><a href="/">Reset</a></span>
                </p>
                <p className="p">Don't have an account?
                 <span className="span"><a href="/">Sign Up</a></span>
                </p>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Signup;

