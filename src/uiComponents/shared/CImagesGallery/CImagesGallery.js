import React, { useState } from 'react'
import { Image } from 'antd';
import { MappedElement } from '../../../utils/helper';
import { Carousel } from 'antd';
import CModal from '../CModal/CModal';
function CImagesGallery({ title = 'Photos', images = [
    { src: require('../../../assets/images/sample/cmp-img-1.png') },
    { src: require('../../../assets/images/sample/cmp-img-2.png') },
    { src: require('../../../assets/images/sample/cmp-img-3.png') },
    { src: require('../../../assets/images/sample/cmp-img-1.png') },
    { src: require('../../../assets/images/sample/cmp-img-3.png') },
] }) {

    const [openAllImages, setOpenAllImages] = useState(false);
    const contentStyle = {
        height: '250px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div className="c-images-gallery" >

            <span className="c-images-gallery-header">

                <h6 className="title">{title}</h6>
                <a onClick={() => setOpenAllImages(true)} className="action">See More</a>

            </span>

            <span className="images-container">

                <MappedElement data={images.slice(0, 3)} renderElement={(obj, index) => {

                    return <Image src={obj.src} />

                }} />

            </span>  

            <CModal
                show={openAllImages}   
                className="center lg c-media-picker"
                backdrop="static"
                keyboard={false}
                onHide={() => setOpenAllImages(false)}
            >
                <span className="images-container-modal">
                            <MappedElement data={images} renderElement={(obj, index) => {
                                return  <Image key={index} src={obj.src} />
            
                            }} />
                </span>
            </CModal>
        </div>
    )
}

export default CImagesGallery
