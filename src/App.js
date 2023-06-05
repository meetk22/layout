// import logo from './logo.svg';
import image1 from "./Rectangle 4176.jpg";
import image2 from './Group 2610149.png';
import image3 from './Group 2610147.png';
import image4 from './help_FILL1_wght300_GRAD0_opsz48 2.png';
import image5 from './noun-quick-3845593 1.png';
//import image5 from './Group 2610126.png';

import './App.css';

function App() {
  return (
    <div className="App">

      <img src={image1} alt='background' />
      <img src={image2} className="logo" alt="logo" />
      <img src={image4} className="question" alt="question" />
      <div className="formdiv">
      <p className="nameste">Nameste,</p>
      <h4>Fill in your details to pay Middha Dental Clinic</h4>
      <h4>in EMI's @ 0% interest</h4>
      <form className="form">
        <label for="mobileNumber">Mobile Number</label><br/>
        <input type="number" id="mobileNumber" name="mobileNumber" placeholder="Enter mobile number"/><br/>
        <div className="space"></div>
        <label for="yourName">Your Name</label><br/>
        <input type="text" id="yourName" name="yourName" placeholder="Enter your full name"/><br/>
        <label for="mobileNumber">Who are you applyfing for?</label><br/>
        <div className="space"></div>
        <label class="radio-inline">
        <input type="radio" name="option" value="myself"/> Myself
        </label>
        <label class="radio-inline">
        <input type="radio" name="option" value="familyMember"/> Family Member
        </label>
        <div className="space"></div>
        <select name="procedure" id="cars">
        <option value="Select a procedure">Select a procedure</option>
        <option value="Dental fillings">Dental fillings</option>
        <option value="Scaling">Scaling</option>
        <option value="Root canal">Root canal</option>
        <option value="Treatmen">Treatment</option>
        <option value="Teeth extraction">Teeth extraction</option>
        <option value="Dental implants">Dental implants</option>
        </select>
        <div className="space"></div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label for="vehicle1"> I agree to the privacy and T&C of SavelN</label><br></br>
        <div className="space"></div>
        </form>
        <img src={image3} alt="sfd" />
        </div>
        </div>
        );
}

export default App;
