import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class ProjectCarousel extends Component {
    render(){
        return (
            <Carousel width="100%" centerMode={true}>
                <div>
                    <img src="https://s3.amazonaws.com/boriandmallory-public-resources/test.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://s3.amazonaws.com/boriandmallory-public-resources/test.png" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        );
    }
}