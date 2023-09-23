import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/Style.css';
import Logo from '../Assets/continue with unstoppable domain.png';
import twitter from '../Assets/twitter.svg';
import google from '../Assets/google icon.svg';
import facebook from '../Assets/facebook.svg';
import { BsEnvelopeAt } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";



const Signup = () => {
  return (
    <section id='contact' className='contact-b'>
      <Container>
        <Row>
          <Col lg={{span: 8, offset:2 }} className='text-center'>
            <div className="text">
              <h2>Login</h2>
              <p>Welcome back, we are delighted to have you</p>
              <img src={Logo} alt="logo" className='img-fluid'/>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center"> 
        <Col lg={6} className="center-content">
              <div className="backg">
                <div className="social-network">
                  <ul className="social-list d-flex">
                    <li><a href="/"><img src={google} alt="google" className='img-fluid small-img'/></a></li>
                    <li><a href="/"><img src={twitter} alt="twitter" className='img-fluid small-img'/></a></li>
                    <li><a href="/"><img src={facebook} alt="facebook" className='img-fluid small-img more'/></a></li>
                  </ul>
                </div>
              </div>
            <div class="separator">
              <hr class="line" />
              <p>or</p>
              <hr class="line" />
            </div>

            <form class="form">
                <div class="flex-column">
                  <label>Email</label>
                </div>
                <div class="inputForm">
                  <BsEnvelopeAt />
                  <input type="text" class="input" placeholder="Enter your register email address"/>
                </div>
                
                <div class="flex-column">
                  <label>Password</label>
                </div>
                <div class="inputForm">
                  <BiLockAlt />
                  <input type="password" class="input" placeholder="Enter your register email address"/>
                  <svg className='icon' viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
                </div>
                
                <div class="flex-row">
                  <div>
                  <input type="checkbox"/>
                  <label>Save log in detail for future</label>
                  </div>
                </div>
                <button class="button-submit">Log In</button>
                <p class="p">Forgot password? 
                 <span class="span"><a href="/">Reset</a></span>
                </p>
                <p class="p">Don't have an account?
                 <span class="span"><a href="/">Sign Up</a></span>
                </p>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Signup;

