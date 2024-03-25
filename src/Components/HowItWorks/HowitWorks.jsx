import React from 'react'
import css from './HowitWorks.module.scss'
import howitworks1 from '../../assets/Images/howitworks1.png'
import howitworks2 from '../../assets/Images/howitworks2.png'
import howitworks3 from '../../assets/Images/howitworks3.png'
import arrow1 from '../../assets/Images/arrow1.png'


const HowitWorks = () => {
    return (
        <div className={css.wrapper}>
            <h1>HOW IT WORKS</h1>
            <div className={css.container}>
                <div className={css.row1}>
                    <div className={css.left}>
                        <span>01</span> <span className={css.text} >Fundamental</span>
                    </div>
                    <div className={css.center}>  <img src={howitworks1} />   </div>
                    <div className={css.right}>This section aims to establish a foundational understanding of the core concepts and theories that govern the subject matter.  </div>
                </div>
                <div className={css.row2}>
                    <div className={css.left}>
                        In this section, the processes and interactions between the various components are explored. It highlights how these elements work.
                    </div>
                    <div className={css.center}> <img src={howitworks2} /> </div>
                    <div className={css.right}> <span>02</span> <span className={css.text} >Interactions</span></div>
                </div>
                <div className={css.row3}>
                    <div className={css.left}> <span>03</span> <span className={css.text} >Coclusions</span></div>
                    <div className={css.center}><img src={howitworks3} /></div>
                    <div className={css.right}>The conclusion briefly summarizes the key points discussed in the "How It Works" section. It reinforces the main takeaways and emphasizes.</div>
                </div>
            </div>

        </div>
    )
}

export default HowitWorks