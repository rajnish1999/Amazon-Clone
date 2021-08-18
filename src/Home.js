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
                        key={1}
                        id="1" 
                        title="Iphone 12"
                        price={100}
                        image="https://picsum.photos/id/111/367/267"
                        rating={5}
                    />
                    <Product 
                        key={11}
                        id="2" 
                        title="Samsung Galaxy"
                        price={200}
                        image="https://picsum.photos/id/1051/367/267"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        key={111} 
                        id="3" 
                        title="Apple TV"
                        price={300}
                        image="https://picsum.photos/id/1026/367/267"
                        rating={5}
                    />
                    <Product 
                        key={1111}
                        id="4" 
                        title="MI Remote"
                        price={400}
                        image="https://picsum.photos/id/1029/367/267"
                        rating={5}
                    />
                    <Product 
                        key={11111}
                        id="5" 
                        title="Voltas AC"
                        price={500}
                        image="https://picsum.photos/id/1032/367/267"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        key={111111}
                        id="6" 
                        title="Redmi Note 8"
                        price={600}
                        image="https://picsum.photos/id/113/367/267"
                        rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
