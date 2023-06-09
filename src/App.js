import React from 'react';
import './App.css'
import image1 from './Rectangle 4176-overlay-overlay.jpg';
import image2 from './Group 2610147.png';
import image4 from './security1 1.png';
import image5 from './security2 1.png';
import image6 from './lock-FILL1-wght400-GRAD0-opsz48.jpg'

import './App.css';

function App() {
  return (
    <div className="app">
      <img className="logo" src={image1} alt='logo'></img>
      <div className='layout'>
      <div className='head'>
      <p className="nameste">Nameste,</p>
      <h4>Fill in your details to pay Middha Dental Clinic</h4>
      <h4>in EMI's @ 0% interest</h4>
      </div>
      <div className='form'>
        <label for="mobileNumber">Mobile Number</label><br/>
        <input type="number" id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number"/><br/>
        <label for="yourName">Your Name</label><br/>
        <input type="text" id="yourName" name="yourName" placeholder="Enter your full name"/><br/>
        <label for="mobileNumber">Who are you applyfing for?</label><br/>
        <div>
        <label class="radio">
        <input type="radio" name="option" value="myself"/> Myself
        </label>
        <label class="radio">
        <input type="radio" name="option" value="familyMember"/> Family Member
        </label>
        </div>
        <select name="procedure" id="procedure">
        <option value="Select a procedure">Select a procedure</option>
        <option value="Dental fillings">Dental fillings</option>
        <option value="Scaling">Scaling</option>
        <option value="Root canal">Root canal</option>
        <option value="Treatmen">Treatment</option>
        <option value="Teeth extraction">Teeth extraction</option>
        <option value="Dental implants">Dental implants</option>
        </select>

        <div  >
        <input type="checkbox" id="agree" name="agree" value="agree"/>
        <label for="agree"> I agree to the privacy and T&C of SavelN</label><br></br>
        </div>

        </div>
        </div>

        <img className='button' src={image2} alt='continue'></img>

        
        <div className='security'>
        
        <img src={image6} alt='security'></img>
        <img src={image4} alt='security'></img>
        <img src={image5} alt='security'></img>
        </div>
        
    </div>
  )
}

export default App;