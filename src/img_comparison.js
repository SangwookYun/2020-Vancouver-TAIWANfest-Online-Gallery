import React from 'react';
import ImageSlider from "react-image-comparison-slider";
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg'

const height = '70vh';
//64vh possible
// resource https://www.npmjs.com/package/react-compare-image

// added inline style to div className-"container"
function ImgComparison() {
    return (
        <div className="imgs" >
            <ImageSlider
        image1={image1}
        image2={image2}
        height={height}
        onSlide={() => {
          console.log("sliding");
        }}
    />
        </div>
    );
}

export default ImgComparison;