import React from 'react';
import {connect} from 'react-redux';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';


const ImageCarousel = ({imgs}) => {
    let slides = imgs.map((img, index)=>{
        return (
            <SwiperSlide key={index}>
                <img src={img}  alt=""/>
            </SwiperSlide>
        )
    })
    return ( 
        <Swiper
        slidesPerView={3.2}>
            {slides}
        </Swiper>
    );
}
 
const mapStateToProps = (state)=>{
    return {
        imgs: state.imgs
    }
}
export default connect(mapStateToProps, null)(ImageCarousel);