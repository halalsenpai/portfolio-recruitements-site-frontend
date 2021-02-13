import React from 'react'
import { Carousel } from 'antd';
function CSlider() {
    return (
        <div className="c-slider">
            <Carousel autoplay effect="scrollx">
            <img  src={require('../../../assets/images/banImg1.png')} alt="img1" />
            <img  src={require('../../../assets/images/banImg1.png')} alt="img1" />
            <img  src={require('../../../assets/images/banImg1.png')} alt="img1" />
            </Carousel>
        </div>
    )
}

export default CSlider
