import React, { useState } from 'react'
import css from './Faqs.module.scss'
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import faqimg from '../../assets/Images/faq.png'


const Faqs = () => {

    const [dropdown1, setDropdown1] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const [dropdown3, setDropdown3] = useState(false)
    const [dropdown4, setDropdown4] = useState(false)
    return (
        <div className={css.wrapper} >

            <div className={css.imgandframe}>
                <div className={css.imgframe}></div>
                <img src={faqimg} alt='faq' />
            </div>

            <div className={css.container}>

                <div className={css.subcontainer}>

                    <p>[Some Faqs]</p>
                    <h2>A simple process.</h2>

                    <div className={css.btnandpara}>
                        <button onClick={() => setDropdown1(!dropdown1)} style={dropdown1 ? { background: '#FF543E', color: 'white' } : null} ><span>What if my solar panels break or malfunction?</span> {dropdown1 ? <FaPlusCircle /> : <FaMinusCircle />} </button>
                        {dropdown1 ? <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. </p> : <></>}
                    </div>

                    <div className={css.btnandpara}>
                        <button onClick={() => setDropdown2(!dropdown2)} style={dropdown2 ? { background: '#FF543E', color: 'white' } : null}><span>How do I get my solar tax credits?</span> {dropdown2 ? <FaPlusCircle /> : <FaMinusCircle />} </button>
                        {dropdown2 ? <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. </p> : <></>}
                    </div>

                    <div className={css.btnandpara}>
                        <button onClick={() => setDropdown3(!dropdown3)} style={dropdown3 ? { background: '#FF543E', color: 'white' } : null} ><span>I am moving soon, does it make sense for me to go solar?</span> {dropdown3 ? <FaPlusCircle /> : <FaMinusCircle />} </button>
                        {dropdown3 ? <p>There are many factors that can affect which option is the right fit for you, including the size of your roof, the amount of annual sun exposure, shading, roof condition, annual power consumption, and your tax liability. Our expert ne which route makes the most sense for you. In </p> : <></>}
                    </div>

                    <div className={css.btnandpara}>
                        <button onClick={() => setDropdown4(!dropdown4)} style={dropdown4 ? { background: '#FF543E', color: 'white' } : null} ><span>How do I get my solar tax credits?</span> {dropdown4 ? <FaPlusCircle /> : <FaMinusCircle />} </button>
                        {dropdown4 ? <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. </p> : <></>}
                    </div>

                    <button className={css.getintouch} >GET IN TOUCH</button>


                </div>
            </div>

        </div>
    )
}

export default Faqs