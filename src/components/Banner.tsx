import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import frieren from '../assets/img/frierin.jpg'
import classRoom from '../assets/img/classRoom.jpg'
import onepiece from '../assets/img/onepice.jpg'
import doctorElise from '../assets/img/doctorelise.jpg'
import undeadAdventure from '../assets/img/undeadAdventure.jpg'
import saitama from '../assets/img/saitama.jpg'

import frierin_name from '../assets/img/frierin_name.png'

import style from './Banner.css'


const Banner = () => {


    return (
        <section>
            <Carousel>
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src={frieren}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel">
                      <img width="300px" src={frierin_name} alt="" />
                      <p>Após uma missão de 10 anos ao lado do herói Himmel e seu grupo, a poderosa maga Frieren derrotou o Rei Demônio e trouxe paz ao reino. Como uma elfa, Frieren tem uma vida de mais de mil anos pela frente. Ela promete retornar para seus amigos e, assim, parte em uma jornada solitária.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src={classRoom}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src={onepiece}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src={doctorElise}
                        alt="Fory slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src={undeadAdventure}
                        alt="Fivty slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carousel">
                    <img
                        className="d-block w-100"
                        src={saitama}
                        alt="Sixty slide"
                    />
                </Carousel.Item>
                {/* Add more Carousel.Item components for additional slides */}
            </Carousel>
        </section>
    )
}

export default Banner