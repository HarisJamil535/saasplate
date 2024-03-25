import React from 'react'
import css from './Footer.module.scss'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";


const Footer = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <div className={css.leftcontainer}>
                    <h1>Logo</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>

                    <div className={css.inputandbtn}>
                        <input type='text' placeholder='E-mail' />
                        <button>Subscribe</button>
                    </div>
                    <p className={css.unsub} >You can unsubscribe at anytime</p>
                </div>
                <div className={css.rightcontainer}>
                    <div className={css.col1}>
                        <h3>Company</h3>
                        <p>Explore Job</p>
                        <p>Features</p>
                        <p>About Us</p>
                        <p>Creers</p>
                    </div>
                    <div className={css.col2}>
                        <h3>Help</h3>
                        <p>Contact Support</p>
                        <p>Product FAQs</p>
                        <p>How To Tutorials</p>
                        <p>Account</p>
                    </div>
                    <div className={css.col3}>
                        <h3>Section</h3>
                        <p>Header</p>
                        <p>Hiring Process</p>
                        <p>Our Features</p>
                        
                    </div>
                </div>
            </div>
            <div className={css.bottomcontainer}>
                <div className={css.line} ></div>
                <div className={css.bottomcontent}>
                    <p>© 2023, instruction . All Rights Reserved</p>
                    <div className={css.icons}>
                        <BsTwitterX />
                        <FaFacebookF />
                        <FiInstagram />

                    </div>
                    <div className={css.tos}>
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Login</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer