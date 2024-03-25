import React from 'react';
import css from './ContactForm.module.scss';
import { LuPhone } from "react-icons/lu";

const ContactForm = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.leftcontainer}>
          <h4>CONTACT US</h4>
          <h2>How can I Help You?</h2>
          <p>Fill in the form and drop an email</p>
          <div className={css.inputs}>
           

            <input type='text' placeholder='+923340452822' />
            <input type='text' placeholder='something@gmail.com' />
            <input type='text' placeholder='street #12 gulberg, Lahore' />
          </div>
        </div>
        <div className={css.rightcontainer}>
            <input type='text' placeholder='Full Name' />
            <input type='text' placeholder='Email Adress' />
            <input type='text' placeholder='Subject' />
            <input type='textarea' placeholder='Meassage' />
            <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
