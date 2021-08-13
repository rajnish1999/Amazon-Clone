import React from 'react'

import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                alt=""
                />

                <div className="home__row">
                    <Product
                        id="1" 
                        title="The lean startup"
                        price={29.29}
                        image="https://picsum.photos/id/111/367/267"
                        rating={5}
                    />
                    <Product 
                        id="2" 
                        title="The lean startup"
                        price={29.29}
                        image="https://picsum.photos/id/111/367/267"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="3" 
                        title="The lean startup"
                        price={29.29}
                        image="https://picsum.photos/id/111/367/267"
                        rating={5}
                    />
                    <Product 
                        id="4" 
                        title="The lean startup"
                        price={29.29}
                        image="https://picsum.photos/id/111/367/267"
                        rating={5}
                    />
                    <Product 
                        id="5" 
                        title="The lean startup"
                        price={29.29}
                        image="https://picsum.photos/id/111/367/267"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="6" 
                        title="The lean startup"
                        price={29.29}
                        image="https://picsum.photos/id/111/367/267"
                        rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
