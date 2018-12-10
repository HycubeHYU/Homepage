import React, { Component } from 'react';
import Carousel from './Carousels';
import Introduction from './Introduction';

class Main extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <Introduction/> 
            </div>
        );
    }
}

export default Main;