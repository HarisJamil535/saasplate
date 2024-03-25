import React, { useState } from 'react'
import css from './Navbar.module.scss';
import { FiPlus } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)
  const [dropdown4, setDropdown4] = useState(false)
  const [mobileMenu, setMobilemenu] = useState(false)

  return (
    <>
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.logo}>SaasPlate</div>
        <ul className={css.menuitems}>
          <li onClick={() => {setDropdown1(!dropdown1);setDropdown2(false); setDropdown3(false); setDropdown4(false)}}> <span>Home</span> <FiPlus />
            {dropdown1 && (
              <div className={css.dropdown}>
                <li>How to use</li>
                <li>Tutorials</li>
                <li>Guidelines</li>
                <li>Help</li>
                <li>Theme "Bulid"</li>
                <li>Instruction Mannual</li>

              </div>
            )}
          </li>
          <li  onClick={() => {setDropdown1(false);setDropdown2(!dropdown2); setDropdown3(false); setDropdown4(false)}} ><span>Product</span> <FiPlus />
            {dropdown2 && (
              <div className={css.dropdown}>
                <li>How to use</li>
                <li>Tutorials</li>
                <li>Guidelines</li>
                <li>Help</li>
                <li>Theme "Bulid"</li>
                <li>Instruction Mannual</li>

              </div>
            )}
          </li>
          <li  onClick={() => {setDropdown1(false);setDropdown2(false); setDropdown3(!dropdown3); setDropdown4(false)}} ><span>Indusries</span> <FiPlus />
            {dropdown3 && (
              <div className={css.dropdown}>
                <li>How to use</li>
                <li>Tutorials</li>
                <li>Guidelines</li>
                <li>Help</li>
                <li>Theme "Bulid"</li>
                <li>Instruction Mannual</li>

              </div>
            )}
          </li>
          <li  ><span>FAQ's</span> 
           </li>
          <li  onClick={() => {setDropdown1(false);setDropdown2(false); setDropdown3(false); setDropdown4(!dropdown4)}} ><span>Recourse</span> <FiPlus />
            {dropdown4 && (
              <div className={css.dropdown}>
                <li>How to use</li>
                <li>Tutorials</li>
                <li>Guidelines</li>
                <li>Help</li>
                <li>Theme "Bulid"</li>
                <li>Instruction Mannual</li>

              </div>
            )}</li>
        </ul>
        <button>Try for free</button>
        <RxHamburgerMenu onClick={()=>setMobilemenu(!mobileMenu)} className={css.hamburger} />

      </div>

    </div>
    { mobileMenu &&
       (<div   className={css.mobilemenu}>
       <ul>
         <li>Home</li>
         <li>Products</li>
         <li>Industries</li>
         <li>Faqs</li>
         <li>Resourse</li>
       </ul>
     </div>)

    }
   

    {dropdown1 || dropdown2 || dropdown3 || dropdown4 || mobileMenu ? (
  <div
    className={css.overlay}
    onClick={() => {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
      setDropdown4(false);
      setMobilemenu(false)
    }}
  ></div>
) : null}

    </>
  )
}

export default Navbar