import React from "react";
import ImageSlider from "./imgs/ImageSlider.js";

function SliderContent({ activeIndex, imageSlider }) {
    return (
        <section>
            {imageSlider.map((slide, index) => (
                <div key={index}
                    className={ index === activeIndex ? 'slides active' : 'inactive' }>
                    <img className='slide-image' src={slide.urls} alt='#'/>
                    <H2 className='slide.title'>{slide.title}</H2>
                    <H4 className='slide.title'>{slide.description}</H4>
                </div>
                ))}
        </section>
    );
}

export default SliderContent;