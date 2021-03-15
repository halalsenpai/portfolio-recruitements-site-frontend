import React, { useEffect, useRef, useState } from 'react'
import CrossfadeImage from 'react-crossfade-image';
import Flip from 'react-reveal/Flip';

function CBannerWithImages() {
    const [images, setImages] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const interval = useRef(null);
    useEffect(() => {
        interval.current = setInterval(() => shuffleImages(), 4000);
        return () => {
            clearInterval(interval.current)
        }
    }, [])
    const shuffleImages = async () => {
        let indexes = [getRNo(), getRNo(),getRNo()];
        let currentImages = [...images];
        await indexes.forEach(index => {
            let isUniqueImage = false;
            while (!isUniqueImage) {
                let randomImage = getRNo();
                if (currentImages.indexOf(randomImage) === -1) {
                    currentImages[index] = randomImage;
                    isUniqueImage = true;
                }
            }
        });
        setImages(currentImages);
    }

    const getRNo = () => {
        return Math.floor(Math.random() * 15) + 1;
    }
    const renderImage = (imageSrc) => {
        return <Flip bottom cascade key={imageSrc} duration={2000}>
            <img src={require(`../../../assets/images/ms/ms-${imageSrc}.png`)} />
        </Flip>
    }
    return (
        <div className="c-banner-with-images">
            <span className="imgs-row">
                {renderImage(images[0])}
                {renderImage(images[1])}
                {renderImage(images[2])}
            </span>
            <span className="imgs-row">
                {renderImage(images[3])}
                {renderImage(images[4])}
                {renderImage(images[5])}
            </span>
            <span className="imgs-row">
                {renderImage(images[6])}
                {renderImage(images[7])}
                {renderImage(images[8])}
            </span>
            <span className="imgs-row">
                {renderImage(images[9])}
                {renderImage(images[10])}
                {renderImage(images[11])}
            </span>

        </div>
    )
}

export default CBannerWithImages
