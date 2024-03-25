import React from 'react'
import css from './OnlineShop.module.scss'
import img1 from '../../assets/Images/img1.png'
import img2 from '../../assets/Images/img2.png'
import img3 from '../../assets/Images/img3.png'
import img4 from '../../assets/Images/img4.png'
import img5 from '../../assets/Images/img5.png'
import img6 from '../../assets/Images/img6.png'
import img7 from '../../assets/Images/img7.png'
import img8 from '../../assets/Images/img8.png'
import img9 from '../../assets/Images/img9.png'

const OnlineShop = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.container}>
                <div className={css.leftcontainer} >
                    <div className={css.elegro}>Elegro</div>
                    <h3>Our Online Shop Supports Payments with Cryptocurrencies</h3>
                    <p>Pay for the goods with just one click! Elegro plugin makes it superp  cryptocurrencies!</p>
                    <button>View Now</button>
                </div>
                <div class={css.rightcontainer}>

                    <div class={css.circle}> <img src={img3} alt='img1' /> </div>
                    <div class={css.circle}> <img src={img2} alt='img1' /> </div>
                    <div class={css.circle}> <img src={img3} alt='img1' /> </div>
                    <div class={css.circle}> <img src={img4} alt='img1' /> </div>
                    <div class={css.circle}> <img src={img5} alt='img1' /> </div>
                    <div class={css.circle}> <img src={img6} alt='img1' /> </div>
                    <div class={css.circle}> <img src={img7} alt='img1' /> </div>
                    <div class={css.circle}> <img src={img8} alt='img1' /> </div>
                    <div class={css.circle}> <img src={img9} alt='img1' /> </div>

                </div>
            </div>

        </div>
    )
}

export default OnlineShop