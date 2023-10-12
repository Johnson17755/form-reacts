import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Styles/Style.css';
import twitter from '../Assets/twitter.svg';
import google from '../Assets/google icon.svg';
import facebook from '../Assets/facebook.svg';
import domain from '../Assets/unstoppabledomains 1.svg';

import { BiUser } from "react-icons/bi";
import { BsEnvelopeAt } from "react-icons/bs";
import { BiLockAlt } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";



const Signup = () => {
  const [action, setAction] = useState(() => {
    const savedAction = localStorage.getItem('action');
    return savedAction || 'Login';
  });

  // Update localStorage when the state changes
  useEffect(() => {
    localStorage.setItem('action', action);
  }, [action]);

  return (
    <section id='contact' className='contact-b'>
      <div className="background"></div>
      <Container>
        <Row>
          <Col>
            <div className="text">
              <h2>{action}</h2>
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
                    <li><a href="/"><img src={google} alt="google" className='img-fluid'/></a></li>
                    <li><a href="/"><img src={facebook} alt="facebook" className='img-fluid'/></a></li>
                    <li><a href="/"><img src={twitter} alt="twitter" className='img-fluid'/></a></li>
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
                {action === "Login" ? (
                    <div></div>
                  ) : (
                    <div>
                      <div className="flex-column">
                        <label>Username</label> 
                      </div>
                        <div className="inputForm">
                          <BiUser className='icons'/>
                          <input type="text" className="input" placeholder="Enter your username"/>
                        </div>
                    </div>
                  )}

                <div className="flex-column">
                  <label>Email Address</label>
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
                                
                {action === "Sign Up" ? (
                 <div className="flex-row">
                  <div>
                    <input type="checkbox" className='checked' />
                    <span className='span'>I agree to the <a href="/">Terms and Policies of Afrocarb</a></span>
                  </div>
                 </div>
                ) : (
                  <div className="flex-row">
                    <div>
                      <input type="checkbox" className='checked' />
                      <label>Save log in detail for the future</label>
                    </div>
                  </div>
                )}

              <button
               className={`button-submit ${action === 'Login' ? 'submit' : 'submit'}`}
               onClick={() => { setAction(action === 'Login' ? 'Sign Up' : 'Login') }}
               >
              {action === 'Login' ? 'Log In' : 'Sign Up'}
              </button>
                
                {action === "Sign Up" ? (
                  <div>
                    <p className="p">Already have an account with us? 
                    <span className="span"><a href="/">Sign in</a></span>
                    </p>
                  </div>
                  ) : (
                <div>
                  <p className="p">Forgot password? 
                   <span className="span"><a href="/">Reset</a></span>
                  </p>
                  <p className="p">Don't have an account?
                   <span className="span">
                   <a href="/" onClick={(event) => {
                      event.preventDefault();
                      setAction(action === 'Login' ? 'Sign Up' : 'Login');
                     }}>
                    {action === 'Login' ? 'Sign Up' : 'Sign up'}
                   </a>
                  </span>
                  </p>
                </div>
                  )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Signup;
