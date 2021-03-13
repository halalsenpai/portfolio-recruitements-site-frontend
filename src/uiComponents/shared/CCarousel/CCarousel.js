import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

function CCarousel({ children }) {
    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };
    return (
        <div className="c-carousel">
            <OwlCarousel ref="car" options={options} >
                {React.Children.map(children, child => {  return  {child} })}
            </OwlCarousel>

        </div>
    )
}

export default CCarousel
