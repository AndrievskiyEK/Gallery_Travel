import React from 'react';
import './Gallery_card.css';



function GalleryCard (props) {
    return (
        <div className='GalleryCard__wrapper'>
            <div className='GalleryCard__descriptions'>
                <p className='GalleryCard__transport'>{props.transport}</p>
                {props.vouchers != "" && (<p className='GalleryCard__vouchers'>{props.vouchers}</p>)}                               
            </div>

            <a href="">
                <img src={props.image} alt="" />
            </a>
            <p className='GalleryCard__title'>{props.city}, {props.mounth} — {props.price}</p>          
        </div>
    );
}

export default GalleryCard