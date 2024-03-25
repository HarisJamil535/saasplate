import React from 'react'
import css from './Hero.module.scss'
import { GiCheckMark } from "react-icons/gi";
import heroimg from '../../assets/Images/heroimg.png'
import review1pic from '../../assets/Images/person1.png'

const Hero = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container} >
            <div className={css.leftcontainer}>
            <h1><span>Customer Service </span>
                    is The Face of Our
                    Company</h1>
                <p>Collaborate, manage projects, and reach new productivity peaks, From high
                    rises to the home office, the way your team works.</p>
                <div className={css.emailinput}>
                    <input type='text' placeholder='Enter your Email Adress'></input>
                    <button>Sign up Free</button>
                </div>
                <div  className={css.services}>
                    <div>  <GiCheckMark/>  Free 14 Days Trial  </div>
                    <div>  <GiCheckMark/> Automation  </div>
                    <div>  <GiCheckMark/> Online Messaging  </div>
                </div>

            </div>
            <div className={css.rightcontainer}>
            <div className={css.review1}>
                    <div className={css.review1content}>Hi Sarah! Welcome to SassPlate</div>
                   <img src={review1pic} alt='review1' />
                </div>
                <div className={css.twentyfourby7}>
                    <div className={css.rectangle}> <span>24/7</span> Support</div>
                    <div className={css.triangle}></div>
                </div>
            <div className={css.ellipse}></div>
                <img src={heroimg} alt='heroimg' />
            </div>

        </div>
    </div>
  )
}

export default Hero