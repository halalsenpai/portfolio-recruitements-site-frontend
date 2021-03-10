import React from 'react'
import { Image } from 'antd';
import { MappedElement } from '../../../utils/helper';
function CImagesGallery({ title = 'Photos', images = [
    { src: require('../../../assets/images/sample/cmp-img-1.png') },
    { src: require('../../../assets/images/sample/cmp-img-2.png') },
    { src: require('../../../assets/images/sample/cmp-img-3.png') },
    { src: require('../../../assets/images/sample/cmp-img-1.png') },
    { src: require('../../../assets/images/sample/cmp-img-3.png') },
] }) {
    return (
        <div className="c-images-gallery" >

            <span className="c-images-gallery-header">

                <h6 className="title">{title}</h6>
                <a className="action">See More</a>

            </span>

            <span className="images-container">

                <MappedElement data={images.slice(0, 3)} renderElement={(obj, index) => {

                    return <Image src={obj.src} />

                }} />

            </span>
        </div>
    )
}

export default CImagesGallery
