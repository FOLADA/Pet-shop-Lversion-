import { Link } from "react-router-dom";
import "../App.css";
import Paypal from "../assets/images/paypal.png"
import Visa from "../assets/images/visa.png"
import Master from "../assets/images/master.png"
import Credit from "../assets/images/credit.png"
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

const Checkout = () => { 
    const [phone, setPhone] = useState('');
    
    return (
        <div className="checkout-container">
            <div className="form-container">
                <h2 className="form-title">Checkout</h2>

                <div className="input-group">
                    <h3>Name</h3>
                    <input className="input-field" type="text" placeholder="Please enter your name" />
                </div>

                <div className="input-group">
                    <h3>Surname</h3>
                    <input className="input-field" type="text" placeholder="Please enter your surname" />
                </div>

                <div className="input-group">
                    <h3>Identity</h3>
                    <input className="input-field" type="text" placeholder="Please enter your ID" />
                </div>

                <div className="input-group">
                    <h3>Phone Number</h3>
                    <PhoneInput
                        country={'us'}
                        value={phone}
                        onChange={(value) => setPhone(value)}
                    />
                </div>

                <div className="payment-options">
    <h3>Choose the payment</h3>
    <div className="payment-icons">
        <img src={Paypal} alt="PayPal" />
        <img src={Visa} alt="Visa" />
        <img src={Master} alt="MasterCard" />
        <img src={Credit} alt="Credit Card" />
    </div>
</div>

                <Link to="/after">
                    <button className="submit-btn">Submit</button>
                </Link>
            </div>
        </div>
    );
}

export default Checkout;