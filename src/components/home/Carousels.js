import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap'

class Carousels extends Component {
    render() {
        return (
            <div className="carousel">
                <Carousel>
                    <Carousel.Item>
                        <img alt="1" src="./img/logo.png" />
                        <Carousel.Caption>
                        <h3>삼단 논법 1</h3>
                        <p>나는 하이큐브 스터디를 한다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img  alt="2" src="./img/logo.png" />
                        <Carousel.Caption>
                        <h3>삼단 논법 2</h3>
                        <p>하이큐브 스터디를 하면 집에 가야한다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="3" src="./img/logo.png" />
                        <Carousel.Caption>
                        <h3>삼단 논법 3</h3>
                        <p>나는 집에 가야한다.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default Carousels;