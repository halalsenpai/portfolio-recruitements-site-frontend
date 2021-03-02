import React from 'react'

function CBannerWithImages() {
    return (
        <div className="c-banner-with-images">
            <span className="imgs-row">
                <img src={require('../../../assets/images/ms/ms-1.png')} att="ms" />
                <img src={require('../../../assets/images/ms/ms-2.png')} att="ms" />
                <img src={require('../../../assets/images/ms/ms-3.png')} att="ms" />
            </span>
            <span className="imgs-row">
                <img src={require('../../../assets/images/ms/ms-4.png')} att="ms" />
                <img src={require('../../../assets/images/ms/ms-5.png')} att="ms" />
                <img src={require('../../../assets/images/ms/ms-6.png')} att="ms" />
            </span>
            <span className="imgs-row">
                <img src={require('../../../assets/images/ms/ms-7.png')} att="ms" />
                <img src={require('../../../assets/images/ms/ms-8.png')} att="ms" />
                <img src={require('../../../assets/images/ms/ms-9.png')} att="ms" />
            </span>
            <span className="imgs-row">
                <img src={require('../../../assets/images/ms/ms-10.png')} att="ms" />
                <img src={require('../../../assets/images/ms/ms-11.png')} att="ms" />
                <img src={require('../../../assets/images/ms/ms-12.png')} att="ms" />
            </span>
            
        </div>
    )
}

export default CBannerWithImages
