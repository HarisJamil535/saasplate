import React from 'react'
import css from './NewsLetter.module.scss'
import mobileimg from '../../assets/Images/gallery/mobilepic.png'

const NewsLetter = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.container}>

                <div className={css.leftcontainer} >
                    <h1>Start Your Project With Appie.</h1>
                    <p>We will email you only about this product.</p>
                    <div className={css.inputandbtn}>
                     
                        <input type='text' placeholder='Enter Your Email'></input>
                        <button>Subscribe</button>

                    </div>
                </div>
                <div className={css.rightcontainer}> 
                <img src={mobileimg} />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter