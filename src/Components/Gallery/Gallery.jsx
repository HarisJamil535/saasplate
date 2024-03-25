import React from 'react'
import css from './Gallery.module.scss'
import img1 from '../../assets/Images/gallery/img1.png'
import img2 from '../../assets/Images/gallery/img2.png'
import img3 from '../../assets/Images/gallery/img3.png'
import img4 from '../../assets/Images/gallery/img4.png'
import img5 from '../../assets/Images/gallery/img5.png'
import img6 from '../../assets/Images/gallery/img6.png'
import img7 from '../../assets/Images/gallery/img7.png'
import img8 from '../../assets/Images/gallery/img8.png'
import img9 from '../../assets/Images/gallery/img9.png'
import img10 from '../../assets/Images/gallery/img10.png'
import img11 from '../../assets/Images/gallery/img11.png'
import img12 from '../../assets/Images/gallery/img12.png'

const Gallery = () => {

    let imgs = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
    ]

    return (


        <div className={css.wrapper}>
            <h1>Our Gallery</h1>

            <div className={css.gallery}>
                {
                    imgs.map((item,index)=>{
                        return( 
                            <div className={css.pics} key={index}>
                                <img src={item.imgSrc} style={{width:'100%'}} />

                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Gallery