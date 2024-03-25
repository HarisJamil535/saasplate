import React from 'react'
import css from './WhyChooseUs.module.scss'
import check from '../../assets/Images/check.png'

const WhyChooseUs = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.leftcontainer}>
                <div className={css.pinkcolor}></div>
                <div className={css.bars}>
                    <div className={css.bar1} > <img src={check} />Get 24/7 Strong Support</div>
                    <div className={css.bar2}> <img src={check} /> One Click Installations</div>
                    <div className={css.bar3}> <img src={check} /> 50+ Apps Integrations</div>
                    <div className={css.bar4}> <img src={check} /> Expert Team Member</div>
                </div>
            </div>
            <div className={css.rightcontainer}>
                <button className={css.btn1}>Why Choose SaasPlate</button>
                <h2>Knock Our Support and Get Reply within 15 minutes</h2>
                <button className={css.btn2} >Get In Touch Free</button>
            </div>


        </div>
    </div>
  )
}

export default WhyChooseUs