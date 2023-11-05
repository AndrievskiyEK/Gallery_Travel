import React from 'react';
import './Gallery.css';



import GalleryCard from '../Gallery_card/Gallery_card'
import ImgCardDubai from '../../assets/Dubai.jpg'
import ImgCardIstanbul from '../../assets/Istanbul.jpg'
import ImgCardPhuket from '../../assets/Phuket.jpg'
import ImgCardTbilisi from '../../assets/Tbilisi.jpg'

const galleries = [
    {
        city: "Тбилиси",
        mounth: "апрель",
        price: "83.000",
        image: ImgCardTbilisi,
        transport: "на автобусе",
        vouchers: 10,
    },
    {
        city: "Стамбул",
        mounth: "март",
        price: "110.000",
        image: ImgCardIstanbul,
        transport: "на самолете",
        vouchers: "",
    },
    {
        city: "Дубай",
        mounth: "июнь",
        price: "220.000",
        image: ImgCardDubai,
        transport: "на самолете",
        vouchers: 15,
    },
    {
        city: "Пхукет",
        mounth: "сентябрь",
        price: "135.000",
        image: ImgCardPhuket,
        transport: "самолет + паром",
        vouchers: 11,
    },
]


function Gallery () {
    return (
        <div className='Gallery__wrapper'>
            {galleries.map(function(gallery){
                return (
                    <GalleryCard
                    city = {gallery.city}
                    mounth = {gallery.mounth}
                    price = {gallery.price}
                    image = {gallery.image}
                    transport = {gallery.transport}
                    vouchers = {gallery.vouchers}                   
                    />
                )
            })}            
        </div>
    )
}
export default Gallery